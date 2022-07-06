// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname + "/icon.png",
    // frame: false,
    // show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
        nodeIntegration: true
    }
  })

  // and load the index.html of the app.

    mainWindow.loadFile('index.html')

// Open the DevTools.
// mainWindow.webContents.openDevTools()

}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    let splash = new BrowserWindow({
        width: 800,
        height: 300,
        show: true,
        frame: false,
        icon: './Vel.png',
        alwaysOnTop: true,
        webPreferences: {
            nodeIntegration: true
        }
    });
    
// createWindow()
splash.loadFile('splash.html');
let slashwait = setTimeout(() => {
    createWindow();
    splash.destroy();
}, 5000);
app.on('activate', () => {
    createWindow()
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
if (process.platform !== 'darwin') app.quit()
})