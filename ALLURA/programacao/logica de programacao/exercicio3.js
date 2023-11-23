let numeroMaximo = prompt('Digite um número para a contagem progressiva');
let contador = 0;

while (contador <= numeroMaximo) {
  console.log(contador);
  contador++;
}


let idade = 25;
let possuiCarteira = true;

// se idade é maior que 18 e possui carteira…
if (idade > 18 && possuiCarteira) {
  console.log("Pode dirigir!");
} else {
  console.log("Não pode dirigir.");
}


let temMaça = true;
let temBanana = false;

// se tem maça ou tem banama…
if (temMaça || temBanana) {
  console.log("Você tem frutas!");
} else {
  console.log("Não tem frutas.");
}
