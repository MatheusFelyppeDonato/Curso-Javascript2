// console.log('Fui carregado de um arquivo externo');


// alert('Olá mundo');
	//console.log('Olá mundo');
	//console.log(document);
	var titulo = document.querySelector(".titulo");
	//console.log(titulo);
	//console.log(titulo.textContent);




 		// console.log(paciente); // tr
 		// console.log(tdpeso); // td que tem o peso
 		// console.log(peso); // obeter 100

 		//console.log(paciente); // tr
 		 //console.log(tdaltura); // td que tem o peso
 		 //console.log(altura); // obeter 100 

	titulo.textContent = "Aparecida Nutricionista";

 		
 		var pacientes = document.querySelectorAll(".paciente");

 		for (var i = 0; i < pacientes.length; i++) {
 			
 		var paciente = pacientes[i];



 		var tdpeso = paciente.querySelector(".info-peso");
 		var peso= tdpeso.textContent;


 		var tdaltura = paciente.querySelector(".info-altura");
 		var altura = tdaltura.textContent;

 		

 		 var tdImc = paciente.querySelector(".info-imc");

 		  var alturaEhValida = validaAltura(altura);
    var pesoEhValido = validaPeso(peso);

 		 if (!pesoEhValido){
 			console.log("Peso Inválido");
 			pesoEhValido = false;
 			tdImc.textContent = "Peso Inválido"
 			paciente.classList.add("paciente-invalido");
 		}


 		if (!alturaEhValida) {

 			console.log("Altura Inválida")
 			alturaEhValida = false;
 			tdImc.textContent="Altura Inválida"
 			paciente.classList.add("paciente-invalido");
 		}


 		if (pesoEhValido && alturaEhValida) {
 		var imc = calculaimc(peso, altura);
        tdImc.textContent = imc;

 		}
 		}

 		function validaPeso(peso){

 			if (peso >= 0 && peso < 1000){
 				return true;
 			
 		}else {  return false;
 		}
 		}

 		function validaAltura(altura){

 			if(altura >= 0 && altura <= 3.00){
 				return true;
 			
 		}else{ return false;
 		}
 		}

 		function calculaimc (peso,altura){
 			var imc = 0;

 			imc = peso/ (altura * altura);

 			return imc.toFixed(2);
 		}
 		
 		
 		