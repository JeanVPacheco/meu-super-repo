// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   recorrente: 'Sim'
// };

// let infoDois = {
//   personagem: 'Tio Patinhas',
//   origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//   nota: 'O último MacPatinhas',
//   recorrente: 'Sim'
// };

// let personagens = [info, infoDois];

// for (let index in info && infoDois) {
//   console.log(info[index] + ' e ' + infoDois[index])
// }

let palavra = 'vinho';

function palindromo (palavra) {
  let compare = 'a';
  for (let index = palavra.length; index >= 0; index -= 1){
    compare += palavra[index];
  }
  console.log(compare);
}

