const next = require('next')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const server = require('./api/util/app');
const mongoose = require('./api/util/mongoose');
const UserSchema = require('./models/user');
const FriendReq = require('./utils/classes/friend-req');

app.prepare().then(() => {
  
  [...mongoose]

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
  
  server.post('/api/login.js', async (req, res) => {
    const user = req.body;
    const validateUser = await UserSchema.findOne({ mail: user.mail, pass: user.pass });
    if (validateUser) {
      res.status(201).send(validateUser.id);
    } else {
      res.status(400).send();
    }
  
  });

  server.get('/foo/:id', async (req, res) => {
    const user = await UserSchema.findById(req.params.id);
    console.log(user);
    app.render(req, res, '/foo', { name: user.name });
  })

  server.get('/api/perfil.js', async (req, res) => {
    const { id } = req.query;
    const user = await UserSchema.findById(id);
    console.log(id);
    if (user) {
      console.log(user);
      res.status(200).json(user);
    } else {
      res.status(400).send();
    }
  });

  server.get('/api/notifications.js', async (req, res) => {
    try {
      const { id } = req.query;
      const userInfo = await UserSchema.findById(id);
      const notifications = {
        heart: userInfo.comments,
        friendReq: userInfo.friendReq,
        gifts: userInfo.gifts,
      }
      res.status(200).json(notifications);
    } catch (err) {
      console.log(err);
      res.status(501).send(err);
    }
  })

  server.post('/api/friendRequest.js', async (req, res) => {
    try {
      const { currentUser, targetUser } = req.body;
      const newRequest = await UserSchema.findById(currentUser);
      const newFriend = {
        id: currentUser,
        url: newRequest.url,
        fullName: newRequest.fullname,
        perfilImg: newRequest.perfilImg,
        frontPageQuote: newRequest.frontPageQuote,
      };
      const friendRequest = new FriendReq(newFriend);
      await UserSchema.findByIdAndUpdate(targetUser, {
        $push: {
          friendReq: {
            $each: [friendRequest],
            $position: 0
          }
        }
      });
      res.status(200).send();
    } catch (err) {
      console.log(err);
      res.status(501).send();
    }
  });
  
  server.post('/api/addFriend.js', async (req, res) => {
    try {
      const { currentUser, targetUser } = req.body;
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
      res.status(200).send();
    } catch (err) {
      res.status(501).send(err);
    }
  })
  
  server.post('/api/rmFriend.js', async (req, res) => {
    try {
      const { currentUser, targetUser } = req.body;
      await UserSchema.findByIdAndUpdate(currentUser, {
        $pull: {
          friendReq: {
            id: targetUser
          }
        }
      });
      res.status(200).send();
    } catch (err) {
      console.log(err);
      res.status(501).send(err);
    }
  })
  

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})