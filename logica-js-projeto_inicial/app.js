alert('Seja bem vindo ao jogo do número secreto!');
alert('O objetivo do jogo é identificar o número secreto com ajuda das dicas do robozinho. Vamos lá?');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log (numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute não for igual ao numero secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
        //se o chute for = ao numero secreto
    if (chute == numeroSecreto) {
        break
        } else {
                if (chute > numeroSecreto) {
                    alert (`O número secreto é menor que ${chute}`);
                } else {
                    alert (`O número secreto é maior que ${chute}`);
                }
            //Sempre que o jogador chutar um número e não acertar o número secreto, a variável "tentativas" é incrementada em 1. (tentativas = tentativas + 1;)
            tentativas++;
        }
}

let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
alert (`Isso aê! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}!`);

// if (tentativas > 1) {
//     alert (`Isso aê! Você descobriu o número secreto ${numeroSecreto} com ${tentativas}tentativas!`);
// } else {
//     alert (`Isso aê! Você descobriu o número secreto ${numeroSecreto} com ${tentativas}tentativa!`);
// }


