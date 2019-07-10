const app = require('./util/app');
const http = require('http');
const socketIO = require('socket.io');
const axios = require('axios');
const PORT = process.env.PORT || 4001;


app.get("*", (req, res) => {
  res.status(200).send("hola mundo");
})

const server = http.createServer(app);
const io = socketIO(server);
const getApiAndEmit = async socket => {
  socket.emit("fromApi", "hola foo bar");
};

let interval;
io.on("connection", socket => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
