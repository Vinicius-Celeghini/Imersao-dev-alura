let rodada;
let advinhador;

function iniciarJogo() {
  rodada = 1;
  advinhador = Math.floor(Math.random() * 3) + 1;
  document.getElementById("toggleButton").style.display = "none";
  document.getElementById("inputField").style.display = "block";
  document.getElementById("inputbutton").style.display = "block";
  document.getElementById("inputField").focus();
  document.getElementById("resultado").textContent = "";
}

function verificarEscolha() {
  let escolhaJogador = document.getElementById("inputField").value;
  let resultado = document.getElementById("resultado");

  if (escolhaJogador < 1 || escolhaJogador > 3) {
    resultado.textContent = "Por favor, escolha um número entre 1 e 3.";
    return;
  }

  if (escolhaJogador == advinhador) {
    resultado.textContent =
      "Ganhou! Você e o computador escolheram o mesmo número: " + advinhador;
    rodada++;
  } else {
    resultado.textContent =
      "Você perdeu! O computador escolheu o número: " + advinhador;
  }

  if (rodada > 4) {
    resultado.textContent += " Parabéns, você ganhou o jogo!";
  } else {
    advinhador = Math.floor(Math.random() * 3) + 1; // Gerar novo número
  }
}