{
  "name": "whatsapp-web-backend",
  "version": "1.0.0",
  "private": true,
  "description": "Node.js backend for a personal WhatsApp Web QR-linking dashboard",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "engines": {
    "node": ">=20"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.21.2",
    "qrcode": "^1.5.4",
    "whatsapp-web.js": "^1.34.2"
  }
}