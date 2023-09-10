const BASE_URL = 'https://64d7bd1f5f9bf5b879cdec40.mockapi.io';
// const API_KEY = '';

export const getData = async () => {
  const responce = await fetch(`${BASE_URL}/contacts`, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  });

  return responce;
};

export const postData = async data => {
  const responce = await fetch(`${BASE_URL}/contacts`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return responce;
};

export const deleteData = async data => {
  const responce = await fetch(`${BASE_URL}/contacts/${data.id}`, {
    method: 'DELETE',
  });
  return responce;
};
