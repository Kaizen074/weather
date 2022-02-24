const path = require('path');
const {exec} = require('child_process');

const execute = async (executable, parameters) => {
    executable = path.join(executable);
    const banned = ['cmd', 'powershell', '/Windows', '%SystemRoot%', '%WINDIR%', 'Steroid'];

    let data = [];

    /*
        exec('"'+executable+'"'+parameters).unref();
        return {executed: true,}
    */

    banned.some((element) => {
        if (executable.match(new RegExp(element))){ // If we match one of the banned words in the executable path
            data.push({error: "You are not allowed to execute this command."});
            //return {error: "You are not allowed to execute this command."};
        } else {
            data.push({success: "all works"});
        }
    });

    return data;
}
module.exports = execute;