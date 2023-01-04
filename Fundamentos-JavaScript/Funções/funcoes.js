// let x = " ";
// console.log(x);
// x = "oi";
// console.log(x);

// DECLARAÇÃO DE FUNÇÃO

// 1- Declarar função e dizer o que ela faz, nesse caso a função imprime um texto
                      //string
function imprimeTexto(texto) {
  console.log(texto);
}

// 2- Executa a função (1 ou + vezes)
imprimeTexto("Hello there!") // posso chamar em qualquer lugar do  código
imprimeTexto("Bom dia!");
imprimeTexto(soma()); //passa o valor de uma função como parâmetro para outra

// O JS tem três maneiras de escrever functions

function soma() {
  //outros códigos
  return resultado = 2 + 2; // o return tem que ser a última linha da function, pois após isso a função para de ser executada
}
// console.log(soma());