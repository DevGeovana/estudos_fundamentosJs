//Template string
/*
(`${}`) permite a inserção de valores de variáveis dentro de uma string de texto, mas não somente isso.
*/


const nome = 'Geovana';
const cidadeNatal = 'São Paulo';
const idade = 2022 - 2000;
const apresentação = `Meu nome é: ${nome}. Tenho ${idade} anos e moro na cidade de ${cidadeNatal}!`;

console.log(apresentação);