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
  eventid: String,
  eventtitle: String,
  userChoices: Object,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = {
  UserCol,
  Game,
  Event,
};
