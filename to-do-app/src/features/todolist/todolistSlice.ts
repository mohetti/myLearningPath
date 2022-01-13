import { createSlice } from '@reduxjs/toolkit';

interface Item {
  task: string;
  finished: boolean;
}

interface List {
  value: Item[];
}

const getLocalToDos = JSON.parse(localStorage.getItem('todos') || '[]');
const initialState = { value: getLocalToDos } as List;

const todolistSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    addToDo(state, action) {
      state.value.push({
        task: action.payload,
        finished: false,
      });
    },
    clearToDos(state) {
      state.value = [];
    },
    deleteToDo(state, action) {
      let tempArray = [...state.value];
      tempArray.splice(action.payload, 1);
      state.value = tempArray;
    },
    toggleStatus(state, action) {
      let tempArray = [...state.value];
      tempArray[action.payload].finished = !tempArray[action.payload].finished;
      state.value = tempArray;
    },
  },
});

export const { addToDo, clearToDos, deleteToDo, toggleStatus } =
  todolistSlice.actions;
export default todolistSlice.reducer;
