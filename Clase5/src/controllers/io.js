module.exports = (socket) => {
    socket.on('offer', (payload) => {
        console.log('Se recibió la oferta ', payload);
        socket.emit("update", payload);
    });

    socket.on('message', ( data ) => {
        console.log('Se recibió un mensaje ', data);
        socket.emit("message", data);
    });

    socket.on('perrito', (payload) => {
        console.log('Se recibió un mensaje ', payload);
    });

    socket.on('disconnect', () => {
        console.log('Conexión cerrada');
    });

    socket.emit('status', "successfully connected to the socket");
}