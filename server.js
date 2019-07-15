const app = require('./api/util/app');
const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
const UserSchema = require('./models/user');
const mongooseConnect = require('./api/util/mongoose');
const persons = require('./test/persons');
const FriendReq = require('./utils/classes/friend-req');
dotenv.config();

[...mongooseConnect];

/*cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});*/

app.get('/agregar', async (req, res) => {
try{
  persons.forEach( async (person) => {
    try{
      const addPerson = new UserSchema(person);
      const add = await addPerson.save();
      console.log(add.fullname);
    } catch (err) {
      console.log(err);
    }
  })
  res.status(200).send("Agregados");
} catch (err) {
  console.log(err);
}
});

app.get('/add/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const newRequest = await UserSchema.findById(id);
    const newFriend = {
      url: newRequest.url,
      fullName: newRequest.fullname,
      perfilImg: newRequest.perfilImg,
      frontPageQuote: newRequest.frontPageQuote,
    }
    const friendRequest = new FriendReq(newFriend);
    res.status(200).json(friendRequest);
  } catch(err) {
    res.status(501).send(err);
  }
})

app.get('/buscar/:id', (req, res) => {
  const person = new UserSchema(persons[0]);
  console.log(person.url);
  res.status(200).send(person.url);
})
/**app.get('/buscar/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const resp = await UserSchema.findById(id);
    res.status(200).send(resp.virtual);
  } catch (err) {
    res.status(501).send(err);
  }
}) */

app.listen(4000, console.log('server on!'));

