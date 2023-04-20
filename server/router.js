const router = require('express').Router();
const { getUserCol, getGame } = require('../database/controller');

// UserCol
router.get('/api/collection', async (req, res) => {
  console.log('in api collection');
  try {
    const result = await getUserCol();
    console.log('Success Collection get: length', result.objectId, result.length);
    res.status(200).send(result);
  } catch (err) {
    console.log('Error getting from database:', err);
    res.status(500).send(err);
  }
});

// Game
router.get('/api/game', async (req, res) => {
  console.log('req query', req.query);
  console.log('in api game with id', req.query.objectid);
  try {
    const result = await getGame(req.query.objectid);
    console.log('Success getting Game Info:', result.objectId, result.length);
    res.status(200).send(result);
  } catch (err) {
    console.log('Error getting game: id', req.query.objectid, err);
    res.status(500).send(err);
  }
});

module.exports = router;
