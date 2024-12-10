import React, { useState } from 'react';

function Todo(props) {
  const [inputText, setInputText] = useState('');

  const handleAdd = () => {
    if (inputText.trim() !== '') {
      props.addList(inputText); // Adding inputText to the list
      setInputText(''); // Clear input after adding
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your Todo here"
        value={inputText} // Controlled input
        onChange={(e) => setInputText(e.target.value)} // Update inputText on change
      />
      <button className="button" onClick={handleAdd}>
        CLick 
      </button>
    </div>
  );
}

export default Todo;
