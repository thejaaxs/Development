// This was with the help of the Common JS !

// const { createServer } = require('node:http');
// Just an example
// const fs = require("fs");

// This is ES6 Module - Ecma script one
import http from "http"

const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}); 