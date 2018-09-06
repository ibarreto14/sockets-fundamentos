const { io } = require('../server');

//SE DETECTA LA CONEXIÓN CON EL USUARIO
io.on('connection', (client) => {
	console.log('Usuario conectado');

	//SE DETECTA CUANDO EL USUARIO SE DESCONECTA
	client.on('disconnect', () => {
		console.log('Usuario desconectado');
	});

	//ENVIAR UN MENSAJE EL CLIENTE
	client.emit('enviarMensaje', {
		'nombre':'Admin',
		'mensaje':'¡Bienvenido a esta aplicación!',
		'estatus':1
	});


	//ESCUCHAR AL CLIENTE
	client.on('enviarMensaje', (data, callback) => {
		console.log(data);

		client.broadcast.emit('enviarMensaje', data);

		/*if(message.nombre){
			callback({
				'resp':'TODO SALIÓ BIEN'
			})
		}else{
			callback({
					'resp':'TODO SALIÓ MAL!!!!'
			})
		}*/

		;
	});
});