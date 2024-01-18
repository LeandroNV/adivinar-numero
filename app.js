let numeroSecreto = 0;
let intentos = 0;
let listaNumerosGenerados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento = String, texto = String) {
	let elementoHTML = document.querySelector(elemento);
	elementoHTML.innerHTML = texto;
	return;
}

function verificarIntento() {
	let numeroDeUsuario = parseInt(
		document.getElementById("valorUsuario").value
	);

	if (numeroDeUsuario === numeroSecreto) {
		asignarTextoElemento(
			"p",
			`Felicidades, has adivinado el número secreto en ${intentos} ${
				intentos === 1 ? "intento" : "intentos"
			}`
		);
		document.getElementById("reiniciar").removeAttribute("disabled");
		document.getElementById("intentar").setAttribute("disabled", true);
	} else {
		if (numeroDeUsuario > numeroSecreto) {
			asignarTextoElemento("p", "El número secreto es menor");
		} else {
			asignarTextoElemento("p", "El número secreto es mayor");
		}
		intentos++;
		limpiarCaja();
	}
	return;
}

function condicionesIniciales() {
	// Mensaje de bienvenida
	asignarTextoElemento("h1", "Juego del número secreto");
	// Mensaje de intervalo de números
	asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
	// Generar nuevo número aleatorio
	numeroSecreto = generarNumeroSecreto();
	// Inicializar intentos
	intentos = 1;
}

function limpiarCaja() {
	document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
	let numeroGenerado = parseInt(Math.random() * numeroMaximo) + 1;
	console.log(numeroGenerado);
	// Si ya se generaron todos los numeros posibles, reiniciar la lista de numeros generados
	if (listaNumerosGenerados.length === numeroMaximo) {
		asignarTextoElemento("p", "Se han generado todos los números posibles");
		listaNumerosGenerados = [];
	} else {
		// Si el numero generado está en la lista de numeros ya generados, generar otro
		if (listaNumerosGenerados.includes(numeroGenerado)) {
			//Includes recorre el array y verifica si el numero generado ya está en el array
			return generarNumeroSecreto();
		} else {
			// Si el numero generado no está en la lista de numeros ya generados, agregarlo al array
			listaNumerosGenerados.push(numeroGenerado);
			return numeroGenerado;
		}
	}
}

function reiniciarJuego() {
	// Limpiar caja del input
	limpiarCaja();
	// Indicar mensaje de intervalo de números
	condicionesIniciales();
	// Deshabilitar botón de nuevo juego
	document.getElementById("reiniciar").setAttribute("disabled", true);
	// Habilitar botón de intentar
	document.getElementById("intentar").removeAttribute("disabled");
}

condicionesIniciales();

//! Ejercicio 1
// function calculaIMC(peso, altura) {
// 	let pesoEnKg = parseInt(peso);
// 	let alturaEnMts = altura / 100;
// 	let imc = pesoEnKg / alturaEnMts ** 2;
// 	return console.log(`Tu IMC es ${imc}`);
// }

// calculaIMC(65, 178);

//! Ejercicio 2
// function calcularFactorial(number) {
// 	let factorial = number;
// 	for (let i = number - 1; i > 0; i--) {
// 		factorial *= i;
// 	}
// 	return console.log(`El factorial de ${number} es ${factorial}`);
// }

// calcularFactorial(5);

//! Ejercicio 3
// function convertirDivisa(number) {
// 	let dolares = number;
// 	let pesos = dolares * 3850;
// 	return console.log(`${dolares} dólares equivalen a ${pesos} pesos`);
// }

// convertirDivisa(10);
