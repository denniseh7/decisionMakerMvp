import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Parse from '../Parse';
import EventGroup from './EventGroup';
import GamesSelect from './GamesSelect';
import logo from '../DiceLogo.png';

// Define colors used throughout the app
const colors = {
  primary: 'black',
  secondary: '#f8f8ff',
};

// change default margin
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.secondary};
    margin: 0;
  }
`;

const AppContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  font-family: georgia;
`;

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: ${colors.primary};
  font-size: 60px;
  font-weight: 500;
  text-align: left;
  padding: 30px 15% 30px 15%;
`;

// Define a banner that goes above the header
const Banner = styled.div`
  color: white;
  font-family: georgia;
`;

// Define a banner that goes above the header
const Title = styled.div`
  color: black;
  font-size: 40px;
  font-weight: 700;
  text-align: left;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Footer = styled.div`
  background-color: ${colors.primary};
  color: white;
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  padding: 10px;
  min-height: 35px;
  min-width: 100vw;
  position: absolute;
  bottom: 0;
`;

const MarginWrapper = styled.div`
  padding: 20px;
  margin-left: 10%;
  margin-right: 10%;
`;

const Logo = styled.img`
  height: 70px;
  width: auto;
`;

export default function App() {
  // states
  const [games, setGames] = useState([]);
  const [gameInfo, setGameInfo] = useState({});
  const [choices, setChoices] = useState([]);
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const [event, setEvent] = useState({
    eventid: '',
    eventtitle: '',
    userChoices: {},
  });
  const [selected, setSelected] = useState('');

  // initialize dataset
  useEffect(() => {
    Parse.getGames(setGames);
  }, []);

  // handler
  const saveHandler = () => {
    const updatedUserChoices = {
      ...event.userChoices,
      [user.username]: choices,
    };
    // console.log(JSON.stringify(updatedUserChoices), event.eventid);
    Parse.updateEvent(event.eventid, updatedUserChoices, setEvent);
    // console.log(user.username);
  };

  const gameHandler = async (objectId) => {
    const result = await Parse.getGameInfo(objectId);
    setGameInfo(result);
    setSelected(result.thing[0].name[0].$.value);
  };

  return (
    <AppContainer>
      <GlobalStyle />
      <HeaderContainer>
        <Banner>Decision Maker</Banner>
        <Logo src={logo} alt="dice" />
      </HeaderContainer>
      <MarginWrapper>
        <EventGroup
          choices={choices}
          setChoices={setChoices}
          user={user}
          setUser={setUser}
          event={event}
          setEvent={setEvent}
          gameInfo={gameInfo}
          gameHandler={gameHandler}
        />
        <GamesSelect
          games={games}
          choices={choices}
          setChoices={setChoices}
          saveHandler={saveHandler}
          gameInfo={gameInfo}
          gameHandler={gameHandler}
          selected={selected}
        />
      </MarginWrapper>
      <Footer>An app to help make decisions!. Free to use.</Footer>
    </AppContainer>
  );
}
