import React, { useState } from 'react';

function TodoInput({ addTodo }) {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && inputText.trim() !== '') {
      addTodo(inputText.trim());

      setInputText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a new TODO"
        value={inputText}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
}

export default TodoInput;
