const app = require('./util/app');
const mongooseConnect = require('./util/mongoose');
const UserSchema = require('../models/user');
const FriendReq = require('../utils/classes/friend-req');

[...mongooseConnect];

app.post('/api/login', async (req, res) => {
  const user = req.body;
  const validateUser = await UserSchema.findOne({ mail: user.mail, pass: user.pass });
  if (validateUser) {
    res.status(201).json(validateUser);
  } else {
    res.status(400).send();
  }

});


app.get('/api/perfil', async (req, res) => {
  const { id } = req.query;
  const user = await UserSchema.findById(id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(400).send();
  }
});


app.post('/api/friendRequest', async (req, res) => {
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

app.listen(4000, console.log('server on'));

//module.exports = app;