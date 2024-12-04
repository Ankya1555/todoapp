import React from 'react';

function Todolist(props) {
  return (
    <li className="list-item">
        {props.item}
        <span className='icons'>
            <i 
              className="fa-solid fa-trash icon-delete" 
              onClick={e => {
                props.deleteItem(props.index);
              }}
            />
        </span>
    </li>
  );
}

export default Todolist;
