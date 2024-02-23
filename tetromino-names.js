const TETROMINO_NAMES = [
    'O-block',
    'L-block',
    'J-block',
    'I-block',
    'S-block',
    'T-block',
    'Z-block'
];

const TETROMINOES = {
    'O-block': [
        [1, 1],
        [1, 1]
    ], 
    'L-block': [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0]
    ],
    'J-block': [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0]
    ],
    'I-block': [
        [0, 1, 0, 0], 
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0]
    ],
    'S-block': [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0]
    ],
    'T-block': [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0]
    ],
    'Z-block': [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]
    ]
}

export default {
    TETROMINO_NAMES,
    TETROMINOES,
}

