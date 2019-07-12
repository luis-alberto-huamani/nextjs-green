const app = require('./util/app');

app.get('*', (req, res) => {
  const name = req.query;
  res.status(200).send(`bienvenido ${name}`);
});

module.exports = app;

