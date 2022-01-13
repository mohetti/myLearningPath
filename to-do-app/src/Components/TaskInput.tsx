import React from 'react';

type Props = {
  updateInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addNewTask: (e: React.KeyboardEvent) => void;
  trackInput: string;
  isFirstTimeVisitor: boolean;
};

function TaskInput(props: Props) {
  return (
    <React.Fragment>
      <input
        onKeyPress={props.addNewTask}
        onChange={props.updateInput}
        value={props.trackInput}
        type='text'
        placeholder={
          props.isFirstTimeVisitor
            ? 'Press "Clear all" or Enter your first ToDo to Start'
            : 'What needs to be accomplished today?'
        }
      />
    </React.Fragment>
  );
}

export default TaskInput;
