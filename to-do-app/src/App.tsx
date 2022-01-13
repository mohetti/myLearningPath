import React, { useState, useEffect } from 'react';

// Components
import TaskInput from './Components/TaskInput';
import ClearAll from './Components/ClearAll';
import ExampleToDos from './Components/ExampleToDos';
import ToDoList from './Components/ToDoList';

import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import {
  addToDo,
  clearToDos,
  deleteToDo,
  toggleStatus,
} from './features/todolist/todolistSlice';

function App() {
  const [trackInput, setTrackInput] = useState('');
  const [isFirstTimeVisitor, setIsFirstTimeVisitor] = useState(true);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const todoList = useSelector(
    (state: RootStateOrAny) => state.todoactions.value
  );

  useEffect(() => {
    if (localStorage.getItem('isFirstTime') === 'false') {
      setIsFirstTimeVisitor(false);
    }
    setLoading(false);
  }, []);

  const changeVisitorStatus = () => {
    localStorage.setItem('isFirstTime', 'false');
    setIsFirstTimeVisitor(false);
  };

  const updateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTrackInput(e.target.value);
  };

  const addNewTask = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && trackInput) {
      isFirstTimeVisitor && changeVisitorStatus();
      dispatch(addToDo(trackInput));
      setTrackInput('');
    }
  };

  const clearAllTasks = () => {
    isFirstTimeVisitor && changeVisitorStatus();
    dispatch(clearToDos());
  };

  const todoItemMutationHandler = (
    e: React.MouseEvent<HTMLElement>,
    i: number
  ) => {
    if (e.target instanceof HTMLButtonElement) {
      return dispatch(deleteToDo(i));
    }
    return dispatch(toggleStatus(i));
  };

  return (
    <React.Fragment>
      {!loading && (
        <React.Fragment>
          <TaskInput
            isFirstTimeVisitor={isFirstTimeVisitor}
            updateInput={updateInput}
            trackInput={trackInput}
            addNewTask={addNewTask}
          />

          <ul>
            {isFirstTimeVisitor ? (
              <ExampleToDos />
            ) : (
              <ToDoList todoItemMutationHandler={todoItemMutationHandler} />
            )}
          </ul>
        </React.Fragment>
      )}
      <ClearAll clearAllTasks={clearAllTasks} />
    </React.Fragment>
  );
}

export default App;
