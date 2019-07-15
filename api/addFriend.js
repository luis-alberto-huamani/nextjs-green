const app = require('./util/app');
const mongooseConnect = require('./util/mongoose');
const UserSchema = require('../models/user');

[...mongooseConnect];

app.post('*', async (req, res) => {
  try {
    const { currentUser, targetUser } = req.body;
    const deleted = await UserSchema.findByIdAndUpdate(currentUser, {
      $pull: {
        friendReq: {
          id: targetUser,
        }
      }
    });
    const newFriend = deleted.friendReq.find((item) => {
      return item.id === targetUser;
    })
    const added = await UserSchema.findByIdAndUpdate(currentUser, {
      $push:{
        friends: newFriend,
      }
    });
    res.status(200).json(added.friendReq);
  } catch (err) {
    res.status(501).send(err);
  }
})


module.exports = app;
