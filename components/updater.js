const updater = async (app, path) => {
    const SakuraUpdater = require('./sakuraupdater/index');
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
                preload: path.join(app.getAppPath(), './render/scripts/test.js')
            },
            backgroundColor: "#000000",
            icon: path.join(__dirname, '../favicon.ico')
        };
        
        let sakura = new SakuraUpdater({
            gitUsername: 'ivanbogaeb',
            gitRepository: 'steroid-app',
            privateToken: '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',
            installationDirectory: path.join(__dirname, '../'),
            hasEXEFile: true,
            fileEXEName: 'steroid.exe',
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