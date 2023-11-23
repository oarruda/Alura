// ARRAYS: Guarda mais do que uma informação na variável.

// Como criar um array? - Cria-se um array com colchetes []
let arr = ['Rafael', 32, 1, 2.77, false];
console.log(arr);

// Como acessar os elementos do array?
console.log('Primeiro elemento:', arr[0]);// Primeiro elemento em JS sempre começa no 0
console.log('Segundo elemento:', arr[1]); // Segundo elemento em JS sempre começa no 1
console.log('Terceiro elemento:', arr[2]);
console.log('Quarto elemento:', arr[3]);
console.log('Quinto elemento:', arr[4]);

// Como obter o tamanho do array?
console.log('Qual o tamanho do array:', arr.length);

// Percorrendo arrays
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.clear();

for (let elemento of arr) {
    console.log(elemento);
}

console.clear();

for (let indice in arr) {
    console.log(indice, arr[indice]);
}