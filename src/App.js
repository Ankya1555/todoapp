import React, { useState } from 'react';
import './App.css';
import Todo from './Componant/Todo';
import Todolist from './Componant/Todolist';

function App() {
  const [listTodo, setListTodo] = useState([]);

  const addList = (InputText) => {
    setListTodo([...listTodo, InputText]);
  };

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };

  return (
    <div className="App">
      <div className="main-container">
        <div className="center-container">
     
          <Todo addList={addList} />
          <h1 className="app-heading">TODO</h1>
          <hr />
          {listTodo.map((listItem, i) => {
            return (
              <Todolist
                key={i}
                index={i}
                item={listItem}
                deleteItem={deleteListItem}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
