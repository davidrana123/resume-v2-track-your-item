// utils.js
export const randomId = () => Math.random().toString(36).substring(2, 9);
export const randomCreatedDate = () => new Date(Date.now() - Math.random() * 1e12).toLocaleDateString();
export const randomTraderName = () => {
  const names = ['Alice', 'Bob', 'Charlie', 'Dave'];
  return names[Math.floor(Math.random() * names.length)];
};
export const randomArrayItem = (array) => array[Math.floor(Math.random() * array.length)];
