// src/reducers/itemsReducer.js
import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    // Implement other actions for updating and deleting items here
  },
});

export const { addItem } = itemsSlice.actions;

export default itemsSlice.reducer;
