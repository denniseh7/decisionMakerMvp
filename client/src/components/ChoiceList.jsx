import React, {useState, useEffect } from 'react';
import Select from 'react-select';
import styled from 'styled-components';

import Choice from './Choice';

const ChoiceListWrapper = styled.ul`
  display: grid;
  grid-template-columns: 90%;
  column-gap: 5%;
  list-style: none;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

const SaveButton = styled.button`
background: ghostwhite;
width: 60%;
height: 53%;
cursor: pointer;
border: 3px solid black;
border-radius: 5px;
text-align: center;
font-weight: 400;
font-size: 1.4em;

&:hover {
  background-color: rgba(220,20,60, 0.85);
  border-color: rgba(220,20,60);
  color: ghostwhite;
}
`;

const ChoiceHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  font-size: 1.5em;
`;

const ChoiceListHeader = styled.h3`
  font-size: 30px;
`;

const ChoiceListContainer = styled.div`
`;

export default function ChoiceList({
  choices, gameHandler, saveHandler, selected,
}) {
  return (
    <ChoiceListContainer>
      <ChoiceHeader>
        <ChoiceListHeader>ChoiceList</ChoiceListHeader>
        {choices.length <= 0 ? null : (
          <SaveButton
            type="button"
            onClick={saveHandler}
          >
            Save
          </SaveButton>
        )}
      </ChoiceHeader>
      <ChoiceListWrapper>
        {choices.map((game) => (
          <li key={game.value}>
            <Choice game={game} gameHandler={gameHandler} selected={selected === game.value} />
          </li>
        ))}
      </ChoiceListWrapper>
    </ChoiceListContainer>
  );
}
