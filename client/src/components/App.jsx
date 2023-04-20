import React, { useState, useEffect } from 'react';

import Parse from '../Parse';
import EventGroup from './EventGroup';
import GamesSelect from './GamesSelect';

export default function App() {
  // states
  const [games, setGames] = useState([]);
  const [choices, setChoices] = useState([]);
  const [user, setUser] = useState('');

  // initialize dataset
  useEffect(() => {
    Parse.getGames(setGames);
  }, []);

  // handler
  const saveHandler = () => {
    console.log('TODO save click');
  };

  return (
    <div>
      <h1>Decision Maker</h1>
      <EventGroup />
      <GamesSelect
        games={games}
        choices={choices}
        setChoices={setChoices}
        saveHandler={saveHandler}
      />
    </div>
  );
}
