const axios = require('axios');

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
});

async function getUsers() {
  const response = await api.get('users');
  textResponse = JSON.stringify(response.data);

  return textResponse;
}
  
module.exports = {
  getUsers,
};