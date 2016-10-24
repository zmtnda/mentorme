// import { environment } from '../environments/environment';
import { BrowserWindow } from 'electron';


export default class ElectronInit {
  // Keep a global reference of the window object, if you don't, the window will
  // be closed automatically when the JavaScript object is garbage collected.
  static mainWindow: Electron.BrowserWindow;
  static application: Electron.App;
  static browserWindow;

  private static onWindowAllClosed() {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    // if (process.platform !== 'darwin') {
      ElectronInit.application.quit();
    // }
  }
  private static onClose() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    ElectronInit.mainWindow = null;
  }

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  private static onReady() {
    ElectronInit.mainWindow = new BrowserWindow({
      width: 800,
      height: 700
    });
    // We load this over http when not in production to take advantage of BrowserSync. Because the lite-server
    // usually takes a few seconds to start, we add the 3 second pause.
    ElectronInit.mainWindow.loadURL(`file://${__dirname}/index.html`);

    ElectronInit.mainWindow.on('closed', ElectronInit.onClose);
  }

  private static onActivate() {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (ElectronInit.mainWindow === null) {
      ElectronInit.onReady();
    }
  }

  static init(app: Electron.App, browserWindow: typeof BrowserWindow) {
    ElectronInit.browserWindow = browserWindow;
    ElectronInit.application = app;
    ElectronInit.application.on('window-all-closed', ElectronInit.onWindowAllClosed);
    ElectronInit.application.on('ready', ElectronInit.onReady);
    ElectronInit.application.on('activate', ElectronInit.onActivate);
  }


}

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
