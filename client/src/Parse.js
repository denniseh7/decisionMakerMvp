import axios from 'axios';

const colUrl = 'http://localhost:3000/api/collection';
const gameUrl = 'http://localhost:3000/api/game';
const createEventUrl = 'http://localhost:3000/api/event';

const Parse = {
  getGames: async (cb) => {
    try {
      const result = await axios.get(colUrl);
      console.log(result.data);
      cb(result.data);
    } catch (err) {
      console.log('Error getting collection', err);
    }
  },
  getGameInfo: async (objectid) => {
    try {
      const result = await axios.get(gameUrl, { params: { objectid } });
      return result.data;
    } catch (err) {
      console.log('Error getting game', err);
      return [];
    }
  },
  createEvent: async (event, setEvent) => {
    try {
      const result = await axios.post(createEventUrl, event);
      console.log('result', result.data);
      setEvent(result.data);
    } catch (err) {
      console.log('Error creating Event', err);
    }
  },
  updateEvent: async (eventid, updateChoices, setEvent) => {
    const putPath = `${createEventUrl}/${eventid}`;
    try {
      const result = await axios.put(putPath, updateChoices);
      console.log('result', result.data);
      setEvent(result.data);
    } catch (err) {
      console.log('Error creating Event', err);
    }
  },
  getEvent: async (eventid, setEvent) => {
    const getPath = `${createEventUrl}/${eventid}`;
    try {
      const result = await axios.get(getPath, { params: { eventid } });
      console.log('get existing event', result.data);
      setEvent(result.data);
    } catch (err) {
      console.log('Error getting event', err);
    }
  },
};

export default Parse;
