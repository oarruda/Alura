// Estruturas Condicionais

const idade = 20;

if (idade >= 18) {
    console.log('Você é maior de idade');
} else {
    console.log('Você é menor de idade');
}

// Se média >= 7, APROVADO
// Se média < 7 e média >= 5, RECUPERAÇÃO
// Se média < 5, REPROVADO

let media = 4.9999;

if (media >= 7) {
    console.log('APROVADO')
} else if (media >= 5) {
    console.log('RECUPERAÇÃO')
} else {
    console.log('REPROVADO(A)')
}
