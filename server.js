// Import Library
const express = require("express");
const path = require('path');

// Declare Initialization
const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, 'dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

// App Config
app.use(express.static(DIST_DIR));

// Render Homepage
app.get('*', (req, res) => {
    res.sendFile(HTML_FILE); // EDIT
});

// Running Port
app.listen(port, function () {
    console.log('App listening on port: ' + port);
});