const BASE_URL = 'https://64d7bd1f5f9bf5b879cdec40.mockapi.io';

export const getData = async () => {
  const responce = await fetch(`${BASE_URL}/contacts`, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  });
  const data = await responce.json();
  return data;
};

export const postData = async newPerson => {
  const responce = await fetch(`${BASE_URL}/contacts`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPerson),
  });
  const data = await responce.json();
  return data;
};

export const deleteData = async person => {
  const responce = await fetch(`${BASE_URL}/contacts/${person.id}`, {
    method: 'DELETE',
  });
  const data = await responce.json();
  return data;
};
