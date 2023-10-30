import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from '../utilities';
import { Form, Input, SubmitButton } from './AddThoughtForm.styles';

const AddThoughtForm = ({ addThought }) => {
  const [text, setText] = useState('');

  const handleTextChange = ({ target }) => {
    setText(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newThought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime()
    }
    
    if(text.length > 0) {
      addThought(newThought);
    }
    setText('')
  }


  return (
     <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={text}
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        onChange={handleTextChange}
      />
      <SubmitButton type="submit" value="Add" />
    </Form>
  )
}

export default AddThoughtForm;