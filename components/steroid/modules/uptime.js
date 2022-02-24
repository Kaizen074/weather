const uptime = async (os) => {
    return {
        uptime: parseInt(os.uptime())
    }
}
module.exports = uptime;