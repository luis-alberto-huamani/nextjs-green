const app = require('./util/app');
const mongooseConnect = require('./util/mongoose');
const UserSchema = require('../models/user');
const FriendReq = require('../utils/classes/friend-req');

[...mongooseConnect];

app.post('*', async (req, res) => {
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

module.exports = app;