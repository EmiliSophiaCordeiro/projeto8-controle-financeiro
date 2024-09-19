let dinheiro = parseFloat(prompt("Digite a quantidade inicial de dinheiro:"));

while (true) {
    console.log(`Você tem R$ ${dinheiro}`);
    console.log("Escolha uma opção:");
    console.log("1. Adicionar dinheiro");
    console.log("2. Remover dinheiro");
    console.log("3. Sair");

    const opcao = parseInt(prompt("Digite o número da opção:"));

    switch (opcao) {
        case 1:
            const adicionar = parseFloat(prompt("Digite a quantidade a adicionar:"));
            dinheiro += adicionar;
            break;
        case 2:
            const remover = parseFloat(prompt("Digite a quantidade a remover:"));
            if (remover > dinheiro) {
                console.log("Você não tem dinheiro suficiente.");
            } else {
                dinheiro -= remover;
            }
            break;
        case 3:
            console.log("Saindo...");
            process.exit(); // Para encerrar o programa no Node.js
            break;
        default:
            console.log("Opção inválida.");
    }
}

