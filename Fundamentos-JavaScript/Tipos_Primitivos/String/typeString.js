//Type string(guardar caracteres, numeros)

const text1 = 'Olá, mundo!';
const text2 = "Olá, mundo!";
const senha = "senhaSuperSegura456!";
const stringDeNumeros = "123456";

// Aspas simples e duplas
const citacao = 'A Geovana disse "Olá!"';
const citacao2 = "A Geovana disse 'Olá!'";

console.log(text1); // result expected Olá, mundo!
console.log(text2); // result expected Olá, mundo!
console.log(senha); // result expected senhaSuperSegura456! 
console.log(stringDeNumeros); // result expected 123456
console.log(citacao); // result expected A Geovana disse "Olá!"
console.log(citacao2); // result expected A Geovana disse 'Olá!'

// concatenação (+) 

// template string ou template literal ${}

const text3 = 'Meu nome é:'
const meuNome = 'Geovana';

// sem template string
console.log(text3 + " " + meuNome); // result expected Meu nome é: Geovana 

// com template strig
console.log(`${text3} ${meuNome}`); // result expected Meu nome é: Geovana 


// UTF Unicode (character encoding).
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)