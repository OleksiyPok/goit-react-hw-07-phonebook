import axios from 'axios';

axios.defaults.baseURL = 'https://64d7bd1f5f9bf5b879cdec40.mockapi.io';
axios.defaults.params = {};

export const getData = async () => {
  const { data } = await axios.get(`/contacts`);
  return data;
};

export const postData = async newPerson => {
  const { data } = await axios.post(`/contacts`, newPerson);
  return data;
};

export const deleteData = async person => {
  const { data } = await axios.delete(`/contacts/${person.id}`);
  return data;
};
