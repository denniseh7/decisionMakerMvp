import React, {useState, useEffect } from 'react';

export default function Choice({ game, gameHandler }) {
  const choiceHandler = () => {
    gameHandler(game.value);
  };

  return (
    <div>
      <input
        type="text"
        onClick={choiceHandler}
        value={game.label}
        readOnly
      />
    </div>
  );
}
