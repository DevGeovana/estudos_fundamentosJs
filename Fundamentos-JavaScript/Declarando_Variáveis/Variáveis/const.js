/**
O valor de uma constante não pode ser alterado por meio de reatribuição (ou seja, usando o operador de atribuição) 
e não pode ser redeclarado (ou seja, por meio de uma declaração de variável). 
No entanto, se uma constante for um objeto ou array, suas propriedades ou itens 
podem ser atualizados ou removidos.
 */

const forma = 'triangle'
const altura = 2 ; //const não permite que os valores dentro dela sejam reatribuidos, fornecendo mais segurança na aplicação
const comprimento = 7;
let area; // nesse caso como o valor da area não foi definido, temos que usar o let

if (forma === 'quadrado') {
  area =  altura * comprimento;
} else {
  area = altura * comprimento / 2 
}

console.log(area);