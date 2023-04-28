import React, {useState, useEffect } from 'react';
import styled from 'styled-components';

const InputWrapper = styled.textarea`
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ selected }) => (selected && 'solid medium green')};
  box-shadow: ${({ selected }) => (selected && '0 0 12px black')};
  width: 90%;
  font-size: 30px;
  font-weight: 300;
  font-family: serif;
  text-align: center;
  border: 1px solid black;
  box-shadow: 0 0 2px black;
  border-radius: 5px;
  resize: none;
  &:hover {
    border: 4px solid rgb(0,128,0);
    box-shadow: 0 0 1px black;
    cursor: pointer;
    background-color: rgba(0,128,0, 0.1);
  }
`;

// border: 5px solid rgba(248,248,255);

export default function Choice({ game, gameHandler, selected }) {
  const choiceHandler = () => {
    gameHandler(game.value);
  };

  return (
    <div>
      <InputWrapper
        type="text"
        onClick={choiceHandler}
        value={game.label}
        selected={selected}
        readOnly
      />
    </div>
  );
}
