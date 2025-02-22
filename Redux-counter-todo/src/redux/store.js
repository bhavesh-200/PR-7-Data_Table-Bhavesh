import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import counterReducer from './counterSlice';
import todoReducer from './todoSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
    todo: todoReducer,
  },
});

export default store;



