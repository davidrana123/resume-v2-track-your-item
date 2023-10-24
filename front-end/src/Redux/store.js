// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './reducers/itemsReducer';
import counterReducer from './reducers/counterReducer';

const store = configureStore({
  reducer: {
    items: itemsReducer,
    counter: counterReducer,
  },
});

export default store;
