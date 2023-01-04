function minhaFuncao(param) {
  //bloco de codigo
}
// minhaFuncao("param");

// expressão de função
// expressões anônimas
console.log(soma(1, 1)); // não funciona pois aqui temos o compartamento da const, o console deve ser executado depois da variavel ter sido declarada//
const soma = function(x, y) {return x + y}
console.log(soma(1, 1));

//diferença principal :  HOISTING
// funções e vars são "listadas" no topo do arquivo

console.log(apresentar()); // posso passar o console antes da function
function apresentar() {
  return "Olá!";
};
