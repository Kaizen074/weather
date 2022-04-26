const hello = async (req, res) => {
    return res.send(`
        <h1>Hello from Steroid!</h1>
        <p>This is the main API endpoint of Steroid.</p>
        <p>You can find more information about Steroid in the <a href="https://github.com/steroid-app/steroid-app.github.io">GitHub repository</a>.</p>
    `);
};

module.exports = hello;