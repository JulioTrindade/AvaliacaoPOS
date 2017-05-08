var fs = require('fs');
var lista = JSON.parse(fs.readFileSync('./numeros.json'));

for (var i = 0; i < lista.sequencia.length ; i++) {
	console.log(lista.sequencia[i]);
	var a = [];
	if(lista.sequencia[i+1] == lista.sequencia[i]+1){
		a.push(lista.sequencia[i])
	}
	console.log(a);
};

//a.push()
//a.shift()
