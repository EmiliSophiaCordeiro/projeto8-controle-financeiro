let balance = 'Digite a quantidade inicial de dinheiro disponível:'

  console.log("\nSeu saldo atual é R$" + balance.toFixed(2));
  console.log("Opções:");
  console.log("1. Adicionar dinheiro");
  console.log("2. Remover dinheiro");
  console.log("3. Sair");

  const option = 'Escolha uma opção (1, 2 ou 3):'

  switch (option) {
    case 1:
      const valueAdd = 'Digite a quantidade a ser adiciona:'
      balance += valueAdd;
      break;
    case 2:
      const valueRemove = 'Digite a quantidade a ser removida:'
      balance -= valueRemoves;
      break;
    case 3:
      console.log("Programa encerrado. Seu saldo final é R$" + balance.toFixed(2));
      return; 
    default:
      console.log("Opção inválida. Tente novamente.");
  }


