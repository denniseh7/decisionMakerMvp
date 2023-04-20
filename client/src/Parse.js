import axios from 'axios';

const colUrl = 'http://localhost:3000/api/collection';
const gameUrl = 'http://localhost:3000/api/game';

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
};

export default Parse;
