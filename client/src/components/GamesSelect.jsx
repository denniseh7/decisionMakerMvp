import React, {useState, useEffect } from 'react';
import styled from 'styled-components';
import GamesList from './GamesList';
import ChoiceList from './ChoiceList';
import GameInfo from './GameInfo';
import Parse from '../Parse';

const GamesSelectContainer = styled.div`
  position: relative;
  height: 975px;
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 50px;
  border: 2px solid black;
  border-radius: 5px;
  box-shadow: 0 0 3px black;
  background-color: white;
`;

const GamesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-rows: 100%;
  column-gap: 5%;
  padding-top: 10px;
  padding-bottom: 10px;
  height: 100%;
`;
// border: 5px solid blue;

const GamesTitle = styled.h2`
  font-size: 30px;
`;

export default function GamesSelect({
  games, choices, setChoices, saveHandler, gameInfo, gameHandler, selected,
}) {
  return (
    <GamesSelectContainer>
      {/* <GamesTitle>Select Choices</GamesTitle> */}
      <GamesContainer>
        <GamesList games={games} choices={choices} setChoices={setChoices} />
        <ChoiceList
          choices={choices}
          setChoices={setChoices}
          gameHandler={gameHandler}
          saveHandler={saveHandler}
          selected={selected}
        />
        <GameInfo gameInfo={gameInfo} />
      </GamesContainer>
    </GamesSelectContainer>
  );
}
