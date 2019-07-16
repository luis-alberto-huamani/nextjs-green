const app = require('./util/app');
const mongooseConnect = require('./util/mongoose');
const UserSchema = require('../models/user');

[...mongooseConnect];

app.get('*', async (req, res) => {
  const { id } = req.query;
  const user = await UserSchema.findById(id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(400).send();
  }
});

module.exports = app;
app.listen(4000, console.log('on'));