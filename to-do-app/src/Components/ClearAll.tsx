import React from 'react';

type Props = {
  clearAllTasks: () => void;
};

function ClearAll(props: Props) {
  return (
    <React.Fragment>
      <button onClick={props.clearAllTasks} className='clearAll'>
        Clear all
      </button>
    </React.Fragment>
  );
}

export default ClearAll;
