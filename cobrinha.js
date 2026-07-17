const canvas = document.getElementById("snakeCanvas");
const ctx = canvas.getContext("2d");
const scoreElement = document.getElementById("score");

const box = 20; // Tamanho de cada quadradinho do jogo
let snake;
let direction;
let food;
let score;
let gameInterval;

// Escutar as setas do teclado para mudar a direção
document.addEventListener("keydown", changeDirection);

function startGame() {
    // Inicializa/Reseta o jogo
    snake = [{ x: 9 * box, y: 9 * box }];
    direction = "RIGHT";
    score = 0;
    scoreElement.innerText = "Pontos: " + score;
    
    generateFood();
    
    // Limpa qualquer intervalo anterior antes de iniciar um novo
    clearInterval(gameInterval);
    // Controla a velocidade do jogo (100 milissegundos por quadro)
    gameInterval = setInterval(draw, 100);
}

function generateFood() {
    food = {
        x: Math.floor(Math.random() * 20) * box,
        y: Math.floor(Math.random() * 20) * box
    };
}

function changeDirection(event) {
    const key = event.keyCode;
    // Evita que a cobra volte diretamente na direção oposta
    if (key === 37 && direction !== "RIGHT") direction = "LEFT";
    else if (key === 38 && direction !== "DOWN") direction = "UP";
    else if (key === 39 && direction !== "LEFT") direction = "RIGHT";
    else if (key === 40 && direction !== "UP") direction = "DOWN";
}

function checkCollision(head, array) {
    for (let i = 0; i < array.length; i++) {
        if (head.x === array[i].x && head.y === array[i].y) {
            return true;
        }
    }
    return false;
}

function draw() {
    // Limpa o canvas a cada frame
    ctx.fillStyle = "#11121a";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Desenha a cobrinha
    for (let i = 0; i < snake.length; i++) {
        // Cabeça verde claro, corpo verde escuro
        ctx.fillStyle = i === 0 ? "#2ed573" : "#26af5a";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeStyle = "#11121a";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    // Desenha a comida (maçã vermelha)
    ctx.fillStyle = "#ff4757";
    ctx.beginPath();
    ctx.arc(food.x + box/2, food.y + box/2, box/2 - 2, 0, 2 * Math.PI);
    ctx.fill();

    // Posição atual da cabeça
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // Calcula a próxima posição com base na direção
    if (direction === "LEFT") snakeX -= box;
    if (direction === "UP") snakeY -= box;
    if (direction === "RIGHT") snakeX += box;
    if (direction === "DOWN") snakeY += box;

    // Se a cobra comer a comida
    if (snakeX === food.x && snakeY === food.y) {
        score++;
        scoreElement.innerText = "Pontos: " + score;
        generateFood();
    } else {
        // Remove a cauda (se não comeu, ela apenas se moveu)
        snake.pop();
    }

    // Nova cabeça da cobra
    const newHead = { x: snakeX, y: snakeY };

    // Fim de jogo: colisão com a parede ou consigo mesma
    if (
        snakeX < 0 || 
        snakeX >= canvas.width || 
        snakeY < 0 || 
        snakeY >= canvas.height || 
        checkCollision(newHead, snake)
    ) {
        clearInterval(gameInterval);
        ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = "#ff4757";
        ctx.font = "30px Arial";
        ctx.fillText("GAME OVER", canvas.width/2 - 90, canvas.height/2);
        return;
    }

    // Adiciona a nova cabeça ao início do corpo
    snake.unshift(newHead);
}

function changeDirection(event) {
    const key = event.keyCode;
    
    // Lista com os códigos das teclas que queremos "bloquear" (Setas do teclado e Espaço)
    const chavesBloqueadas = [32, 37, 38, 39, 40];
    
    // Se a tecla pressionada for uma das setas ou espaço, impede a página de rolar
    if (chavesBloqueadas.includes(key)) {
        event.preventDefault();
    }

    // Lógica original de movimentação da cobrinha (evitando que ela volte na direção oposta)
    if (key === 37 && direction !== "RIGHT") direction = "LEFT";
    else if (key === 38 && direction !== "DOWN") direction = "UP";
    else if (key === 39 && direction !== "LEFT") direction = "RIGHT";
    else if (key === 40 && direction !== "UP") direction = "DOWN";
}