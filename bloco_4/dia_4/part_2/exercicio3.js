function menor(num) {
  let menorIndex = 0;
  
    for (let index in num) {
      if (num[menorIndex] > num[index]){
        menorIndex = index;
      }    
    }
    return menorIndex;
  }
  
  console.log(menor([1, 2, 0, 10, 8, -3]));