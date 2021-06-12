const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const socketIo = require('socket.io');
const http = require('http');

const routes = require('./routes/api');
const fantasyTeamRoutes = require('./routes/fantasyTeamRoutes');

require('dotenv').config();

const port = process.env.PORT || 5000;
const websocketPort = 4000;

const app = express();

const server = http.createServer(app);
server.listen(websocketPort, () => console.log(`Websocket listening on port ${websocketPort}`));

const io = socketIo(server);

const getApiAndEmit = socket => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit('FromAPI', response);
};

let interval;

io.on('connection', socket => {
  console.log('New client connected');
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on('disconnect', () => {
    console.log('Client disconnected');
    clearInterval(interval);
  });
});

// connect to the database
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@checked-dev.cwenl.mongodb.net/fantasyDrafter?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    }
  )
  .then(() => console.log('Database connected successfully'))
  .catch(console.log);

// since mongoose promise is depreciated, we overide it with node's promise
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.json());

app.use('/api', routes);
app.use('/api', fantasyTeamRoutes);

app.use((err, req, res, next) => {
  console.log('app.use error: ', err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
