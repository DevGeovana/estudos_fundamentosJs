//Boolean
const usuarioLogado = true;
const contaPga = false;

// truthy ou falsy
// 0 === false
// 1 === true

console.log(0 == false); // expected 'true'
console.log("" == false); // expected 'true'
console.log(1 == true) // expected 'true'

// null é um tipo de dado que representa vazio/nada
// undefined 

let minhaVar;
let varNull = null;

console.log(typeof minhaVar); // expected undefined
console.log(typeof varNull); // expected null que tem o tipo de object é um erro do JS

let numero = 3;
let texto = 'Alura';

// o typeof exibe o tipo de dado contido na variavel
console.log(typeof numero); // expected number
console.log(typeof texto); // expected string
