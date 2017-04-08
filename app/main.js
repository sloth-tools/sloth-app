import fs from 'fs-extra';
import yaml from 'js-yaml';
import userHome from 'user-home';
import path from 'path';
import url from 'url';
import { app, crashReporter, BrowserWindow, Menu, ipcMain } from 'electron';
import { exec } from 'child_process';

const isDevelopment = process.env.NODE_ENV === 'development';

let mainWindow = null;
let forceQuit = false;

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  for (const name of extensions) {
    try {
      await installer.default(installer[name], forceDownload);
    } catch (e) {
      console.log(`Error installing ${name} extension: ${e.message}`);
    }
  }
};

crashReporter.start({
  productName: 'YourName',
  companyName: 'YourCompany',
  submitURL: 'https://your-domain.com/url-to-submit',
  uploadToServer: false
});

app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', async () => {
  if (isDevelopment) {
    await installExtensions();
  }

  mainWindow = new BrowserWindow({
    width: 800,
    height: 500,
    show: false,
    resizable: false,
    fullscreen: false,
    useContentSize: true,
    titleBarStyle: 'hidden-inset'
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    })
  );

  // show window once on first load
  mainWindow.webContents.once('did-finish-load', () => {
    mainWindow.show();
  });

  ipcMain.on('install', (event, arg) => {
    const data = JSON.parse(arg);
    const { packages, common } = data;
    let userSystemList = packages.filter(
      option => option.type == 'system' && option.checked
    );
    let userCaskList = packages.filter(
      option => option.type == 'cask' && option.checked
    );

    let tasks = common[0].tasks;
    tasks[0].homebrew.name = userSystemList.map(item => item.name);
    tasks[2].homebrew_cask.name = userCaskList.map(item => item.name);

    const slothPath = `${userHome}/.sloth`;
    const inventoryPath = `${slothPath}/sloth_inventory`;
    const yamlPath = `${slothPath}/sloth_install.yml`;
    fs.mkdirSync(slothPath);
    fs.writeFileSync(inventoryPath, '[localhost]\n127.0.0.1');
    fs.writeFileSync(yamlPath, yaml.dump(common));

    exec(
      `git clone https://gist.github.com/834f8eddb2ff978de4e5e69898301563.git ${slothPath}/sloth_scripts && chmod ugo+rwx ${slothPath}/sloth_scripts/sloth_install.sh`,
      () => {
        exec(
          `open -a Terminal ${slothPath}/sloth_scripts/sloth_install.sh`,
          function(err, stdout, stderr) {
            console.log({ err, stdout, stderr });
          }
        );
      }
    );
  });

  mainWindow.webContents.on('did-finish-load', () => {
    // Handle window logic properly on macOS:
    // 1. App should not terminate if window has been closed
    // 2. Click on icon in dock should re-open the window
    // 3. ⌘+Q should close the window and quit the app
    if (process.platform === 'darwin') {
      mainWindow.on('close', function(e) {
        if (!forceQuit) {
          e.preventDefault();
          mainWindow.hide();
        }
      });

      app.on('activate', () => {
        mainWindow.show();
      });

      app.on('before-quit', () => {
        forceQuit = true;
      });
    } else {
      mainWindow.on('closed', () => {
        mainWindow = null;
      });
    }
  });

  if (isDevelopment) {
    // auto-open dev tools
    mainWindow.webContents.openDevTools();

    // add inspect element on right click menu
    mainWindow.webContents.on('context-menu', (e, props) => {
      Menu.buildFromTemplate([
        {
          label: 'Inspect element',
          click() {
            mainWindow.inspectElement(props.x, props.y);
          }
        }
      ]).popup(mainWindow);
    });
  }
});
