const user = async (os) => {
    return {
        name: os.hostname(),
        info: os.userInfo(['utf8'])
    }
};
module.exports = user;