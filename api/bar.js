const app = require('./util/app');


app.get('*', async (req, res) => {
  res.status(200).send("hola mundo");
});

module.exports = app;
