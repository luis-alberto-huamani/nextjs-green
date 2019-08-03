const next = require('next')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const server = require('./api/util/app');
const redis = require('redis');
const mongoose = require('./api/util/mongoose');
const UserSchema = require('./models/user');
const FriendReq = require('./utils/classes/friend-req');
const aws = require('aws-sdk');
const s3 = new aws.S3({});
const multer = require('multer');
const multerS3 = require('multer-s3');
const dotEnv = require('dotenv');
const persons = require('./test/persons');
dotEnv.config();
const uuid = require('uuid/v1');
const session = require('express-session');
const redisSessionStore = require('connect-redis')(session);

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'greenlink-ftandco',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
});

app.prepare().then(() => {
  
  [...mongoose]
  //const client = redis.createClient(6379, 'greenredis.3j3itc.0001.use2.cache.amazonaws.com');
  const client = redis.createClient(6379);
  client.on('connect', () => console.log(`redis on`));

  server.use(session({
    genid: (req) => uuid(),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { expires: 60000 * 60 * 12},
    store: new redisSessionStore({ client: client })
  }))

  UserSchema.find({}).then((bdUsers) => {
    const redisUsers = bdUsers.map((user) => {
      const redisUser = {
        url: user.url,
        fullName: user.fullname,
        perfilImg: user.perfilImg,
      }
      return redisUser;
    })
    client.set('users', JSON.stringify(redisUsers));
  }).catch(err => console.log(err));

  server.get('/api/search/:name', (req, res) => {
    const { name } = req.params;
    client.get('users', (err, users) => {
      if (err) {
        res.status(501).send(err);
      };
      if(!users) {
        UserSchema.find({}).then((bdUsers) => {
          const redisUsers = bdUsers.map((user) => {
            const redisUser = {
              url: user.url,
              fullName: user.fullname,
              perfilImg: user.perfilImg,
            }
            return redisUser;
          })
          client.set('users', JSON.stringify(redisUsers));
        }).catch(err => console.log(err));
      }
      const toSearch = JSON.parse(users);
      const suggest = toSearch.filter((user) => {
        return user.fullName.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) > -1;
      });
      res.status(200).json(suggest);
    })
  })

  server.post('/api/registro.js', async (req, res) => {
    const { mail, pass } = req.body;
    const newUser = new UserSchema({ mail, pass });
    const isRegistred = await UserSchema.findOne({ mail });
    if (isRegistred) {
      res.status(400).send();
    } else {
      const user = await newUser.save();
      res.status(201).send(user.id);
    }
  
  });

  server.post('/api/login', async (req, res) => {
    try {
      const { mail, pass } = req.body;
      const user = await UserSchema.findOne({ mail, pass });
      req.session.user = user;
      res.status(200).send(user.id);
      } catch (err) {
      res.status(400).send();
    }
  });

  server.get('/full', (req, res) => {
    persons.forEach(async (user) => {
      const newUser = new UserSchema(user);
      const name = await newUser.save();
      console.log(name.name);
    });
  })

  server.get('/perfil/:id', async (req, res) => {
    try{
      const sessionId = req.session.user._id;
      const reqId = req.params.id;
      const userBD = await UserSchema.findById(reqId);
      const user = {
        perfilImg: userBD.perfilImg,
        name: userBD.name,
        lastName: userBD.lastName,
        frontPageQuote: userBD.frontPageQuote,
        frontPageImg: userBD.frontPageImg,
        owner: false,
        id: reqId,
        friendReq: userBD.friendReq,
        friends: userBD.friends,
      }
      if (reqId === sessionId) {
        user.owner = true;
        app.render(req, res, '/perf', { user });
      } else {
        const isFriend = await user.friends.find(friend => friend.id === sessionId);
        const isFriendReqSent = await user.friendReq.find(friend => friend.id === sessionId);
        const { friendReq } = await UserSchema.findById(sessionId, 'friendReq');
        console.log(friendReq);
        const isWaiting = await friendReq.find(friend => friend.id === reqId);
        console.log(isWaiting);
        const friend = isFriend ? 'accepted' : isFriendReqSent ? 'sent' : isWaiting ? 'wating' : '';
        user.friend = friend;
        app.render(req, res, '/perf', { user });
      }
    } catch (err){
      console.log(err);
      res.status(400).send();
    }
  });

  server.get('/notifications', (req, res) => {
    const { user } = req.session;
    if(user) {
      const notifications = {
        heart: user.comments,
        friendReq: user.friendReq,
        gifts: user.gifts,
        name: user.name,
        url: `/perfil/${user._id}`
      }
      res.status(200).json(notifications)
    } else {
      res.status(400).send();
    }
  })

  server.get('/sendFriendReq/:id', async (req, res) => {
    try{
      const user = req.session.user;
      const targetUser = req.params.id;
      const friendReq = {
        id: user._id,
        perfilImg: user.perfilImg,
        fullName: `${user.name} ${user.lastName}`,
        url: `/perfil/${user._id}`
      }
      await UserSchema.findByIdAndUpdate(targetUser, {
        $push:{
          friendReq
        }
      });
      res.status(200).send();
    } catch (err){
      res.status(500).send();
    }
  })
  
  server.get('/aceptFriend/:id', async (req, res) => {
    try {
      const targetUser = req.params.id;
      const currentUser = req.session.user._id;
      const deleted = await UserSchema.findByIdAndUpdate(currentUser, {
        $pull: {
          friendReq: {
            id: targetUser,
          }
        }
      });
      const newFriend = await deleted.friendReq.find((item) => {
        return item.id === targetUser;
      })
      await UserSchema.findByIdAndUpdate(currentUser, {
        $push:{
          friends: newFriend,
        }
      });
      const current = {
        id: currentUser,
        url: `/perfil/${currentUser}`,
        fullName: `${req.session.user.name} ${req.session.user.lastName}`,
        perfilImg: req.session.user.perfilImg,
      };
      await UserSchema.findByIdAndUpdate(targetUser, { $push: { friends: current } });
      res.status(200).send();
    } catch (err) {
      console.log(err);
      res.status(501).send(err);
    }
  });

  server.get('/cancelFriendReq/:id', async (req, res) => {
    try{
      const targetId = req.param.id;
      const currentId = req.session.user._id;
      await UserSchema.findByIdAndUpdate(targetId, { $pull: { friendReq: { id: currentId } } });
      res.status(200).send();
    } catch (err){
      console.log(err);
      res.status(400).send();
    }
  })
  
  server.get('/rmFriend/:id', async (req, res) => {
    try{
      const targetId = req.params.id;
      const currentId = req.session.user._id;
      const rmFriend = async (current, target) => {
        await UserSchema.findByIdAndUpdate(current, { $pull: { friends: { id: target } } });
        return;
      };
      rmFriend(currentId, targetId);
      rmFriend(targetId, currentId);
      res.status(200).send();
    } catch (err) {
      console.log(err);
      redis.status(500).send(err);
    }
  })

  server.post('/api/upload/:file', upload.single('file'), async (req, res) => {
    try{
      const id = req.session.user._id;
      const response = await UserSchema.findByIdAndUpdate(id, { [req.params.file]: req.file.location });
      console.log(response);
      res.status(200).send(req.file.location);
    } catch (err) {
      res.status(400).send(err);
      console.log(err);
    }
  });
  server.get('/logout', (req, res) => {
    req.session.destroy();
    res.status(200).send();
  });

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

/*const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'static/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({
  storage
})*/