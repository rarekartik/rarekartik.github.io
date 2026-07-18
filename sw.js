// Background Worker for Stealth Notifications
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Listen for the main app telling us a message arrived while backgrounded
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'TRIGGER_DECOY') {
    const options = {
      body: "Weather is so good, let's go for a ride",
      icon: "https://cdn-icons-png.flaticon.com/512/869/869869.png",
      badge: "https://cdn-icons-png.flaticon.com/512/869/869869.png",
      tag: "weather-alert-sync",
      renotify: true
    };

    event.waitUntil(
      self.registration.showNotification("Weather Alert System", options)
    );
  }
});


