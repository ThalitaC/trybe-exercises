let base = 5;
let item = "*";
let linha = "";
let posicao = base;

for (index = 0; index < base; index += 1) {
  for (let coluna = 0; coluna <= base; coluna += 1){
    if (coluna < posicao){
      linha = linha + " ";
    } else {
      linha = linha + item;
    }
  }
  console.log(linha);
  linha = ""; 
  posicao -= 1; 
}