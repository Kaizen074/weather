exports.updater = async (uaup, BrowserWindow, ipcMain, path, settings) => {

    const window = new BrowserWindow({
        show: true,
        resizable: false,
        minimizable: false,
        maximizable: false,
        transparent:true,
        skipTaskbar: true,
        width: 360,
        height: 200,
        center: true,
        titleBarStyle: "hidden",
        webPreferences: {
            nodeIntegration: true,
            webSecurity: true,
            allowRunningInsecureContent: false,
            contextIsolation: false
        },
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
    //window.once('focus', () => window.flashFrame(false));
    
    ipcMain.on('window-control', (event, arg) => {
        switch(arg){
            case "show": window.show(); break;
            case "minimize": window.minimize(); break;
            case "maximize": window.maximize(); break;
            case "restore": window.unmaximize(); break;
            case "close": window.hide(); break;
            //case "alert": window.flashFrame(true); break;
            case "pin": window.isAlwaysOnTop() ? window.setAlwaysOnTop(false) : window.setAlwaysOnTop(true); break;
        }
    });

    window.loadFile('render/html/updater.html');


    /*const defaultStages = {
        Checking: "Checking For Updates!", // When Checking For Updates.
        Found: "Update Found!",  // If an Update is Found.
        NotFound: "No Update Found.", // If an Update is Not Found.
        Downloading: "Downloading...", // When Downloading Update.
        Unzipping: "Installing...", // When Unzipping the Archive into the Application Directory.
        Cleaning: "Finalizing...", // When Removing Temp Directories and Files (ex: update archive and tmp directory).
        Launch: "Launching..." // When Launching the Application.
    };
    const updateOptions = {
        useGithub: true, // {Default is true} [Optional] Only Github is Currenlty Supported.
        gitRepo: "uaup-js", // [Required] Your Repo Name
        gitUsername: "billy123",  // [Required] Your GitHub Username.
        isGitRepoPrivate: false,  // {Default is false} [Optional] If the Repo is Private or Public  (Currently not Supported).
        gitRepoToken: "abc123",  // {Default is null} [Optional] The Token from GitHub to Access a Private Repo.  Only for Private Repos.
    
        appName: "uaup-js", //[Required] The Name of the app archive and the app folder.
        appExecutableName: "UAUP JS.exe", //[Required] The Executable of the Application to be Run after updating.
    
        appDirectory: "/path/to/application", //{Default is "Application Data/AppName"} [Optional]  Where the app will receide, make sure your app has permissions to be there.
        versionFile: "/path/to/version.json", // {Default is "Application directory/settings/version.json"} [Optional] The Path to the Local Version File.
        tempDirectory: "/tmp", // {Default is "Application directory/tmp"} [Optional] Where the Update archive will download to.
    
        progressBar: null, // {Default is null} [Optional] If Using Electron with a HTML Progressbar, use that element here, otherwise ignore
        label: null, // {Default is null} [Optional] If Using Electron, this will be the area where we put status updates using InnerHTML
        forceUpdate: false, // {Default is false} [Optional] If the Application should be forced updated.  This will change to true if any errors ocurr while launching.
        stageTitles: defaultStages, // {Default is defaultStages} [Optional] Sets the Status Title for Each Stage
    };

    // This will check for updates, download and install (if found), and launch the application.
    // If no update was found the application will launch
    // If the Launch Executable is not found the application will force update
    uaup.Update(updateOptions);*/
};