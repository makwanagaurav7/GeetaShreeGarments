import { app, BrowserWindow, screen } from 'electron';
import * as path from 'path'
import * as url from 'url'

let win: BrowserWindow;

app.on('ready', createWindow);

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
})

function createWindow() {
    // win = new BrowserWindow({
    //     fullscreen: true,
    //     webPreferences: {
    //         nodeIntegration: true,
    //         enableRemoteModule: true
    //     },
    // })
    const { width, height } = screen.getPrimaryDisplay().workAreaSize
    win = new BrowserWindow({ 
        width, 
        height,
        frame: false,
        webPreferences: {
          nodeIntegration: true,
          enableRemoteModule: true,
          devTools: false,
          nodeIntegrationInWorker: true
        }
     })
    win.loadURL(
        url.format({
            pathname: path.join(__dirname, `/../../dist/angular-electron/index.html`),
            protocol: 'file:',
            slashes: true,
        })
    )

    // win.webContents.openDevTools()

    // win.on('closed', () => {
    //     win = null
    // })
}