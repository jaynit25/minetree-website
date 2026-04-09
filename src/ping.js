const https = require('https');

// Replace with your actual Render URL
const URL = 'https://minetree-technologies.onrender.com/'; 

const pingApp = () => {
  https.get(URL, (res) => {
  }).on('error', (err) => {
  });
};

// Ping every 14 minutes (14 * 60 * 1000 ms)
// This keeps it under the 15-minute inactivity limit
setInterval(pingApp, 840000);

pingApp();