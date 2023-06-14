const btn = document.getElementById('btn')
const filePathElement = document.getElementById('filePath')
const listUsers = document.getElementById('listUsers')

const br = document.createElement('br');
btn.addEventListener('click', async () => {
  const response = await window.electronAPI.getUsers()
  
  const users = JSON.parse(response);
  listUsers.innerHTML = "";

  users.forEach(user => {
    const li = document.createElement('li');
    const ulChild = document.createElement('ul');
    const liEmail = document.createElement('li');
    const liPhone = document.createElement('li');

    liEmail.textContent = "E-mail: " + user.email;
    liPhone.textContent = "Telefone: " + user.phone;
    ulChild.appendChild(liEmail);
    ulChild.appendChild(liPhone);

    li.innerHTML = "<strong> Nome : " + user.name + " </strong>";
    li.appendChild(ulChild);

    listUsers.appendChild(li);
  });
})