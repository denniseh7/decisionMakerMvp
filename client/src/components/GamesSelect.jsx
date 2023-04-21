import React, {useState, useEffect } from 'react';
import GamesList from './GamesList';
import ChoiceList from './ChoiceList';
import GameInfo from './GameInfo';
import Parse from '../Parse';

export default function GamesSelect({
  games, choices, setChoices, saveHandler, gameInfo, gameHandler,
}) {
  return (
    <div>
      <h2>GamesSelect</h2>
      <GamesList games={games} choices={choices} setChoices={setChoices} />
      <ChoiceList
        choices={choices}
        setChoices={setChoices}
        gameHandler={gameHandler}
        saveHandler={saveHandler}
      />
      <GameInfo gameInfo={gameInfo} />
    </div>
  );
}
