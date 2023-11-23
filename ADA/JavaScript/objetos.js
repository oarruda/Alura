// Objetos

// Como criar um objeto no JavaScript?
let pessoa = {
    nome: 'Rafael',
    idade: 26,
    sexo: 'masculino',
    cidade: 'São Paulo'
}
console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa['nome'])
console.log(pessoa.idade)
console.log(pessoa['idade'])

// Como adicionar um par chave-valor?
pessoa.altura = 1.77
console.log(pessoa)

// Como remover um par chave-valor?
delete pessoa.altura
console.log(pessoa)

// Como percorrer
for (let chave in pessoa) {
    console.log (chave)
}