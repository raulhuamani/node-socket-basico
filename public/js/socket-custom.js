var socket = io();

socket.on('connect', function() {
    console.log("Conectado alservidor");
});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexion con el servidor');

});


//Enviar informacion al servidor
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta Server: ', resp);
});

// Escuchar informacion del servidor
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor: ', mensaje);

});