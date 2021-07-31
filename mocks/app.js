const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const PORT = 3000;
const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', require('./controllers'));

server.listen(PORT);
server.on('listening', () => {
    console.log(`listening on http://localhost:${PORT}/api`);
});
