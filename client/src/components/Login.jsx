import React, {useState, useEffect } from 'react';

export default function Login({ user, handleInput, loginHandler }) {
  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={loginHandler}>
        <label htmlFor="f1">
          Username
          <input
            id="f1"
            onChange={handleInput}
            name="username"
            type="text"
            placeholder="name"
            value={user.username}
          />
        </label>
        <label htmlFor="f2">
          Password
          <input
            id="f2"
            onChange={handleInput}
            name="password"
            type="text"
            value={user.password}
          />
        </label>
        <button type="submit" onSubmit={loginHandler}>Login</button>
      </form>
    </div>
  );
}
