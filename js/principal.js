// console.log('Fui carregado de um arquivo externo');


// alert('Olá mundo');
	//console.log('Olá mundo');
	//console.log(document);
	var titulo = document.querySelector(".titulo");
	//console.log(titulo);
	//console.log(titulo.textContent);

	titulo.textContent = "Aparecida Nutricionista";

 		
 		var paciente = document.querySelector("#primeiro-paciente");
 		var tdpeso = paciente.querySelector(".info-peso");
 		var peso= tdpeso.textContent;


 		var tdaltura = paciente.querySelector(".info-altura");
 		var altura = tdaltura.textContent;

 		// console.log(paciente); // tr
 		// console.log(tdpeso); // td que tem o peso
 		// console.log(peso); // obeter 100

 		//console.log(paciente); // tr
 		 //console.log(tdaltura); // td que tem o peso
 		 //console.log(altura); // obeter 100

 		 var imc = peso / (altura * altura); // 100 / 2.0 * 2.0 = 100/4 = 25
