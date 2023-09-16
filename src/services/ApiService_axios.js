import axios from 'axios';

// const API_KEY = '';

axios.defaults.baseURL = 'https://64d7bd1f5f9bf5b879cdec40.mockapi.io';
axios.defaults.params = {};

export const getData = async () => {
  const { data } = await axios.get(`/contacts`);
  // console.log('getData_axios:', data); // develop
  return data;
};

export const postData = async newPerson => {
  const { data } = await axios.post(`/contacts`, newPerson);
  // console.log('postData_axios:', data); // develop
  return data;
};

export const deleteData = async person => {
  const { data } = await axios.delete(`/contacts/${person.id}`);
  // console.log('deleteData_axios:', data); // develop
  return data;
};
