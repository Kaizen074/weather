exports.discordPresence = () => {
    const client = require('discord-rich-presence')('853837896369045544');
    try {
        client.updatePresence({
            state: 'Running...',
            details: 'Wallpaper Engine Web Extension',
            largeImageKey: 'steroid-profile-dark',
            startTimestamp: Date.now(),
            instance: true,
        });
    } catch (error){
        console.warn(error);
    }
}