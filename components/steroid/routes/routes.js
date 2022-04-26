const express = require('express');
const router = express.Router();

const controller = {
    hello: require('./controller/hello'),
    cpu: require('./controller/cpu'),
    gpu: require('./controller/gpu'),
    usb: require('./controller/usb'),
    wifi: require('./controller/wifi'),
    audio: require('./controller/audio'),
    memory: require('./controller/memory'),
    system: require('./controller/system'),
    network: require('./controller/network'),
    printer: require('./controller/printer'),
    battery: require('./controller/battery'),
    execute: require('./controller/execute'),
    bluetooth: require('./controller/bluetooth'),
    filesystem: require('./controller/filesystem'),
    motherboard: require('./controller/motherboard'),
}
router.get('/', controller.hello);
router.get('/cpu', controller.cpu);
router.get('/gpu', controller.gpu);
router.get('/usb', controller.usb);
router.get('/wifi', controller.wifi);
router.get('/audio', controller.audio);
router.get('/memory', controller.memory);
router.get('/system', controller.system);
router.get('/network', controller.network);
router.get('/printer', controller.printer);
router.get('/battery', controller.battery);
router.get('/execute', controller.execute);
router.get('/bluetooth', controller.bluetooth);
router.get('/filesystem', controller.filesystem);
router.get('/motherboard', controller.motherboard);

module.exports = router;