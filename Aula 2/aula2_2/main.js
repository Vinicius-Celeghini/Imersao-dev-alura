function jogar() {
  let idade = parseInt(prompt("Qual sua idade: "));

  if (idade >= 18) {
    escolhaJogador = parseInt(prompt("Digite 1 - Pedra, 2 - Papel, 3 - Tessoura"));
    escolhaComputador = Math.floor(Math.random() * 3) + 1;

    switch (escolhaJogador) {
      case 1: // Jogador escolheu Pedra
        switch (escolhaComputador) {
          case 1:
            alert("Empate! Ambos escolheram pedra.");
            break;
          case 2:
            alert("Computador venceu, escolheu papel.");
            break;
          case 3:
            alert("Jogador venceu, computador escolheu tesoura.");
            break;
        }
        break;

      case 2: // Jogador escolheu Papel
        switch (escolhaComputador) {
          case 1:
            alert("Jogador venceu, computador escolheu pedra.");
            break;
          case 2:
            alert("Empate! Ambos escolheram papel.");
            break;
          case 3:
            alert("Computador venceu, escolheu tesoura.");
            break;
        }
        break;

      case 3: // Jogador escolheu Tesoura
        switch (escolhaComputador) {
          case 1:
            alert("Computador venceu, escolheu pedra.");
            break;
          case 2:
            alert("Jogador venceu, computador escolheu papel.");
            break;
          case 3:
            alert("Empate! Ambos escolheram tesoura.");
            break;
        }
        break;

      default:
        alert("Escolha inválida! Por favor, escolha 1 (Pedra), 2 (Papel) ou 3 (Tesoura).");
    }
  } else {
    alert("Bloqueado é menor de idade.");
  }
}