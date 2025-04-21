personagens = ["", "", ""];
viloes = ["", "", ""];

forcaP = 0;
forcaV = 0;

alert("O array é : " + personagens);

for (let i = 0; i < 3; i++) {
  escolhaPersonagem = prompt("Digite o nome do seu personagem: " + (i + 1));
  personagens[i] = escolhaPersonagem;
  forcaP += Math.floor(Math.random() * 10) + 1;
}

console.log("inicio viloes o array é : " + viloes);
for (let i = 0; i < 3; i++) {
  indiceAleatorio = Math.floor(Math.random() * 5);
  viloesPossiveis = [
    "Nazare",
    "Odete",
    "Flora",
    "Carminha",
    "Laura",
    "Bia Falcão"
  ];
  viloes[i] = viloesPossiveis[indiceAleatorio];
  forcaV += Math.floor(Math.random() * 10) + 1;
}

if (forcaP > forcaV) {
  alert("Parabens você ganhou. Sua força é: " + forcaP);
} else if (forcaP < forcaV) {
    alert("Infelizmente é Game Over. A força inimiga é: "+ forcaV); 
} else {
    alert("Empate suas forças são iguais, Sua força é: " + forcaP + " Força do vilão: " + forcaV);
}

console.log("O array é : " + personagens);
console.log("O array é : " + viloes);
console.log("Força amiga : " + forcaP);
console.log("Força Inimiga : "+ forcaV);
