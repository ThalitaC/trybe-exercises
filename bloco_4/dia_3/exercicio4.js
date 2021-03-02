let base = 9;
let item = "*";
let linha = "";

let meio = (base + 1) / 2;
let direita = meio;
let esquerda = meio;

for (index = 0; index <= meio; index += 1) {  
  for (let coluna = 1; coluna <= base; coluna += 1) {
    if (coluna > direita && coluna < esquerda) {
      linha = linha + item;
    } else {
      linha = linha + " ";
    }
  }
  console.log(linha); 
  direita -= 1; 
  esquerda += 1;  
  linha = "";
}


