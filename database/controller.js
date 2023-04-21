const mongoose = require('mongoose');
const { UserCol, Game, Event } = require('./model');

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
  getEvent: async (eventid) => {
    const event = await Event.findOne({ eventid });
    console.log('Got event', Object.keys(event));
    return event;
  },
  createEvent: async (eventData) => {
    const eventCount = await Event.countDocuments();
    const newEvent = new Event({
      ...eventData,
      eventid: eventCount,
    });
    const result = await newEvent.save();
    return result;
  },
  updateEventChoice: async (eventid, eventData) => {
    console.log('eventData:', eventid, eventData);
    const updated = await Event.findOneAndUpdate(
      { eventid },
      { userChoices: eventData },
      { new: true },
    );
    return updated;
  },
  getEventCount: async () => {
    const result = await Event.countDocuments();
    console.log('Got event count', result);
    return result;
  },
};
