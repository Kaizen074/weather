window.onload = () => {
    try {
        const uaup = require('uaup-js');
        const defaultStages = {
            Checking: "Checking for updates", // When Checking For Updates.
            Found: "Update found",  // If an Update is Found.
            NotFound: "No Update Found", // If an Update is Not Found.
            Downloading: "Updating", // When Downloading Update.
            Unzipping: "Installing", // When Unzipping the Archive into the Application Directory.
            Cleaning: "Finalizing", // When Removing Temp Directories and Files (ex: update archive and tmp directory).
            Launch: "Launching" // When Launching the Application.
        };

        const updateOptions = {
            gitRepo: "steroid-app", // [Required] Your Repo Name
            gitUsername: "ivanbogaeb",  // [Required] Your GitHub Username.
        
            appName: "Steroid", //[Required] The Name of the app archive and the app folder.
            appExecutableName: "Steroid.exe", //[Required] The Executable of the Application to be Run after updating.
            versionFile: "./settings.json", // {Default is "Application directory/settings/version.json"} [Optional] The Path to the Local Version File.
            tempDirectory: "/tmp", // {Default is "Application directory/tmp"} [Optional] Where the Update archive will download to.
        
            progressBar: document.getElementById("download-number"), // {Default is null} [Optional] If Using Electron with a HTML Progressbar, use that element here, otherwise ignore
            label: document.getElementById("download-label"), // {Default is null} [Optional] If Using Electron, this will be the area where we put status updates using InnerHTML
            forceUpdate: false, // {Default is false} [Optional] If the Application should be forced updated.  This will change to true if any errors ocurr while launching.
            stageTitles: defaultStages, // {Default is defaultStages} [Optional] Sets the Status Title for Each Stage
        };

        uaup.Update(updateOptions);

        const progressBar = document.getElementById("download-number");

        progressBar.addEventListener('change', function(){
            document.getElementById('bar-progress').style.width = this.value+"%";
        });

    } catch (error){
        console.log(error);
    }
};