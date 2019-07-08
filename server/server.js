const app = require('express')();

app.get('*', (req, res) => {
  res.send('hola mundo');
});

app.listen(3000);
