var socket = io();

    	//on permite escuchar o recibir información del servidor
    	socket.on('connect', function(){
    		 var msjSuccess = 'Conectado al servidor';
    		console.log(msjSuccess);
    		//alert(msjSuccess);
    	});


    	socket.on('disconnect', function(){
    		var msjError = '¡Se perdió la conexión con el servidor!';
    		console.log(msjError);
    		//alert(msjError);
    	});

    	//emit: envía información al servidor
    	socket.emit('enviarMensaje', {
    		nombre:'Liam Ivan Rangel Cáliz',
    		mensaje: 'Hola mundo'
    	}, function(resp){
    		console.log('RESPUESTA SERVER: ', resp);
    	});


    	//escuchar al servidor
    	socket.on('enviarMensaje', function(data){
    		console.log(data);
    	});