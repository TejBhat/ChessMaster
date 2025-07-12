const socket = io();// by this line real time connection to the server

// socket.emit('send')
// socket.on('send all', () => {
//     console.log('Received message from server');
//     // Here you can handle the message received from the server
//     // For example, you can update the UI or perform some action
// });
const chess = new Chess();
const boardElement = document.querySelector('.chessboard');

let draggedPiece = null;
let sourceSquare = null;
let playerRole = null;

const renderBoard = () => {
    const board=chess.board();
    boardElement.innerHTML = '';
    board.forEach((row, rowIndex) => {
    row.forEach((square, squareindex) => {
       const squareElement =  document.createElement('div');
       squareElement.classList.add('square',(rowIndex + squareindex) % 2 === 0 ? 'light' : 'dark');
       squareElement.dataset.row=rowIndex;
         squareElement.dataset.col=squareindex;
         if(square){
            const pieceElement = document.createElement('div');
            pieceElement.classList.add('piece',square.color === 'w' ? 'white' : 'black');
            pieceElement.innerHTML = getPieceUnicode(square);
            pieceElement.draggable=playerRole === square.color;
            pieceElement.addEventListener('dragstart', (e) => {
                if(pieceElement.draggable){
                    draggedPiece = pieceElement;
                    sourceSquare = {row: rowIndex, col: squareindex};
                    e.dataTransfer.setData('text/plain', '');
                }
         });

         pieceElement.addEventListener('dragend', (e) => {
            draggedPiece = null;
            sourceSquare = null;
         });
         squareElement.appendChild(pieceElement);
        }
        squareElement.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        squareElement.addEventListener('drop',(e)=>{

            e.preventDefault();
            if(draggedPiece){
                const targetSource ={
                    row:parseInt(squareElement.dataset.row),
                    col:parseInt(squareElement.dataset.col)
                };
                handleMove(sourceSquare, targetSource);
            }
        });
        boardElement.appendChild(squareElement);
    });
});

if(playerRole === 'b'){
    boardElement.classList.add('flipped');
}else{
    boardElement.classList.remove('flipped');
}
};

const handleMove = () => {
    const move={
        from:`${String.fromCharCode(97 + source.col)}${8 - source.row}`,
        to:`${String.fromCharCode(97 + target.col)}${8 - source.row}`,
        promotion: 'q'
    };
    socket.emit('move', move);
};

const getPieceUnicode = (piece) => {
    const unicodePieces = {
        'wk': '♔', // White King
        'wq': '♕', // White Queen
        'wr': '♖', // White Rook
        'wb': '♗', // White Bishop
        'wn': '♘', // White Knight
        'wp': '♙', // White Pawn
        'bk': '♚', // Black King
        'bq': '♛', // Black Queen
        'br': '♜', // Black Rook
        'bb': '♝', // Black Bishop
        'bn': '♞', // Black Knight
        'bp': '♟'  // Black Pawn
    };
    
    return unicodePieces[piece.color + piece.type] || '';
};

socket.on('playerRole', (role) => {
    playerRole = role;
    renderBoard();
});

socket.on('spectatorRole', () => {
    playerRole = null;
    renderBoard();
});

socket.on('boardState', (fen) => {
    chess.load(fen);
    renderBoard();
});
socket.on('move', (move) => {
    chess.move(move);
    renderBoard();
});
renderBoard();