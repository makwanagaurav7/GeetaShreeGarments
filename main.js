const { app, BrowserWindow, screen } = require('electron');

function createWindow () {
  // Create the browser window.
 // const win = new BrowserWindow();
  //win.setFullScreen(true);
  const { width, height } = screen.getPrimaryDisplay().workAreaSize
  win = new BrowserWindow({ 
    width, 
    height,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      openDevTools: false
    },
 })
  // and load the index.html of the app.
  win.loadFile('dist/GeetaShreeGarments/index.html')

  // Open the DevTools.
   win.webContents.openDevTools();
 //  Menu.setApplicationMenu(false)
   require('electron-reload')(__dirname, {
      electron: require(`${__dirname}/node_modules/electron`)
   });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
})
