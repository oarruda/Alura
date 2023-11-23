// Funções - Função é um trecho do código que reaproveitamos

// Definição da função
function saudacao() {
    console.log('Olá, seja bem-vindo(a) ao nosso curso básico de JavaScript!')
};

saudacao();

console.clear();

// Como enviar parametros para as funções

function saudacao(nome, curso) {
    console.log(`Olá, ${nome}! Seja bem-vindo(a) ao nosso curso básico de ${curso}!`)
};

saudacao('Rafael', 'JavaScript');

// Se eu não informar o parametro, ele vai herdar da minha função
function saudacao(nome, curso='JavaScript') {
    console.log(`Olá, ${nome}! Seja bem-vindo(a) ao nosso curso básico de ${curso}!`)
};

saudacao('Rafael');

console.clear();

// Retorno da função
function soma(numero1, numero2) {
    return numero1 + numero2
}

let resultado = soma(10, 20);

console.log(resultado);

console.clear();

function maiorDoQue50(numero) {
    if (numero > 50) {
        return true
    }
        return false
}
