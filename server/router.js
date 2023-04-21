const router = require('express').Router();
const {
  getUserCol, getGame, getEvent, getEventCount, createEvent, updateEventChoice,
} = require('../database/controller');

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

router.get('/api/event/:eventid', async (req, res) => {
  console.log('req param eventid:', req.params.eventid);
  try {
    const result = await getEvent(req.params.eventid);
    res.status(200).send(result);
  } catch (err) {
    console.log('Error getting event', req.params.eventId, err);
    res.status(500).send(err);
  }
});

router.get('/api/eventCount', async (req, res) => {
  try {
    const result = await getEventCount();
    console.log('Success getEventCount:', result);
    res.status(200).send(result);
  } catch (err) {
    console.log('Error getting from count from db:', err);
    res.status(500).send(err);
  }
});

router.post('/api/event', async (req, res) => {
  try {
    const result = await createEvent(req.body);
    res.status(201).send(result);
  } catch (err) {
    console.log('Error creating new event', err);
    res.status(500).send(err);
  }
});

router.put('/api/event/:eventid', async (req, res) => {
  console.log('eventid', req.params.eventid);
  console.log('event body', req.body);
  try {
    const result = await updateEventChoice(req.params.eventid, req.body);
    res.status(200).send(result);
  } catch (err) {
    console.log('Error updating event choice', err);
    res.status(500).send(err);
  }
});

module.exports = router;
