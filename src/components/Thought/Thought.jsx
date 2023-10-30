import React, { useEffect } from 'react'
import { ListItem, RemoveButton, Text } from './Thought.styles';

const Thought = (props) => {
  const {thought, removeThought} = props;

  useEffect(() => {
    const timeRemaining = thought.expiresAt - Date.now();
    const intervalId = setTimeout(() => {
      removeThought(thought.id);
    }, timeRemaining)
    return () => {
      clearTimeout(intervalId)
    }
  }, [thought])

  const handleRemoveClick = () => {
    removeThought(thought.id)
  }

  return (
    <ListItem>
      <RemoveButton 
        aria-label="Remove thought" 
        onClick={handleRemoveClick}
      >
        &times;
      </RemoveButton>
      <Text>{thought.text}</Text>
    </ListItem>
  )
}

export default Thought