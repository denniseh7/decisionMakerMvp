import React, {useState, useEffect } from 'react';

export default function EventLogin({
  event, handleEvent, eventHandler, createEvent,
}) {
  return (
    <div>
      <h3>Event Login</h3>
      <form onSubmit={createEvent}>
        <input
          id="e1"
          onChange={handleEvent}
          name="eventtitle"
          type="text"
          placeholder="Event Title"
          value={event.eventtitle}
        />
        <button type="submit" onClick={createEvent}>New Event</button>
      </form>
      <div>Looking for Existing Event?</div>
      <form onSubmit={eventHandler}>
        <input
          id="e2"
          onChange={handleEvent}
          name="eventid"
          type="text"
          placeholder="Event ID"
          value={event.eventid}
        />
        <button type="submit" onClick={eventHandler}>EventId</button>
      </form>
    </div>
  );
}
