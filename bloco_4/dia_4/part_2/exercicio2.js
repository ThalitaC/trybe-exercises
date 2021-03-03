function maior(num) {
let maiorIndex = 0;

  for (let index in num) {
    if (num[maiorIndex] < num[index]){
      maiorIndex = index;
    }    
  }
  return maiorIndex;
}

console.log(maior([1, 2, 0, 10, 8, 20, 5]));