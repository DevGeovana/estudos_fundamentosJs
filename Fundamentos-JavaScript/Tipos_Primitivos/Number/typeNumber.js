// Type 'number' 

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero / segundoNumero;

console.log(operacaoMatematica); // result expected 0.5

// ponto Flutuante

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = 0.5;

const novaOperacao = numeroPontoFlutuante / pontoFlutuanteSemZero;  

console.log(novaOperacao); // result expected 6,6

console.log (typeof novaOperacao); // result expected 'number'

const alura = 'Alura'; 
console.log(typeof alura) // result expected 'string'
console.log(alura * primeiroNumero); // result expected NaN or Not a Number

var a = 0
var b = 0
console.log(a/b) //  result expected NaN

var a = 10
var b = 0
console.log(a/b) // result expected Infinity