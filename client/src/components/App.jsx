import React, { useState, useEffect } from 'react';

import Parse from '../Parse';
import EventGroup from './EventGroup';
import GamesSelect from './GamesSelect';

export default function App() {
  // states
  const [games, setGames] = useState([]);
  const [gameInfo, setGameInfo] = useState({});
  const [choices, setChoices] = useState([]);
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const [event, setEvent] = useState({
    eventid: '',
    eventtitle: '',
    userChoices: {},
  });

  // initialize dataset
  useEffect(() => {
    Parse.getGames(setGames);
  }, []);

  // handler
  const saveHandler = () => {
    const updatedUserChoices = {
      ...event.userChoices,
      [user.username]: choices,
    };
    // console.log(JSON.stringify(updatedUserChoices), event.eventid);
    Parse.updateEvent(event.eventid, updatedUserChoices, setEvent);
    // console.log(user.username);
  };

  const gameHandler = async (objectId) => {
    const result = await Parse.getGameInfo(objectId);
    setGameInfo(result);
  };

  return (
    <div>
      <h1>Decision Maker</h1>
      <EventGroup
        choices={choices}
        setChoices={setChoices}
        user={user}
        setUser={setUser}
        event={event}
        setEvent={setEvent}
        gameInfo={gameInfo}
        gameHandler={gameHandler}
      />
      <GamesSelect
        games={games}
        choices={choices}
        setChoices={setChoices}
        saveHandler={saveHandler}
        gameInfo={gameInfo}
        gameHandler={gameHandler}
      />
    </div>
  );
}
