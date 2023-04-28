import React, {useState, useEffect } from 'react';
import styled from 'styled-components';

import Login from './Login';
import Event from './Event';
import EventLogin from './EventLogin';
import Parse from '../Parse';

const RowWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 60%;
  grid-template-rows: 450px;
  justify-content: center;
  column-gap: 5%;
  padding-left: 10px;
  padding-right: 10px;
  border: 2px solid black;
  border-radius: 5px;
  box-shadow: 0 0 3px black;
  background-color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 20px;

`;

const ColWrapper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
`;

export default function EventGroup({
  choices, setChoices, user, setUser, event, setEvent, gameInfo, gameHandler,
}) {
  const handleInput = (e) => {
    console.log(user);
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleEvent = (e) => {
    console.log(event);
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

  const loginHandler = (e) => {
    console.log(Object.keys(event));
    if (Object.keys(event).indexOf('userChoices') >= 0 && Object.keys(event.userChoices).indexOf(user.username) >= 0) {
      setChoices(event.userChoices[user.username]);
    } else {
      console.log('did not find user', user.username);
      setChoices([]);
    }
    // const userchoice = event.userChoices[user] || [];
    // setChoices(userchoice);
    e.preventDefault();
  };

  const eventHandler = (e) => {
    // console.log('TODO get event');
    Parse.getEvent(event.eventid, setEvent);
    e.preventDefault();
  };

  const createEvent = (e) => {
    // console.log('TODO: create event');
    Parse.createEvent(event, setEvent);
    e.preventDefault();
  };

  return (
    <RowWrapper>
      <ColWrapper>
        <EventLogin
          event={event}
          eventHandler={eventHandler}
          handleEvent={handleEvent}
          createEvent={createEvent}
        />
        <Login user={user} handleInput={handleInput} loginHandler={loginHandler} />
      </ColWrapper>
      <Event
        event={event}
        gameInfo={gameInfo}
        gameHandler={gameHandler}
      />
    </RowWrapper>
  );
}
