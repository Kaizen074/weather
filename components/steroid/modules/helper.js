const helper = {
    hello: async () => {
        let response = await fetch(steroid.url, {
            method: 'GET',
        });
        return await response.json();
    },
    delay:(ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    },
    storage: {
        get: (key) => {
            return localStorage.getItem(key);
        },
        save: (key, value) => {
            if (typeof(value) == "object"){
                localStorage.setItem(key, JSON.stringify(value));
            } else {
                localStorage.setItem(key, value);
            }
        }
    }
};
module.exports = helper;
