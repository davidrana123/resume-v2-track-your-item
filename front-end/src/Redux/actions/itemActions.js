// src/actions/itemActions.js
import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from './types';

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const updateItem = (item) => {
  return {
    type: UPDATE_ITEM,
    payload: item,
  };
};

export const deleteItem = (itemId) => {
  return {
    type: DELETE_ITEM,
    payload: itemId,
  };
};
