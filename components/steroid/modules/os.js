const os = async (os) => {
    return {
        archquitecture: os.arch(),
        platform: os.platform(),
        release: os.release(),
        version: os.version(),
        type: os.type()
    }
};

module.exports = os;