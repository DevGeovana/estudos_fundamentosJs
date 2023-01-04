// Type boolean é usado para compação em estruturas (if/else, while, for)

const num1 = 1;
const num2 = 2;

// = atribui
// == or === comparação entre dois valores que retona um boolean

console.log(num1 === num2); // result expected 'false'

const num3 = 1;
const num4 = 1;

console.log(num3 === num4); // result expected 'true'

// comparando strings
const text1 = 'Geovana'
const text2 = 'Linda'

console.log(text1 === text2)// will be return false :( 

// comparando tipos de dados
const num5 = '2';
const num6 = 2;

console.log(num5 === num6); // result expected 'false'; pois typeOf num5 é uma string e num6 é um number

// Podemos utilizar o booleano para valores que inicial por default(padrão)
let cadastroAtivado = false; // let para variáveis que mudam de valor
