let primeiroNumero = 20;
let segundoNumero = 2;

// Adição:              +
// Subtração:           -
// Multiplicação:       *
// Divisão:             /
// Exponenciação:       **
// Resto da divisão:    %

const soma = primeiroNumero + segundoNumero;

console.log ('Soma =', soma);
console.log ('Subtração =', primeiroNumero - segundoNumero);
console.log ('Multiplicação =', primeiroNumero * segundoNumero);
console.log ('Divisão =', primeiroNumero / segundoNumero);
console.log ('Exponenciação =', primeiroNumero ** segundoNumero);
console.log ('Resto da divisão =', primeiroNumero % 3);

// Precedência de operadores

console.log ('Resultado =', 3 + 7 * 3); // Ele multiplica primeiro e depois soma
console.log ('Resultado =', (3 + 7) * 3); // Coloque entre parêntesis o que vc quiser que ele calcule primeiro

// Biblioteca de Math

console.log ('Qual o número de PI? =', Math.PI);
console.log ('Qual a Raíz quadrada de 16? =', Math.sqrt(16)); //sqrt retorna a raíz quadrada do número em questão, no caso o 16