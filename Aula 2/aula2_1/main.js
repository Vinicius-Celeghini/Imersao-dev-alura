function jogar(){
    idade = prompt("Qual sua idade: ");
  
    if (idade >= 18) {
      escolhaJogador = prompt("Digite 1 - Pedra, 2 - Papel, 3 - Tessoura");
      escolhaComputador = Math.floor(Math.random() * 3) + 1;
  
      if (escolhaJogador == escolhaComputador) {
        alert("Empate");
      }
      if (escolhaJogador == 1) {
        if (escolhaComputador == 2) {
          alert("Computador venceu, escolheu papel");
        }
        if (escolhaComputador == 3) {
          alert("Jogador venceu, computador escolheu tesoura");
        }
      }
  
      if (escolhaJogador == 2) {
        if (escolhaComputador == 1) {
          alert("Jogador venceu, computador escolheu pedra");
        }
        if (escolhaComputador == 3) {
          alert("Computador venceu, escolheu tesoura");
        }
      }
  
      if (escolhaJogador == 3) {
        if (escolhaComputador == 1) {
          alert("Jogador venceu, computador escolheu pedra");
        }
        if (escolhaComputador == 2) {
          alert("Computador venceu, escolheu papel");
        }
      }
  
      console.log(escolhaComputador);
    } else {
      alert("Bloqueado é menor de idade.");
    }
  }