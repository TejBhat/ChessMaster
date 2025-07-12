const express = require('express');
const socket = require('socket.io');
const http = require('http');
const {Chess} = require("chess.js");
const path = require('path');
const { title } = require('process');

const app = express();

const server = http.createServer(app);
const io = socket(server);

const chess = new Chess();//given in chess documentation
let players = {};
let currentPlayer = 'w';

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res) => {
    res.render('index',{title: 'chess Master'});
});

io.on('connection', (uniquesocket) => {
    console.log('connected');

//Actual logic is from here
    if(!players.white){
        players.white = uniquesocket.id;
        uniquesocket.emit('playerRole', 'w');
    }
    else if(!players.black){
        players.black = uniquesocket.id;
        uniquesocket.emit('playerRole', 'b');
    }else{
        uniquesocket.emit('spectatorRole');
    }

    uniquesocket.on('disconnect', function(){
        if(uniquesocket.id === players.white){
            delete players.white;
        }else if(uniquesocket.id === players.black){
            delete players.black;
        }
    });

    uniquesocket.on('move',(move)=>{
        //if we dont put "try and catch" here whole server will crash if there is an invalid move
        try{
            if(chess.turn()=== 'w' && uniquesocket.id !== players.white) return;
            if(chess.turn()=== 'b' && uniquesocket.id !== players.black) return;

            const result = chess.move(move);
            if(result){
                currentPlayer=chess.turn();
                io.emit('move', move);
                io.emit('boardState', chess.fen());//fen notation of the board state
            }
            else{
                console.log('Invalid move:', move);
                uniquesocket.emit('invalidMove', move);
            }
        }
        catch(err){
            console.log(err);
            console.log('invalid move:', move);
            uniquesocket.emit('invalidMove', move);
        }
    });
});//callback function to handle connection
    
 

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});