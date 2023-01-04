const meuNumber = 12;
const minhaString = '12';

console.log(meuNumber === minhaString); // false => compara o valor e o tipo de dado
console.log(meuNumber == minhaString); // true => compara só o valor 

//Por boas práticas usar os 3 iguais ou a conversão explicita Number() e String()
console.log(typeof meuNumber); // type number
console.log(typeof minhaString) // type string

/* 
||: Operador “ou”, retorna true caso uma condição seja válida;
&&: Operador “e”, retorna true somente se todas as condições forem válidas;
!= e !==: Operadores “não igual” e “estritamente não igual”, utilizados para comparação, da mesma forma que == e === retornam true ou false.
*/

