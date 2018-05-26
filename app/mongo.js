// Agradeço a Deus pelo dom do conhecimento

var mongoose = require('mongoose');
let uri = 'mongodb://root:mongodb@127.0.0.1:27017/database';

var options = {
  user: 'root',
  pass: 'mongodb',
}

mongoose.connect(uri, options).then(
  () => {
  	mongoose.connection.on('connected', function() {
	console.log('Mongoose! Conectado em ' + uri);
	});

	mongoose.connection.on('desconnected', function() {
		console.log('Mongoose! Desconectado em ' + uri);
	});

	mongoose.connection.on('error', function(erro) {
		console.log('Mongoose! Error na Conectado ' + erro);
	});
},
  err => {
  	console.log('[ERROR]: ' + err);
}
);

