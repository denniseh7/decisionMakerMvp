const mongoose = require('mongoose');
const { UserCol, Game } = require('./model');

module.exports = {
  getUserCol: async () => {
    const result = await UserCol.find();
    console.log('Got user collection of', result.length || 0);
    return result;
  },
  getGame: async (objectId) => {
    const result = await Game.findOne({ objectId });
    console.log('Got game info:', Object.keys(result));
    return result;
  },
  getEvent: async (eventId) => {

  },
  createEvent: async(eventData) => {

  },
};
