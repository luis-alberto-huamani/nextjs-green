const app = require('./util/app');
const mongooseConnect = require('./util/mongoose');
const UserSchema = require('../models/user');

[...mongooseConnect];

app.post('*', async (req, res) => {
  try {
    const { currentUser, targetUser } = req.body;
    const toDelete = await UserSchema.findByIdAndUpdate(currentUser, {
      $pull: {
        friendReq: {
          id: targetUser
        }
      }
    });
    const deleted = toDelete.find((item) => item.id === targetUser);
    res.status(201).send(deleted.id);
  } catch (err) {
    console.log(err);
    res.status(501).send(err);
  }
})

module.exports = app;