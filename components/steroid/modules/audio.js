const si = require('systeminformation');

const audio = {
    info: async () => {
        return await si.audio();
    }
}
module.exports = audio;