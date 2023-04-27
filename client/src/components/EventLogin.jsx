import React, {useState, useEffect } from 'react';
import styled from 'styled-components';

const RowWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: center;
  column-gap: 5%;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
`;

const LoginHeader = styled.h3`
  font-size: 25px;
`;

const LoginWrapper = styled.div`
  font-size: 20px;
  margin-left: 10px;
  margin-right: 10px;
  border: 2px solid black;
  box-shadow: 0 0 2px black;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 25px;
  align-items: flex-end;
  margin-right: 10%;
  margin-left: 10%;
`;

const Button = styled.button`
display: flex;
background: ghostwhite;
width: 100%;
cursor: pointer;
border: 3px solid black;
border-radius: 5px;
text-align: center;
font-weight: 400;
font-size: 1.1em;
justify-content: center;

&:hover {
  background-color: rgba(220,20,60, 0.85);
  border-color: rgba(220,20,60);
  color: ghostwhite;
}
`;

const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  text-align: right;
  width: 100%;
  line-height: 30px;
  margin-bottom: 10px;
`;

const Input = styled.input`
height: 30px;
flex: 0 0 70%;
margin-left: 10px;
background: white;
width: 100%;
cursor: pointer;
border: 3px solid black;
border-radius: 5px;
font-weight: 400;
font-size: 25px;
&:hover {
  border: 3px solid dodgerblue;
}
`;

export default function EventLogin({
  event, handleEvent, eventHandler, createEvent,
}) {
  return (
    <LoginWrapper>
      <LoginHeader>Event Login</LoginHeader>
      <RowWrapper>
        <FormContainer onSubmit={eventHandler}>
          <Label>
            EventID
            <Input
              id="e2"
              onChange={handleEvent}
              name="eventid"
              type="text"
              placeholder="Event ID"
              value={event.eventid}
            />
          </Label>
          <Button type="submit" onClick={eventHandler}>EventId</Button>
        </FormContainer>
        <FormContainer onSubmit={createEvent}>
          <Label>
            <span>NewEvent?</span>
            <Input
              id="e1"
              onChange={handleEvent}
              name="eventtitle"
              type="text"
              placeholder="Event Title"
              value={event.eventtitle}
            />
          </Label>
          <Button type="submit" onClick={createEvent}>New Event</Button>
        </FormContainer>
      </RowWrapper>
    </LoginWrapper>
  );
}
