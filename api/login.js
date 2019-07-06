const app = require('./util/app');
const mongooseConnect = require('./util/mongoose');
const UserSchema = require('../models/user');

[...mongooseConnect];


app.post('*', async (req, res) => {
  const user = req.body;
  const validateUser = await UserSchema.findOne({ mail: user.mail, pass: user.pass });
  if (validateUser) {
    res.status(201).send(validateUser.id);
  } else {
    res.status(400).send();
  }

});

module.exports = app;
