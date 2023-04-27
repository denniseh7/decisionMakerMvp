import React, {useState, useEffect } from 'react';
import styled from 'styled-components';

const GameInfoHeader = styled.h3`
  font-size: 30px;
`;

const GameInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 0 0 3px black;
  background: ghostwhite;
`;

const DescriptionContainer = styled.div`
  font-size: 25px;
`;

const ImgContainer = styled.img`
  width: 500px;
  height: 500px;
  object-fit: contain;
  object-position: center;
  opacity: 1;
`;

const PlayContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 23px;
  font-weight: 800;
  margin-bottom: 10px;
`;

const Categories = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px;
  list-style-type: none;
`;

const Category = styled.li`
  font-size: 20px;
  margin: 5px;
  padding: 2px;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 0 0 3px black;
  background-color: white;
`;

export default function GameInfo({ gameInfo }) {
  // console.log('gameInfo', JSON.stringify(gameInfo));
  if (Object.keys(gameInfo).length > 0) {
    // console.log('not empty gameinfo');
    const thing = gameInfo.thing[0];
    const players = `${thing.minplayers[0].$.value} - ${thing.maxplayers[0].$.value}`;
    const playtime = `${thing.playingtime[0].$.value} min`;
    const categories = thing.link.filter((cat) => cat.$.type === 'boardgamecategory' || cat.$.type === 'boardgamemechanic');
    const decode = (desc) => {
      const doc = new DOMParser().parseFromString(desc, 'text/html');
      return doc.documentElement.textContent;
    };
    const description = decode(thing.description[0]);
    console.log('thing name', thing.name[0].$.value);
    return (
      <GameInfoContainer>
        <GameInfoHeader>{thing.name[0].$.value}</GameInfoHeader>
        <ImgContainer src={thing.image} alt={thing.image} />
        <PlayContainer>
          <div>
            <span>Players: </span>
            <span>{players}</span>
          </div>
          <div>
            <span>Playtime: </span>
            <span>{playtime}</span>
          </div>
        </PlayContainer>
        <Categories>
          {categories.length === 0 ? null : categories.map((category) => (
            <Category key={category.$.id}>{category.$.value}</Category>
          ))}
        </Categories>
        <DescriptionContainer>
          {description}
        </DescriptionContainer>

      </GameInfoContainer>
    );
  }
  return (
    <div />
  );
}
