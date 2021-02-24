let nota = 50;

if (nota > 80) {
  console.log("Parabéns, você foi aprovada(o)!");
} else if (nota > 60 && nota < 80) {
  console.log("Você está na nossa lista de espera");
} else {
  console.log("Você foi reprovada(o)");
}

let estado = "aprovada"

switch(estado) {
  case "aprovada":
    console.log("Parabéns, você foi aprovada(o)!");
    break;
  
  case "lista":
    console.log("Você está na nossa lista de espera");
    break;

  case "reprovada":
    console.log("Você foi reprovada(o)");
    break;

  default:
    console.log("Não se aplica");
}