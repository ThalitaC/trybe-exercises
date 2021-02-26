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

//exercicio 5
let angle1 = -50;
let angle2 = 50;
let angle3 = 50;

let positiveAngle = angle1 > 0 && angle2 > 0 && angle3 > 0;

if (positiveAngle){
  if ((angle1 + angle2 + angle3) === 180) {
    console.log(true);
  } else if ((angle1 + angle2 + angle3) != 180) {
    console.log(false)
  }
} else {
  console.log("erro: todos os angulos precisam ser numeros positivos")
}

