// let a = 5;
// let b = 2;
// let c = 1;

// Adição
// console.log(+a+b)

// Subtração
// console.log(a-b);

// Multiplicação
// console.log(a*b);

// Divisão
// console.log(a/b);

// Módulo
// console.log(a%b)

// Retorna o maior número
// if (a > b){
//   console.log(a)
// } else {
//   console.log(b)
// }

// Compara três números
// if (a>b && a>c){
//   console.log(a)
// }
// else if (b>a && b>c){
//   console.log(b)
// } else {
//   console.log(c)
// }

// Verifica se os ângulos correspondem a um triângulo
// let agl_um = 30;
// let agl_dois = 75;
// let agl_tres = 75;
// if (agl_um < 1 || agl_dois < 1 || agl_tres < 1) {
//   console.log("Erro, um ângulo é inválido")
// } else {
// console.log (Boolean (agl_um + agl_dois + agl_tres == 180));}

// Retorna os movimentos das peças de xadrez
// var piece = "Pawn".toLowerCase();
// var move;
// switch (piece) {
//   case "rook":
//     move = "A rook moves any number of vacant squares forwards, backwards, left, or right in a straight line. It also takes part, along with the king, in a special move called castling.";
//     break;
//   case "bishop":
//     move = "A bishop moves any number of vacant squares diagonally in a straight line. Consequently, a bishop stays on squares of the same color throughout a game. The two bishops each player starts with move on squares of opposite colors.";
//     break;
//   case "queen":
//     move = "The queen moves any number of vacant squares in any direction: forwards, backwards, left, right, or diagonally, in a straight line.";
//     break;
//   case "king":
//     move = "The king moves exactly one vacant square in any direction: forwards, backwards, left, right, or diagonally; however, it cannot move to a square that is under attack by an opponent, nor can a player make a move with another piece if it will leave the king in check. It also has a special move called castling, in which the king moves two squares towards one of its own rooks and in the same move, the rook jumps over the king to land on the square on the king's other side. Castling may only be performed if the king and rook involved have never previously been moved in the game, if the king is not in check, if the king would not travel through or into check, and if there are no pieces between the rook and the king.";
//     break;
//   case "knight":
//     move = "A knight moves on an extended diagonal from one corner of any two-by-three rectangle of squares to the farthest opposite corner. Consequently, the knight alternates its square color each time it moves. Other than the castling move described above where the rook jumps over the king, the knight is the only piece permitted to routinely jump over any intervening piece(s) when moving.";
//     break;
//   case "pawn":
//     move = "A pawn moves forward exactly one square, or optionally, two squares when on its starting square, toward the opponent's side of the board. When there is an enemy piece one square diagonally ahead of a pawn, either left or right, then the pawn may capture that piece. A pawn can perform a special type of capture of an enemy pawn called en passant ('in passing'). If the pawn reaches a square on the back rank of the opponent, it promotes to the player's choice of a queen, rook, bishop, or knight (Just & Burg 2003:13–16).";
//     break;
//   default:
//     move = "There's no such piece";
//     break;
// }
// console.log(move);

//Converte uma nota em porcentagem para conceitos de A a F
// let porcentagem = 75;
// var nota;
// if (nota < 0 || nota > 100){
//   console.log("Nota inválida");
// } else if (porcentagem >= 90) {
//   nota = "A";
// } else if (porcentagem >= 80) {
//   nota = "B";
// } else if (porcentagem >= 70){
//   nota = "C";
// } else if (porcentagem >= 60){
//   nota = "D";
// } else if (porcentagem >= 50){
//   nota = "E";
// } else if (porcentagem < 50){
//   nota = "F";
// }
// console.log(nota);

//Checa se algum dos três números é par e retorna "true", caso contrário "false"
// let a = 7;
// let b = 5;
// let c = 10;
// if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0){
//   console.log("true");
// } else {
//   console.log("false");
// }

// Checa se algum dos três números é impar e retorna "true", caso contrário "false"
// let a = 2;
// let b = 8;
// let c = 10;
// if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0){
//   console.log("true");
// } else {
//   console.log("false");
// }

// Calcula o lucro de um produto que tem 20% de imposto sobre o valor de custo
// let custo = 1500;
// let venda = 2500;
// let custoTotal = custo*1.2;
// console.log(venda - custoTotal);

//Calcula o salário líquido após decontos de INSS e IR
let salario = 6570.88;

//Faz o desconto de INSS
if (salario < 1556.94) {
  salario *= 0.92
} else if (1556.94 < salario && salario <= 2594.92) {
  salario *= 0.91
} else if (2594.92 < salario && salario <= 5189.82) {
  salario *= 0.89
} else {
  salario -= 570.88
}

//Faz o desconto de IR
if (salario > 1903.98 && salario < 2826.66){
  salario *= 0.925
} else if (salario > 2826.65 && salario < 3751.06){
  salario *= 0.85
} else if (salario > 3751.05 && salario < 4664,69){
  salario *= 0.875
} else if (salario > 4664,68)


console.log(salario);