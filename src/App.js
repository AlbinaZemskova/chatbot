import React from 'react';
import Chat from './Chat';
import bot from './bot';
import user from './user';

function App() {
  return (
    <Chat
      user={user}
      bot={bot}
    />
  );
}

export default App;
