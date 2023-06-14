const axios = require('axios');

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
});

async function fetchUsers() {
  return await api.get('users');
}
  
  module.exports = {
    fetchUsers,
  };