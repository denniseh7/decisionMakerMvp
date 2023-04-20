import React from 'react';
import Select from 'react-select';

export default function GamesList({ games, choices, setChoices }) {
  const options = [];
  games.forEach((game) => {
    options.push({
      value: game.objectId,
      label: game.userGame.objectname,
    });
  });

  // handler
  const getChoices = (e) => {
    setChoices(e);
  };
  return (
    <div>
      <h3>GamesList</h3>
      <Select
        onChange={getChoices}
        value={choices}
        isMulti
        closeMenuOnSelect={false}
        size={10}
        options={options}
      />
    </div>
  );
}
