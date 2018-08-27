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

 		 var pesoEhValido = true;
 		 var alturaEhValida = true;

 		 if ( peso <= 0 || peso >= 1000){
 			console.log("Peso Inválido");
 			pesoEhValido = false;
 			tdImc.textContent = "Peso Inválido"
 			paciente.classList.add("paciente-invalido");
 		}


 		if ( altura <= 0 || altura >= 3.00) {

 			console.log("Altura Inválida")
 			alturaEhValida = false;
 			tdImc.textContent="Altura Inválida"
 			paciente.classList.add("paciente-invalido");
 		}


 		if ( alturaEhValida && pesoEhValido) {
 		var imc = peso / (altura * altura); // 100 / 2.0 * 2.0 = 100/4 = 25
		
		tdImc.textContent = imc.toFixed(2);

 		}
 		}
 		
 		/* titulo.addEventListener("click", function(){
 			console.log("Olha, posso chamar uma função anonima.");

 		});


 		function mostraMensagem(){
 			console.log("Olá, eu fui clicado");


 		} */
 		var botaoAdicionar = document.querySelectorAll("#adicionar-paciente");
 		botaoAdicionar.addEventListener("click", function() {
 			console.log("Oi, cloquei no botão");
 		});

 		titulo.addEventListener("click", function(){ 
 		});


 		

 		 