
var fs = require('fs');
var arquivo = process.argv[2];
var ext = arquivo.split(".")[arquivo.split(".").length-1];
var a = [];
if(ext=="json"){
	var lista = JSON.parse(fs.readFileSync(arquivo));
	asd(lista.sequencia);
	console.log(a.toString().replace(/,/g, ""));
}
else if(ext=="xml"){
	var xmlParser = require('xml2js').parseString;

	fs.readFile(arquivo, function(err, data) {
        xmlParser(data, function(err, lista) {
			a = lista.sequencia.split(",");

			asd(a);
			console.log(a.toString().replace(/,/g, ""));
		});
    });
}
else if(ext=="csv"){
	var csv = require('csv-string');
	fs.readFile(arquivo, 'utf8', function(err, data) {
		lista = csv.parse(data);
		a = lista[0];
		asd(a);
		console.log(a.toString().replace(/,/g, ""));
	});
}

function asd(sequencia){
	var inicio = sequencia[0];
    var fim;

	for (var i = 0; i < sequencia.length ; i++) {
		if(i == sequencia.length - 1) {
			a[i]= "["+ sequencia[i] +"]";
			break;
		}

		if((Number(sequencia[i])+1) != Number(sequencia[i+1])){
			fim = sequencia[i];
			a[i] = "["+ inicio + "-" + fim +"]";
			inicio = sequencia[i+1];
		}
	}
}
