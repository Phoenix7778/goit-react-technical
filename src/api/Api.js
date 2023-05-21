import axios from 'axios';

axios.defaults.baseURL = 'https://6469dddb03bb12ac20943c17.mockapi.io';

export async function getUsers() {
  const response = await axios.get('/users');
  return response;
}

export async function updateUsers(userId, followers) {
  const response = await axios.put(`/users/${userId}`, { followers });
  return response;
}
