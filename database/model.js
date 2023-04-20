const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  objectId: String,
  userGame: Object,
});

const UserCol = mongoose.model('UserCol', userSchema);

const gameSchema = mongoose.Schema({
  objectId: String,
  thing: Object,
});

const Game = mongoose.model('Game', gameSchema);

const eventSchema = mongoose.Schema({
  eventId: String,
  choices: Array,
  name: String,
  users: Object,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = {
  UserCol,
  Game,
  Event,
};
