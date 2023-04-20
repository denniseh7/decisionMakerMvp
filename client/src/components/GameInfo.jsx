import React, {useState, useEffect } from 'react';

export default function GameInfo({ gameInfo }) {
  // console.log('gameInfo', JSON.stringify(gameInfo));
  if (Object.keys(gameInfo).length > 0) {
    // console.log('not empty gameinfo');
    const thing = gameInfo.thing[0];
    const players = `${thing.minplayers[0].$.value} - ${thing.maxplayers[0].$.value}`;
    const playtime = `${thing.playingtime[0].$.value} min`;
    const categories = thing.link.filter((cat) => cat.$.type === 'boardgamecategory' || cat.$.type === 'boardgamemechanic');
    return (
      <div>
        <h3>Game Info</h3>
        <h3>{thing.name[0].$.value}</h3>
        <img src={thing.thumbnail} alt={thing.image} />
        <img src={thing.image} alt={thing.image} width="500" height="500" />
        <div>
          <div>
            Description
          </div>
          <div>
            {thing.description[0]}
          </div>
        </div>
        <div>
          <span>Players: </span>
          <span>{players}</span>
        </div>
        <div>
          <span>Playtime: </span>
          <span>{playtime}</span>
        </div>
        <div>Categories:</div>
        <ul>
          {categories.length === 0 ? null : categories.map((category) => (
            <li key={category.$.id}>{category.$.value}</li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div>
      <h3>Game Info</h3>
    </div>
  );
}
