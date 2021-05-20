let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
// for (let index = 0; index < numbers.length; index += 1){
//   console.log (numbers[index])
// };

// 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// let soma = 0;
// for (let index = 0; index < numbers.length; index += 1){
//   soma += numbers[index];
// };
// console.log(soma);

//3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// let numerador = 0;
// for (let index = 0; index < numbers.length; index += 1){
//   numerador += numbers[index];
// };
// console.log(numerador/numbers.length);

//4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
// let numerador = 0;
// for (let index = 0; index < numbers.length; index += 1){
//   numerador += numbers[index];
// };
// let media = numerador/numbers.length;
// if (media > 20) {
//   console.log("valor maior que 20")
// } else {
//   console.log("valor menor ou igual a 20")
// }

//5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;
// let maiorNumero = numbers[0];
// for (let index = 0; index < numbers.length; index += 1){
//   if (numbers[index] > maiorNumero){
//     maiorNumero = numbers[index];
//   }
// }
// console.log(maiorNumero);

//6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// let impares = 0;
// for (let index = 0; index < numbers.length; index += 1){
//   if (numbers[index] % 2 > 0){
//     impares += 1;
//   }
// }
// console.log(impares);

//7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;
// let menorNumero = numbers[0];
// for (let index = 1; index < numbers.length; index += 1){
//   if (numbers[index] < menorNumero){
//     menorNumero = numbers[index];
//   }
// }
// console.log(menorNumero);

