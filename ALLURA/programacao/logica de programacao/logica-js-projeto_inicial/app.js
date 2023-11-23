// Operadores
// Não é igual: !=
// Igual: ==
// Maio que: >
// Menor que: < 

//O comando alert irá abrir um popup com o texto escrito nele.
alert('Boas vindas ao jogo do número secreto');
//let é para criação de uma variável.
let numeroMaximo = 100;
//a função Math.randon () gera um número decimal aleatório entre 0 e 1
let numeroSecreto = parseInt (Math.random () * numeroMaximo + 1);
//Essa linha irá aparecer no console, para verificações de erros.
console.log(numeroSecreto);
let chute;
let tentativas = 1;
//enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // Usamos if para se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
        //Para concatenar (juntar) preciso usar a cràse e o cifrão+chaves
    }
    // Usamos else para se chute for diferente ao número secreto
    else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if (tentativas > 1 ) {
//     alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }
