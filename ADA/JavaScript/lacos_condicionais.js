// Laços Condicionais

// Para instalar uma biblioteca do Node (no caso do readline-sync, para ler dados do usuário), devemos dar o comando no terminal: npm install readline-syn
const input = require('readline-sync') // Instalação da biblioteca do Node
const numero_sorteado = 5;
let numero = Number(input.question('Qual número você escolhe?'));


// While repete a condição até que ela se torne verdadeira.
while (numero !== numero_sorteado) {
    console.log('Que pena! Você errou. Tente novamente...');
    numero = Number(input.question('Qual número você escolhe?'));
}
    console.log('Parabéns! Você acertou.')