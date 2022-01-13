import React from 'react';

function ExampleToDos() {
  return (
    <React.Fragment>
      <li className='done'>
        <span>Get up early</span>
        <button>Delete</button>
      </li>
      <li className='done'>
        <span>Do some meditation</span>
        <button>Delete</button>
      </li>
      <li>
        <span>Eat a healthy breakfast</span>
        <button>Delete</button>
      </li>
      <li>
        <span>Drink plenty of water</span>
        <button>Delete</button>
      </li>
      <li>
        <span>Exercise</span>
        <button>Delete</button>
      </li>
      <li>
        <span>Smile :)</span>
        <button>Delete</button>
      </li>
    </React.Fragment>
  );
}

export default ExampleToDos;
