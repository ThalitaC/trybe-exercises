const newEmployees = () => {
    const employees = {
      id1: newEmployee('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
      id2: newEmployee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
      id3: newEmployee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
    }
    return employees;
  };

  const newEmployee = (nomeCompleto) => {
      const nameEmail = nomeCompleto.toLowerCase().split(' ').join('_');
      const email = `${nameEmail}@betrybe.com`
      return {nomeCompleto, email};
  }

  console.log(newEmployees(newEmployee));