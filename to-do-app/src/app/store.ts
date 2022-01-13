import { configureStore } from '@reduxjs/toolkit';
import todolistReducer from '../features/todolist/todolistSlice';

export default configureStore({
  reducer: {
    todoactions: todolistReducer,
  },
});
