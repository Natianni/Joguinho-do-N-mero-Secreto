//saber se é final de semana ou não
let resposta = prompt ('Olá! Que dia da semana é hoje?');
let finaldeSemana = ('Domingo','Sábado');

if (resposta == finaldeSemana) {
    alert ('Tenha um bom final de semana 🌞');
} else {
    alert ('Tenha uma boa semana 📖')
}

// ver se o número é positivo ou negativo
let numero =prompt ('Digite um número');

if (numero > 0) {
    alert ('Esse número é positivo 👍🏻');
} else {
    alert ('Esse número é negativo');
} if (numero = 0) {
    alert ('Esse número é neutro');
}

//jogo de pontos
alert ('Bem vindo ao Joguinho! Se sua pontuação for maior ou igual a 100, você ganha. Vamos começar?')
let pergunta =prompt ('Qual é o nome do presidente do Brasil?')

if (pergunta == 'Lula') {
    alert ('Parabéns! Você ganhou 50 pontos!');
} else {
    alert ('Você errou, ganhou 0 pontos');
}

let pergunta2 =prompt ('Segunda pergunta, quanto é 25 + 18?');

if (pergunta2 == 43) {
    alert ('Parabéns! Você ganhou 75 pontos!');
} else {
    alert ('Você errou, ganhou 0 pontos');
}

let pontos =prompt ('Agora some seus pontos, e coloque na caixa aqui em baixo para saber se você ganhou o Joguinho!👇🏻 (seja honesto)')
let ganhou = 100

if (pontos >= ganhou) {
    alert ('Parabéns! Você ganhou o joguinho 🤩')
} else {
    alert ('Poxa! Você perdeu o joguinho 😭 Tente novamente para ganhar.')
}

//saber o nome do usuario
let nome = prompt ('Oie! Qual o seu nome?')

alert (`Seja bem vindo(a) ${nome}!`)