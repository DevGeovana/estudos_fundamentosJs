// tipo de dados
// booleanos

// conversão implicita permite transformar um tipo de dados em outro



const numero  = 456;
const numeroString = '456';

console.log(numero === numeroString); //expected false, pois aqui temos um tipo number sendo comparado ao tipo string
console.log(numero == numeroString); //expected true pois o javaScript converteu o número numa string e comparou
console.log(numero + numeroString); //expected 456456, pois o JS transformou o tipo number numa string e concatenou

// conversão explicita
//Number()
console.log(numero + Number(numeroString)); //expected 912, pois a string foi transformada num type number 
//String()
console.log(String(numero) === numeroString); // expected true, pois o numero foi tranformado numa string

