let dinheiro = parseFloat(prompt("Digite a quantidade inicial de dinheiro:"));

while (true) {
    // Exibe o saldo atual
    alert(`Você tem R$ ${dinheiro.toFixed(2)}`);
    let menu = `
Escolha uma opção:
1. Adicionar dinheiro
2. Remover dinheiro
3. Sair`;

    const opcao = parseInt(prompt(menu));

    switch (opcao) {
        case 1:
            // Adicionar dinheiro
            let adicionar = parseFloat(prompt("Digite a quantidade a adicionar:"));
            if (isNaN(adicionar) || adicionar <= 0) {
                alert("Valor inválido. Tente novamente.");
            } else {
                dinheiro += adicionar;
            }
            break;
        case 2:
            // Remover dinheiro
            let remover = parseFloat(prompt("Digite a quantidade a remover:"));
            if (isNaN(remover) || remover <= 0) {
                alert("Valor inválido. Tente novamente.");
            } else if (remover > dinheiro) {
                alert("Você não tem dinheiro suficiente.");
            } else {
                dinheiro -= remover;
            }
            break;
        case 3:
            // Sair
            alert("Saindo...");
            return;  // Finaliza o loop e sai do programa
        default:
            alert("Opção inválida. Tente novamente.");
    }
}
