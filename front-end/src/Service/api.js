import axios from "axios";

// const usersUrl = 'http://localhost:3003/users';
// const usersUrl = "http://localhost:8080/record";
// const ItemUrl = "http://localhost:8080/info";

const usersUrl = "https://backend12-dy8f.onrender.com/record";
const ItemUrl = "https://backend12-dy8f.onrender.com/info";

export const getRecords = async (id) => {
  id = id || "";
  return await axios.get(`${usersUrl}/${id}`);
};

export const addRecords = async (user) => {
  return await axios.post(`${usersUrl}/add`, user);
};

export const deleteRecord = async (id) => {
  return await axios.delete(`${usersUrl}/${id}`);
};

export const editRecords = async (id, user) => {
  return await axios.put(`${usersUrl}/${id}`, user);
};

export const getRecordById = async (id, user) => {
  return await axios.get(`${usersUrl}/${id}`);
};

//itme api

export const getItems = async (id) => {
  id = id || "";
  return await axios.get(`${ItemUrl}/${id}`);
};

export const addItems = async (user) => {
  return await axios.post(`${ItemUrl}/add`, user);
};

export const deleteItem = async (id) => {
  return await axios.delete(`${ItemUrl}/${id}`);
};

export const editItem = async (id, user) => {
  return await axios.put(`${ItemUrl}/${id}`, user);
};

export const getItemById = async (id, user) => {
  return await axios.get(`${ItemUrl}/${id}`, user);
};
