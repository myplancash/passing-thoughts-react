import React, { useState } from 'react';
import AddThoughtForm from './components/AddThoughtForm/AddThoughtForm';
import Thought from './components/Thought/Thought';
import { generateId, getNewExpirationTime } from './components/utilities';
import {AppContainer, Header, Main} from './App.styles';


export default function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);


  const addThought = (thought) => {
    setThoughts(prev => [thought, ...prev])
  }

  const removeThought = (thoughtIdToRemove) => {
    setThoughts(thoughts => thoughts.filter(thought => thought.id !== thoughtIdToRemove)) 
  }

  return (
    <AppContainer>
      <Header>
        <h1>Passing Thoughts</h1>
      </Header>
      <Main>
        <AddThoughtForm addThought={addThought} />
        <ul>
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought} removeThought={removeThought} />
          ))}
        </ul>
      </Main>
    </AppContainer>
  );
}
