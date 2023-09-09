const BASE_URL = 'https://64d7bd1f5f9bf5b879cdec40.mockapi.io';
// const API_KEY = '';

export const getData = async () => {
  const responce = await fetch(`${BASE_URL}/contacts`);
  const data = await responce.json();
  return data;
};

export const postData = async () => {
  // const responce = await fetch(`${BASE_URL}/contacts`);
  // const data = await responce.json();
  // return data;
};

export const deleteData = async () => {
  // const responce = await fetch(`${BASE_URL}/contacts`);
  // const data = await responce.json();
  // return data;
};
