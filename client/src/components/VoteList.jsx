import React, {useState, useEffect } from 'react';
import Select from 'react-select';

import Choice from './Choice';

export default function ChoiceList({ choices, gameHandler, saveHandler }) {
  return (
    <div>
      <h3>ChoiceList</h3>
      <ul>
        {choices.map((game) => (
          <li key={game.value}>
            <Choice game={game} gameHandler={gameHandler} />
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={saveHandler}
      >
        Save
      </button>
    </div>
  );
}
