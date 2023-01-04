// parâmetros de função
              //declara que vai receber dois valores
              //x = 14;
              //y = 12;
function soma(x, y) {
  return x + y;
}
console.log(soma(14, 12)); // argumentos para executar a function (14,12)

// parâmetros VS. argumentos

// ordem dos parâmetros
function nomeIdade(nome, idade) {
  return `Meu nome é ${nome} e minha idade é ${idade}`;
}
//console.log(nomeIdade(22, 'Geovana')); // expected => Meu nome é 22 e minha idade é Geovana, pois os parâmetros respeitam a ordem
console.log(nomeIdade('Geovana', 22)); // expected => Meu nome é Geovana e minha idade é 22


function multiplica (x = 1, y = 1) {
  return x * y;
};
                          //9     *      6 
console.log(multiplica(soma(4, 5), soma(3, 3))); //expected 54
console.log(multiplica(soma(4,5))) //expected NaN antes de passar o x = 1 (default value) e 9 após isso;