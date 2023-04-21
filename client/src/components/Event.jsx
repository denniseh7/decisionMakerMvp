import React, {useState, useEffect } from 'react';
import Choice from './Choice';

export default function Event({
  event, gameInfo, gameHandler,
}) {
  if (Object.keys(event).indexOf('userChoices') >= 0 && Object.keys(event.userChoices).length > 0) {
    const eventList = {};
    Object.keys(event.userChoices).forEach((userName) => {
      const games = event.userChoices[userName];
      games.forEach((game) => {
        console.log('game', game);
        if (Object.keys(eventList).indexOf(game.value) >= 0) {
          eventList[game.value][1].push(userName);
        } else {
          eventList[game.value] = [game.label, [userName]];
        }
      });
    });

    const gameList = Object.keys(eventList);
    gameList.sort((g) => eventList[g][1].length);
    console.log('gameList', gameList);
    console.log('eventList', eventList);
    console.log('event', event);
    return (
      <div>
        <h3>Event</h3>
        <ul>
          {gameList.map((g) => (
            <li key={g}>
              <span>{eventList[g][0]}</span>
              <span>{eventList[g][1].length}</span>
              {eventList[g][1].map((username) => (
                <span>{username}</span>
              ))}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div>
      <h3>Event</h3>
    </div>
  );
}

// {choices.map((game) => (
//   <li key={game.value}>
//     <Choice game={game} gameHandler={gameHandler} />
//   </li>
// ))}
