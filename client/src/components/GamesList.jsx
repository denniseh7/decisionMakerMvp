import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

const GamesListHeader = styled.h3`
  font-size: 30px;
`;

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

  const gamesStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: 'white',
      fontSize: 30,
      color: 'green',
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
      ...styles,
      backgroundColor: 'white',
      color: 'black',
      cursor: isDisabled ? 'not-allowed' : 'default',
      fontSize: 25,
      ':hover': {
        backgroundColor: 'rgba(0,128,0, 0.3)',
      },
    }),
    multiValue: (styles, { data }) => ({
      ...styles,
      backgroundColor: 'rgba(248,248,255,0.1)',
      // backgroundColor: 'white',
    }),
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color,
      ':hover': {
        backgroundColor: data.color,
        color: 'white',
      },
    }),
  };

  return (
    <div>
      <GamesListHeader>GamesList</GamesListHeader>
      <Select
        onChange={getChoices}
        value={choices}
        isMulti
        closeMenuOnSelect={false}
        size={15}
        options={options}
        styles={gamesStyles}
      />
    </div>
  );
}

// theme={(theme) => ({
//   ...theme,
//   borderRadius: 0,
//   fontSize: '100px',
//   colors: {
//     ...theme.colors,
//     primary25: 'green',
//     primary: 'green',
//   },
// })}
