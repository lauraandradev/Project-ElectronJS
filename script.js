
//const { ipcRenderer } = require('electron/renderer');
const { fetchUsers } = require('./app/api.js');
document.addEventListener('DOMContentLoaded', async function() {
    const myList = document.getElementById('myList');

    const items = [
        'Item 1',
        'Item 2',
        'Item 3'
    ];
    var users = await fetchUsers();
    console.log(users);
    
    items.forEach(function(item) {
        const li = document.createElement('li');
        li.textContent = item;
        myList.appendChild(li);
    });
    var users = fetchData();
    console.log(users);
});



const { fetchData } = require('./app/api.js');
const { ipcRenderer } = require('electron')