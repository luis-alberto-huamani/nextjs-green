const app = require('./util/app');
const mongooseConnect = require('./util/mongoose');
const UserSchema = require('../models/user');

[...mongooseConnect];

app.get('*', async (req, res) => {
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


module.exports = app;
