import React, {useState, useEffect } from 'react';
import Choice from './Choice';
import styled from 'styled-components';

const EventListContainer = styled.ul`
  display: grid;
  grid-template-columns: 90%;
  list-style: none;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  gap: 3px;
  font-size: 25px;
  font-weight: 300;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 0 0 2px black;
  margin: 5px;
  padding: 5px;
`;

const InputWrapper = styled.textarea`
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ selected }) => (selected && 'solid green')};
  box-shadow: ${({ selected }) => (selected && '0 0 12px black')};
  width: 40%;
  font-size: 25px;
  font-weight: 600;
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

const EventChoice = styled.li`
  display: flex;
  gap: 10px;
`;

const EventPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const Names = styled.span`
  margin-left: 5px;
  margin-right: 5px;
  padding: 3px;
  border: 3px solid green;
  border-radius: 5px;
  color: green;
  font-weight: 550;
`;

const RandomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
`;

const RandName = styled.span`
  font-size: 2em;
  font-weight: 600;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 0 0 2px black;
  background-color: black;
  color: ghostwhite;
  padding: 10px;
  margin: 10px;
`;

const EventRandContainer = styled.div`
  display: flex;
`;

const RandButton = styled.button`
background: ghostwhite;
padding: 5px;
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
  font-size: 20px;
`;

const ChoiceListHeader = styled.h3`
  font-size: 30px;
`;

const Length = styled.span`
  font-weight: 650;
`;

const UserNameContainer = styled.div`
  margin: 5px;
  padding: 5px;
`;

export default function Event({
  event, gameInfo, gameHandler,
}) {
  const [eventChoice, setEventChoice] = useState(null);

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
    gameList.sort((a, b) => {
      console.log(a, eventList[a][1].length, b, eventList[b][1].length);
      return (eventList[b][1].length - eventList[a][1].length);
    });
    console.log(eventList[0], eventList[1]);
    console.log('gameList', gameList);
    console.log('eventList', eventList);
    console.log('event', event);

    const randomHandler = () => {
      const randNum = Math.floor(Math.random() * gameList.length);
      setEventChoice(gameList[randNum]);
    };

    return (
      <EventRandContainer>
        <EventPageContainer>
          <ChoiceHeader>
            <ChoiceListHeader>{event.eventtitle}</ChoiceListHeader>
            {gameList.length <= 0 ? <div /> : (
              <RandButton
                type="button"
                onClick={randomHandler}
              >
                Random
              </RandButton>
            )}
          </ChoiceHeader>
          <EventListContainer>
            {gameList.map((g) => (
              <EventChoice key={g}>
                <InputWrapper
                  type="text"
                  onClick={() => {
                    gameHandler(g);
                  }}
                  value={eventList[g][0]}
                  readOnly
                />
                <Length>{eventList[g][1].length}</Length>
                <UserNameContainer>
                  {eventList[g][1].map((username) => (
                    <Names key={username}>{username}</Names>
                  ))}
                </UserNameContainer>
              </EventChoice>
            ))}
          </EventListContainer>
          {/* <img src={thing.thumbnail} alt={thing.image} /> */}
        </EventPageContainer>
        {Object.keys(eventList).indexOf(eventChoice) < 0 ? <RandomContainer />
          : <RandomContainer><RandName>{eventList[eventChoice][0]}</RandName></RandomContainer>}
      </EventRandContainer>
    );
  }
  return (
    <div />
  );
}

// {choices.map((game) => (
//   <li key={game.value}>
//     <Choice game={game} gameHandler={gameHandler} />
//   </li>
// ))}
