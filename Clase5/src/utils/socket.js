const io = require('socket.io')(8001,{
    cors: { origins: '*' }
});

io.on('connection', require('../controllers/io'));