import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import uniqid from 'uniqid';

type Props = {
  todoItemMutationHandler: (
    e: React.MouseEvent<HTMLElement>,
    i: number
  ) => void;
};

type Item = {
  task: string;
  finished: boolean;
};
function ToDoList(props: Props) {
  const todoList = useSelector(
    (state: RootStateOrAny) => state.todoactions.value
  );

  const renderToDos = () => {
    return todoList.map((x: Item, i: number) => (
      <li
        className={x.finished ? 'done' : ''}
        key={uniqid()}
        onClick={(e) => props.todoItemMutationHandler(e, i)}
      >
        <span>{x.task}</span>
        <button>Delete</button>
      </li>
    ));
  };

  return <React.Fragment>{renderToDos()}</React.Fragment>;
}

export default ToDoList;
