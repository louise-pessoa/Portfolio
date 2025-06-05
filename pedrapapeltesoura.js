function jogar() {
    idade = prompt("Quantos anos você tem?");

    if(idade < 18) {
        alert("Você NÃO pode jogar!");
    }
    if(idade>=18){
        escolhaJogador = prompt("Digite 1 para pedra, 2 para papel ou 3 para tesoura: ")
        if(escolhaJogador != 1 && escolhaJogador != 2 && escolhaJogador != 3); {
            alert("Você digitou uma opção inválida! Reinicie o programa e tente novamente.")
        }

        escolhaComputador = Math.floor(Math.random() *3) +1

        if(escolhaJogador == escolhaComputador){
            alert("Empate!");
        }
        if(escolhaJogador == 1){
            if(escolhaComputador == 2){
                alert("O computador escolheu papel (contra pedra). Você perdeu :(");
            }
            if(escolhaComputador == 3){
                alert("Você escolheu pedra (contra tesoura) e venceu!");
            }
        }
        if(escolhaJogador == 2){
            if(escolhaComputador == 1){
                alert("Você escolheu papel (contra pedra) e venceu!");
            }
            if(escolhaComputador == 3){
                alert("O computador escolheu tesoura (contra papel). Você perdeu :(");
            }
        }
        if (escolhaJogador == 3){
            if(escolhaComputador == 1){
                alert("O computador escolheu pedra (contra tesoura). Você perdeu :(");
            }
            if(escolhaComputador == 2){
                alert("Você escolheu tesoura (contra papel) e venceu!");
            }
        }
    }
}