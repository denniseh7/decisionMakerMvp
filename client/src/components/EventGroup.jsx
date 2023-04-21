import React, {useState, useEffect } from 'react';

import Login from './Login';
import Event from './Event';
import EventLogin from './EventLogin';
import Parse from '../Parse';

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
    <div>
      <h3>EventGroup</h3>
      <EventLogin
        event={event}
        eventHandler={eventHandler}
        handleEvent={handleEvent}
        createEvent={createEvent}
      />
      <Event
        event={event}
        gameInfo={gameInfo}
        gameHandler={gameHandler}
      />
      <Login user={user} handleInput={handleInput} loginHandler={loginHandler} />
    </div>
  );
}
