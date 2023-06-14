const { app, BrowserWindow, ipcMain, dialog } = require('electron')
const path = require('path')
const axios = require('axios');

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
});

async function handleGetUsers () {
  const { canceled } = 
    await dialog.showMessageBox({
      type: 'warning',
      title: 'Alerta - Listar Usuários',
      message: 'Deseja realmente buscar os Usuários?',
      buttons: ['OK']
    })
  if (!canceled) {
    var response = await api.get('users')
    const textResponse = JSON.stringify(response.data)
    return textResponse
  }
}

function createWindow () {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
  ipcMain.handle('dialog:getUsers', handleGetUsers)
  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})