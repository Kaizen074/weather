exports.window = (app, BrowserWindow, ipcMain, path, settings) => {
    const window = new BrowserWindow({
        show: false,
        resizable: true,
        minimizable: true,
        maximizable: true,
        minWidth: 400,
        minHeight: 600,
        center: true,
        webPreferences: {
            webSecurity: true,
            contextIsolation: true,
            preload: path.join(app.getAppPath(), './render/scripts/index.js')
        },
        backgroundColor: "#202020",
        icon: path.join(__dirname, '../favicon.ico')
    });
    
    window.removeMenu();
    window.on('close', function(event) {
        if (!settings.exit){
            event.preventDefault();
            window.hide();
        }
        return false;
    });
    
    window.webContents.openDevTools();
    window.loadFile("render/html/index.html");
    window.once('focus', () => window.flashFrame(false));
    
    ipcMain.on('window-control', (event, arg) => {
        switch(arg){
            case "show": window.show(); break;
            case "minimize": window.minimize(); break;
            case "maximize": window.maximize(); break;
            case "restore": window.unmaximize(); break;
            case "close": window.hide(); break;
            case "alert": window.flashFrame(true); break;
            case "pin": window.isAlwaysOnTop() ? window.setAlwaysOnTop(false) : window.setAlwaysOnTop(true); break;
        }
    });
};