// ARRAYS - Parte 2: Métodos de arrays
let arr1 = [30, 12, 45, 34, 29];
let arr2 = [];

// Fatiamento: Slice
console.log(arr1.slice(0, 2)) //Nesse caso ele pega apenas os dados até o número 2 do índice
console.log(arr1.slice(2))    //Nesse caso ele pega apenas os dados após o número 2 do índice

console.clear();

// Adicionando elementos: push | unshift
console.log('Antes de adcionar o push:', arr2);
arr2.push(10, 20, 30);                              //push adiciona ao final do array
arr2.push(40);
console.log('Depois de adcionar o push:', arr2);

console.log('Antes de adcionar o unshift:', arr2);
arr2.unshift(9, 8, 7);                              //unshift adiciona ao início do array
console.log('Depois de adcionar o unshift:', arr2);

console.clear();

// Removendo elementos: pop | shift
console.log('Antes de removever com o pop:', arr2);
const elementoRemovido = arr2.pop();                   //pop remove o último elemento adicionado
console.log('Depois de remover com o pop:', arr2);
console.log('O elemento removido foi:', elementoRemovido);

arr2.shift();                                           //pop remove o primeiro elemento adicionado
console.log('Depois de remover com o shift:', arr2);

console.clear();

// Concatenando arrays: concat
console.log('arr1', arr1);
console.log('arr2', arr2);

console.log(arr1.concat (arr2));
console.log(arr2. concat (arr1));

console.clear();

// Buscando elementos: indexOf | lastIndexOf
console.log(arr1);

let indiceDoElemento34 = arr1.indexOf(34)
console.log(indiceDoElemento34);

let indiceDoElemento35 = arr1.indexOf(35) // Quando o elemento não existir, ele irá retornar o valor -1
console.log(indiceDoElemento35);

let arr3 = [1, 2, 3, 3, 5, 3]

console.log(arr3);
console.log(arr3.indexOf(3)); // Se tiver mais do que um elemento 4, ele trará apenas o indice do primeiro elemento encontrado

console.log(arr3);
console.log(arr3.lastIndexOf(3)); // lastIndexOf trará o indice do último elemento encontrado

console.clear();

// Descobrindo a existência de um elemento: includes

console.log(arr1);
console.log('No array tem o número 10?', arr1.includes(10)); // Ele pesquisa se tem o elemento, se tiver ele retorna true, se não tiver ele retorna false
console.log('No array tem o número 45?', arr1.includes(45)); // Ele pesquisa se tem o elemento, se tiver ele retorna true, se não tiver ele retorna false

console.clear();

// Invertendo arrays: reverse
console.log('arr1 normal:', arr1);

const arr1Invertido = arr1.reverse();           // reverse, inverte a ordem do array

console.log('arr1 ivertido:', arr1Invertido)