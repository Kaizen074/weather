const handler = require('../../modules/audio');

const audio = async (req, res) => {
    let data = await handler.info();
    return res.send(data);
};

module.exports = audio;