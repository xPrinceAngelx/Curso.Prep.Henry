function obtenerMayor(x, y) {
  if(x > y){
    return x
  }
  else{
    return y
  }
}

function mayoriaDeEdad(edad) {
  if(edad >= 18){
    return "Allowed"
  }
  else{
    return "Not allowed"
  }
}
  
function conection(status) {
  if (status === 1) {
    return "Online"
  }
  else if (status === 2) {
    return "Away"
  }
  else {
    return "Offline"
  }
}

function saludo(idioma) {
  if (idioma === "aleman"){
    return "Guten Tag!"
  } 
  if (idioma === "mandarin") {
    return "Ni Hao!"
  }
  if (idioma === "ingles") {
    return "Hello!"
  }
  else {
    return "Hola!"
  }
}

function colors(color) {
  switch (color) {
  case "blue":
    return "This is blue"
  case "red":
    return "This is red"
  case "green":
    return "This is green"
  case "orange":
    return "This is orange"
  default:
    return "Color not found"
  }
}

function esDiezOCinco(numero) {
  switch (numero) {
    case 10:
      return true;
    case 5:
      return true;
    default:
      return false
  }
}

function estaEnRango(numero) {
  if (numero < 50 && numero > 20) {
    return true
  }
  return false
}

function esEntero(numero) {
  return Math.floor(numero) === numero
}

function fizzBuzz(numero) {
  if(numero % 3 === 0 && numero % 5 === 0) {
    return("fizzbuzz")
  }
  if(numero % 3 === 0) {
    return("fizz") 
  }
  if(numero % 5 === 0) {
    return("buzz")
  }
  else {
    return numero
  }
}

function operadoresLogicos(num1, num2, num3) {
  if(num1 < 0 || num2 < 0 || num3 < 0) {
    return "Hay negativos"
  }
  if(num1 === 0 || num2 === 0 || num3 === 0) {
    return "Error"
  }
  if(num1 > num2 &&  num1 > num3 && num1 - num1 === 0) {
    return "Número 1 es mayor y positivo"
  }
  if(num3 > num1 && num3 > num2) {
    return num3 + 1 
  }
  else {
    return false
  }
}

function esPrimo(numero) {
  if(numero < 2) {
    return false
  }
  if (numero === 2){
    return true
  }
  for(var i = 2; i < numero; i++) {
    if(numero % i === 0){
      return false
    }
  }
  return true
}

function esVerdadero(valor){
  if(valor == true) {
    return "Soy verdadero"
  }
  else {
    return "Soy falso"
  }
}

function tablaDelSeis(){
  var tablaSeis = [];
  for(var i = 0; i <= 10; i++){
    tablaSeis.push(6*i)
  }
  return tablaSeis
}

function tieneTresDigitos(numero){
 if(numero > 99 && numero < 1000){
   return true
 } 
 return false
}

function doWhile(numero) {
  var Vueltas = 0
  do{
    numero = numero + 5
    Vueltas = Vueltas + 1
  }
while(Vueltas < 8)
return numero
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
