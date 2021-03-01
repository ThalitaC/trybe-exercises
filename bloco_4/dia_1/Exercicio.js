// //exercicio1
// let a = 5;
// let b = 10;

// let soma = a  + b;
// let menos = a - b;
// let mult = a * b;
// let divide = b / a;
// let resto = b %a;

// //exercicio 2
// let c = 25;
// let d = 10;

// if (c > d) {
//   console.log("'c' é maior que 'd");
// } else {
//   console.log("'d é maior que 'c")
// }

// //exercicio 3
// let num1 = 25;
// let num2 = 35;
// let num3 = 50;

// if (num1 > num2 && num1 >num3) {
//   console.log("o maior número é " + num1);
// } else if (num2 > num1 && num2 > num3) {
//   console.log("o maior número é " + num2);
// } else {
//   console.log("o maior número é " + num3);
// }

// //exercicio 4
// let number = 0;

// if (number > 0) {
//   console.log("positive");
// } else if (number < 0) {
//   console.log ("negative");
// } else {
//   console.log ("zero")
// }

// //exercicio 5
// let angle1 = -50;
// let angle2 = 50;
// let angle3 = 50;

// let positiveAngle = angle1 > 0 && angle2 > 0 && angle3 > 0;

// if (positiveAngle){
//   if ((angle1 + angle2 + angle3) === 180) {
//     console.log(true);
//   } else if ((angle1 + angle2 + angle3) != 180) {
//     console.log(false)
//   }
// } else {
//   console.log("erro: todos os angulos precisam ser numeros positivos")
// }

// //exercicio 6
// let chessPiece = "bispo";

// switch (chessPiece.toLowerCase()) {
//   case "rei":
//     console.log("Rei: Qualquer direção, uma casa por vez");
//     break;
//   case "dama":
//     console.log("Dama: Qualquer direção, quantas casas quiser, desde que estejam livres");
//     break;
//   case "torre":
//     console.log("Torre: Linha reta na vertical ou horizintal, quantas casas quiser");
//     break;
// case "bispo":
//     console.log("Bispo: Na diagonal, quantas casas quiser");
//     break;
// case "cavalo":
//     console.log("Cavalo: Em L");
//     break;
// case "peão":
//     console.log("Peão: Uma casa para a frente, no primeiro movimento pode andar duas");
//     break;
// default:
//     console.log("Erro: a peça informada não possui um nome válido");
//     break;
// }

// //exercicio 7
// let nota = 101;

// if (nota < 0 || nota > 100) {
//   console.log("O valor da nota precisa ser um inteiro entre 0 e 100");
// } else if (nota >= 90) {
//   console.log("A");
// } else if (nota >= 80){
//   console.log("B");
// } else if (nota >= 70){
//   console.log("C");
// } else if (nota >= 60){
//   console.log("D");
// } else if (nota >= 50){
//   console.log("E");
// } else if (nota >= 40){
//   console.log("F");
// }

// //exercicio 8
// let num1 = 1;
// let num2 = 3;
// let num3 = 5;

// let par = false

// if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
//   par = true
// } 
// console.log(par);

// //exercicio 9
// let num1 = 2;
// let num2 = 4;
// let num3 = 6;

// let impar = false

// if (num1 % 2 != 0 || num2 % 2 != 0 || num3 % 2 != 0){
//   impar = true
// } 
// console.log(impar);

// //exercicio 10
// let custo = 1;
// let valorVenda = 2;

// let custoTotal = custo * 1.2

// let lucro = (valorVenda - custoTotal) * 1000;

// if (custo >= 0 & valorVenda >= 0) {
//   console.log("O lucro é de: R$" + lucro);
// } else {
//   console.log("Erro: os valores devem ser positivos")
// }

//exercicio 11
let salarioBruto = 3500.00;

let aliquotaINSS;

if (salarioBruto <= 1556.94) {
  aliquotaINSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  aliquotaINSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  aliquotaINSS = salarioBruto * 0.11;
} else {
  aliquotaINSS = 570.88;
}

let salarioBase = salarioBruto - aliquotaINSS;

let aliquotaIR;

if (salarioBase <= 1903.98) {
  aliquotaIR = 0
} else if (salarioBase <= 2826.65) {
  aliquotaIR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
  aliquotaIR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
  aliquotaIR = (salarioBase * 0.225) - 636.13;
} else {
  aliquotaIR = (salarioBase * 0.275) - 869.36;
}

let salarioLiquido = salarioBase - aliquotaIR;

console.log(salarioLiquido);