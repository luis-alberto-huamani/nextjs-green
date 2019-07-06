const app = require('../respaldo/util/app');

app.get('*', (req,res) => {
  res.status(200).send('hola mundo');
});

module.exports = app;
