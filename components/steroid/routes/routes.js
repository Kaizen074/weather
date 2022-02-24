const express = require('express');
const router = express.Router();
/*
const modules = {
    user: require('../modules/user'),
    os: require('../modules/os'),
    uptime: require('../modules/uptime'),
    cpu: require('../modules/cpu'),
    gpu: require('../modules/gpu'),
    memory: require('../modules/memory'),
    network: require('../modules/network'),
    drives: require('../modules/drives'),
    execute: require('../modules/execute'),
    helper: require('../modules/helper')
};

const steroid = {
    // OFFLINE FEATURES
    user: modules.user(os),
    os: modules.os(os),
    uptime: modules.uptime(os),
    network: modules.network,
    drives: modules.drives(spawn),
    helper: modules.helper,
    // CORE VARIABLES
    url: 'https://steroidapp.ddns.net/api/',
    header: {'Content-Type': 'application/x-www-form-urlencoded'},
    spotifyHeader: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic '
    }
}
*/

const controller = {
    system: require('./controller/system'),
    motherboard: require('./controller/motherboard'),
    cpu: require('./controller/cpu'),
    memory: require('./controller/memory'),
    battery: require('./controller/battery'),
    gpu: require('./controller/gpu'),
    filesystem: require('./controller/filesystem'),
    usb: require('./controller/usb'),
    printer: require('./controller/printer'),
    audio: require('./controller/audio'),
    network: require('./controller/network'),
    wifi: require('./controller/wifi'),
    bluetooth: require('./controller/bluetooth'),
    execute: require('./controller/execute')
}

router.get('/system', controller.system);
router.get('/motherboard', controller.motherboard);
router.get('/cpu', controller.cpu);
router.get('/memory', controller.memory);
router.get('/battery', controller.battery);
router.get('/gpu', controller.gpu);
router.get('/filesystem', controller.filesystem);
router.get('/usb', controller.usb);
router.get('/printer', controller.printer);
router.get('/audio', controller.audio);
router.get('/network', controller.network);
router.get('/wifi', controller.wifi);
router.get('/bluetooth', controller.bluetooth);
router.get('/execute', controller.execute);

module.exports = router;