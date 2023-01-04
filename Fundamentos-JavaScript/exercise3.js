a = []
b = 20
c = true 
d = ''

if (b === 20 && c != false && d == 0) {
  console.log('Verdade')
} else {
  console.log('Falso')
}; // Verdade; b possui o mesmo valor e mesmo tipo(true); c é true e diferente de zero; uma string vazia é comparado com 0

if (a == 0) {
  console.log('Verdade')
} else {
  console.log('Falso')
}; // Verdade, o valor de um array vazio é 0

if (d) {
  console.log('Verdade')
} else {
  console.log('Falso')
} // Uma string vazia no javaScript é considerada false

if (b == '20') {
  console.log('Verdade')
} else {
  console.log('Falso')
} // Verdade, pois compara o conteúdo e não o tipo