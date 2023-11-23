// Coerção de tipos ou Conversão de tipos.
// 1. Coerção Explícita (Manual)
const numero = 10;
console.log(numero, typeof numero);

const numeroEmFormatoDeString = String(numero); // Estou mandando transformar o número em String (texto)
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString);

console.log(Number('1321314'));         // String transformada em número 
console.log(parseFloat('23224.2234'));  // Mostra o número inteiro com as casas decimais
console.log(parseInt('23224.2234'));    // Corta as casas decimais, converte para inteiro
console.log(Boolean(1));                // Ele converte o número para booleano. Igual a 0 é false, diferente de 0 é true.

console.clear()

// 2. Coerção Implicita (Automática)s

console.log(10 + '1');      // Somando número com String/texto. Ele concatena/junta
console.log(10 - '1')       // Subtraindo, o JS entende que é número, por isso ele não concatena
console.log(10 * '3')       // Multiplicando, o JS entende que é número, por isso ele não concatena
console.log(10 - 'asasa')   // Quando não é um número, ele dá um erro de NaN (Not a Number)

console.clear()

// Outros Exemplos

//Qual será a saída desses códigos?
let n = 1 + '1';
n = n - 1;
console.log(n); //10

//Qual será a saída desses códigos?
console.log(2 + 3 + 4 + '5'); //95

//Qual será a saída desses códigos?
console.log('5' + 2 + 3 + 4); //5234

//Qual será a saída desses códigos?
console.log('10' - '4' - '3' - 2 + '5'); //15