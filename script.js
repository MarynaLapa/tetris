import getRandomInt from './js/getRandomInt.js';
import shape from './js/tetromino-names.js'

console.log('shape.', shape.TETROMINOES)
const COLUMNS = 10;
const ROWS = 20; 
    
function convertPositionToIndex(row, column) {
    return row * COLUMNS + column;
}

let playfield;
let tetromino

function generetePlayField() {
    for (let i = 0; i < ROWS * COLUMNS; i += 1){
        const div = document.createElement('div');
        document.querySelector('.grid').append(div);
    };

    playfield = new Array(ROWS).fill()
        .map(() => new Array(COLUMNS).fill(0))
};
generetePlayField()

function genereteTetromino() {
    
    const name = shape.TETROMINO_NAMES[getRandomInt(6)];
    const matrix = shape.TETROMINOES[name];
    const column = Math.floor((COLUMNS - matrix.length) / 2);

    tetromino = {
        name,
        matrix,
        row: 0,
        column,
    }
}
genereteTetromino();

const cells = document.querySelectorAll('.grid div');

function drawPlayField() {
   
    for (let row = 0; row < ROWS; row += 1){
        
        for (let column = 0; column < COLUMNS; column += 1){
            if (playfield[row][column] == 0) continue;
            const name = playfield[row][column];

            const cellIndex = convertPositionToIndex(row, column);

            cells[cellIndex].classList.add(name)
        }
    }
}

function drawTetromino() {

    const name = tetromino.name;
    const tetrominoMatrixSize = tetromino.matrix.length;

    for (let row = 0; row < tetrominoMatrixSize; row += 1){
        
        for (let column = 0; column < tetrominoMatrixSize; column += 1){
            if (!tetromino.matrix[row][column]) continue;
            const cellIndex = convertPositionToIndex(
                tetromino.row + row,
                tetromino.column + column
            );
             cells[cellIndex].classList.add(name);
        }
    }
};
drawTetromino();
drawPlayField();

function draw() {
    cells.forEach(cell => cell.removeAttribute('class')); 
    drawPlayField();
    drawTetromino();
};

document.addEventListener("keydown", onKeyDown);

function onKeyDown(e) {
    switch (e.key) {
        case "ArrowDown":
            moveTetrominoDown();
            break;
        
        case "ArrowLeft":
            moveTetrominoLeft();
            break;
        
        case "ArrowRight":
            moveTetrominoRight()
            break;
    }

    draw();
}

function moveTetrominoDown() {
    tetromino.row += 1;
};

function moveTetrominoLeft() {
    tetromino.column -= 1;
};

function moveTetrominoRight() {
    tetromino.column += 1;
}
