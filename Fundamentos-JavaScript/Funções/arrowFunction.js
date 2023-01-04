// Declaração de função padrão
function apresentar(nome) {
  return `Meu nome é ${nome}`;
}
console.log(apresentar('Geovana'));

// Com arrow function

const apresentarArrow = nome => `Meu nome é ${nome}`;
console.log(apresentarArrow('Geovana'));

// com um ou mais parametros
const soma = (x, y) => x+y;
console.log(soma(2, 2));

// Arrow function com + de 1 linha de instrução
// => é diferente do operador maior igual que >=

// Hoisting: arrow function se comporta como expressão
const somaNumerosPequenos = (x, y) => {
  return x >= 10 || y >= 10 ? "Somente números de 1 a 9" : x + y; 
};
console.log(somaNumerosPequenos(5,2));





