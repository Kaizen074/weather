const updater = async (app, path, Sakura) => {
    try {
        let windowProperties = {
            show: true,
            frame: false,
            resizable: false,
            minimizable: false,
            maximizable: false,
            width: 400,
            height: 250,
            center: true,
            webPreferences: {
                webSecurity: true,
                contextIsolation: true,
                preload: path.join(app.getAppPath(), './render/scripts/updater.js')
            },
            icon: path.join(__dirname, '../favicon.ico')
        };
        
        let sakura = new Sakura({
            gitUsername: 'ivanbogaeb',
            gitRepository: 'steroid-app',
            privateToken: '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',
            installationDirectory: path.join(__dirname, '../'),
            hasExecutable: true,
            executableName: 'steroid.exe',
            isElectron: true,
            currentVersion: require('../version.json'),
        });

        return await sakura.ready(windowProperties, path.join(app.getAppPath(), './render/html/updater.html'));
        
    } catch (error){
        console.log(error);
        return true;
        // throw new Error(error); // I mean, I could but... You know
    };
};

module.exports = { updater };