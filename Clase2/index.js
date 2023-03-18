/* const http = require('http');
const host = 'localhost';
const port = 8088;

const server = http.createServer((req, res) => {
    res.end('Mi primer Server en Node')
});

server.listen(port, host, ()=>{
    console.log(`App Listening at http://${host}:${port} 🌎 💻`);
}); */

const Server = require('./models/server');
const server = new Server();

server.listen();