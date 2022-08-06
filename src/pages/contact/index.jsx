import React from 'react';

const Contact = () => {
  return (
    <div>
      <div
        className="Title"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <h1>Join The Fight!</h1>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {''}

        <br />
        <ul>
          <li>
            <a href="https://matrix.to/#/#BlackLotusCoalition:matrix.org">
              <h2>Matrix Chat</h2>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/ModeratorGage?t=vDpZ6QhAy-A7UUzJhV9T0w&s=09
"
            >
              <h2>Twitter</h2>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
