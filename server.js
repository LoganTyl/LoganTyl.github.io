const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static("express"));
app.use(express.static(path.join(__dirname + '/public')));

const server = http.createServer(app);
const port = 3000;
server.listen(port);

console.log(`Server listening on port ${port}`);