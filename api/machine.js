const app = require('./util/app');
const mongooseConnect = require('./util/mongoose');
const UserSchema = require('../models/user');


[...mongooseConnect];


app.post('*', async (req, res) => {
  const { productId, userId, precio  } = req.body;
  res.status(200).send(`la transaccion del producto ${productId} con precio ${precio} del usuario ${userId} ha sido completada exitosamente`);
});

module.exports = app;

//curl -d '{"productId": "123456", "userId": "789456", "precio": "500gc"}' -H "Content-Type: application/json" -X POST https://nextjs-green.now.sh/api/machine.js
//app.listen(4000, console.log('server on'));