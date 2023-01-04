const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // result expected === false

// padroniza todos os inputs em letra minúscula
const inputMinusculo = input.toLowerCase();
console.log(cidade === inputMinusculo); // result expected === true

// o .lenght é utilizado para saber a quantidade de caracteres a string contém
// .lenght é um method e não uma prop
const senha = "minhaSenha123"
console.log(senha.length) // result excpeted13 caracteres
