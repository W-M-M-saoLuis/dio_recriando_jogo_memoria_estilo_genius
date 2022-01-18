// Ordem do jogo
let order = [];
let clickedOrder = [];
let score = 0;

const blue_bt = document.querySelector('.blue');
const red_bt = document.querySelector('.red');
const green_bt = document.querySelector('.green');
const yellow_bt = document.querySelector('.yellow');

// gerndo ordem aleatória
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        setTimeout(() => {lightColor(elementColor, Number(i) + 1);}, 750); 
    }
}

let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    });
    setTimeout(() => {
        element.classList.remove('selected');
    }, number - 250);
} 

// checa os botões clicados
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!)`);
        nextLevel();
    }
}

// clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250)

}

// função retorno de cor
/* 0 - verde
   1 - vermelho
   2 - amarelo
   3 - azul */

let createColorElement = (color) => {
    if(color == 0) { return green_bt; }
    else if(color == 1) { return red_bt; }
    else if(color == 2) { return yellow_bt; }
    else if(color == 3) { return blue_bt; }
}

// função para próximo nível
let nextLevel = () => {
    score++;
    shuffleOrder();
}

// função para perda de jogo
let gameOver = () => {
    alert(`Pontuação: ${score}\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo!`);
    order = [];
    clickedOrder = [];

    playGame();
}

// Iniciar jogo
let playGame = () => {
    alert('Bem vindo ao Gênius! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}

// Evento de cores
green_bt.onclick = () => click(0);
red_bt.onclick = () => click(1);
yellow_bt.onclick = () => click(2);
blue_bt.onclick = () => click(3);

playGame();