const salario = 1100;
const horasTrabalhadas = 7;
const salarioHora = (salario/ horasTrabalhadas);

console.log(salarioHora); // result expected 157.14285714285714

// Math.round() arredonda os números //
console.log(Math.round(salarioHora)); // result expected 157

// toFixed() controla o número de casas decimais após a vírgula //
console.log(salarioHora.toFixed(2)); // result expected 157,14

/* toLocaleString() converte um número para uma string */ 

console.log(salarioHora.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})); // result expected R$ 157,14

// o style vai determinar o estilo a ser utilizado;
// percent para formato percentual. 
// decimal para representar números simples;
// 'currency' que diz respeito ao formato monetário e que vai indicar a moeda que vai ser utilizada.
// currency: A moeda para usar na formatação monetária (BRL: moeda brasileira === real)


// Outros métodos:

/*
Math.ceil() que retorna o maior número inteiro que é maior que o número passado, por exemplo Math.ceil(11.123), o valor fica 12

Math.floor() que retorna o menor número inteiro que é menor que o número passado, por exemplo Math.floor(11.789), o valor fica 11
*/
