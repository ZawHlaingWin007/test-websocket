/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

console.log("KEYS", process.env.MIX_PUSHER_APP_KEY)
console.log("CLUSTER", process.env.MIX_PUSHER_APP_CLUSTER);
console.log("WS HOST", process.env.MIX_PUSHER_HOST);
console.log("WS PORT", process.env.MIX_PUSHER_PORT);

export default function setupEcho() {
    window.Echo = new Echo({
        broadcaster: 'pusher',
        key: process.env.MIX_PUSHER_APP_KEY,
        cluster: process.env.MIX_PUSHER_APP_CLUSTER,
        forceTLS: process.env.MIX_PUSHER_SCHEME === 'https',

        wsHost: process.env.MIX_PUSHER_HOST,
        wsPort: process.env.MIX_PUSHER_PORT,
        wssPort: 443,
        enabledTransports: ['ws', 'wss'],
    });
}
