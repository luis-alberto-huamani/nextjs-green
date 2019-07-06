const app = require('./util/app');
const mongooseConnect = require('./util/mongoose');
const UserSchema = require('../models/user');

[...mongooseConnect];

app.post('*', async (req, res) => {
  const { mail, pass } = req.body;
  const newUser = new UserSchema(mail, pass);
  const isRegistred = await UserSchema.findOne({ mail: mail });
  if (isRegistred) {
    res.status(400).send();
  } else {
    const user = await newUser.save();
    res.status(201).send(user.id);
  }

});

module.exports = app;
