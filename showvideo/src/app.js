const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {

    const filePath = path.join(__dirname, 'index.html');
    const stat = fs.statSync(filePath);

    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Length': stat.size
    });

    var stream = fs.createReadStream(filePath);
    stream.pipe(res);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://localhost:${port}/`);
});