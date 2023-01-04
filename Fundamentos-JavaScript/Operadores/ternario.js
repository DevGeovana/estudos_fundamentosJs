//OPERADORES TERNÁRIOS 
// condition ? expr1 : expr2

const idadeMinima = 18;
const idadeCliente = 19;

//Condicionais com if/else

if (idadeCliente >= idadeMinima) {
  console.log('Bora tomar uma!')
} else {
  console.log('Toma suquinho,bb!')
}

//Com operador ternário
            //condição               // true          or      false  
console.log(idadeCliente >= idadeMinima ? "Bora tomar uma!!!" : "Toma suquinho, bb!" );

const nome = "Leo";
const idade = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)