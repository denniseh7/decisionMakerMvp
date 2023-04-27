import React, {useState, useEffect } from 'react';
import styled from 'styled-components';

const LoginHeader = styled.h3`
  font-size: 30px;
`;

const LoginContainer = styled.div`
  font-size: 20px;
  margin: 10px;
  border: 2px solid black;
  box-shadow: 0 0 2px black;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
  padding-bottom: 10px;
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
font-size: 1.2em;
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
flex: 0 0 80%;
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

export default function Login({ user, handleInput, loginHandler }) {
  return (
    <LoginContainer>
      <LoginHeader>Login</LoginHeader>
      <FormContainer onSubmit={loginHandler}>
        <Label htmlFor="f1">
          Username
          <Input
            id="f1"
            onChange={handleInput}
            name="username"
            type="text"
            placeholder="username"
            value={user.username}
          />
        </Label>
        <Label htmlFor="f2">
          Password
          <Input
            id="f2"
            onChange={handleInput}
            name="password"
            type="text"
            placeholder="password"
            value={user.password}
          />
        </Label>
        <Button type="submit" onSubmit={loginHandler}>Login</Button>
      </FormContainer>
    </LoginContainer>
  );
}
