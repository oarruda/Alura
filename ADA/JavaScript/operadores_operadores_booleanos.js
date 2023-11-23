let primeiroNumero = 20;
let segundoNumero = 2;

// Igualdade:           == (ou ===)
// Desigualdade:        != (ou !==)
// Maior que:           >
// Maior ou igual:      >=
// Menor que:           <
// Menor ou igual:      <=

const numero = 10;

console.log('Número 10 é igual a 10? =', numero == 10);
console.log('Número 10 é maior que 20? =',numero >20);

console.log('Número 10 é igual a 10? =',numero ==10);
console.log('Número 10 é igual a dez? =',10 == '10') // Não utilize 2 iguais, pode dar BUG de comparação com texto.
console.log('Número 10 é igual a dez? =',10 === '10') // Utilize sempre 3 iguais para comparar texto com número

console.log('Número 10 é diferente de 10? =',10 != 10);
console.log('Número 10 é diferente de dez? =',10 != '10'); // Não utilize 1 iguail, pode dar BUG de comparação com texto.
console.log('Número 10 é diferente de dez? =',10 !== '10');// Utilize sempre 2 iguais para comparar texto com número

console.clear();

// Conjunções Lógicas:
// And => &&
let idade = 18;
let tenhoCNH = true;
const possoDirigir = idade >= 18 && tenhoCNH === true;
console.log('Posso Dirigir?', possoDirigir);


// OR => ||
idade = 40;
const votoFacultativo = idade < 18 || idade >= 70;
console.log('Tenho que votar esse ano?', votoFacultativo);

/// NOT => !
const estouGostandoDoCurso = false;

console.log('Estou gostando do curso?', !estouGostandoDoCurso); //Exclamação inverte o resultado do booleano