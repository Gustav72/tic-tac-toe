


const gameFlow = (function(){
    let turn = function() {
        
    };
    const checkWin = function() {

        console.log('fffffffffffffff')
        //check rows for win
        if (
            (gameBoard.board[0].innerHTML == gameBoard.board[1].innerHTML && gameBoard.board[0].innerHTML !== '') 
                && (gameBoard.board[1].innerHTML == gameBoard.board[2].innerHTML && gameBoard.board[2].innerHTML !== '')
            || 
            (gameBoard.board[3].innerHTML == gameBoard.board[4].innerHTML && gameBoard.board[3].innerHTML !== '')
                && (gameBoard.board[4].innerHTML == gameBoard.board[5].innerHTML && gameBoard.board[5].innerHTML !== '')
            || 
            (gameBoard.board[6].innerHTML == gameBoard.board[7].innerHTML && gameBoard.board[6].innerHTML !== '')
                && (gameBoard.board[7].innerHTML == gameBoard.board[8].innerHTML && gameBoard.board[8].innerHTML !== '')
        ) console.log('row win');
        //check columns for win
        else if (
            (gameBoard.board[0].innerHTML == gameBoard.board[3].innerHTML && gameBoard.board[0].innerHTML !== '') 
                && (gameBoard.board[3].innerHTML == gameBoard.board[6].innerHTML && gameBoard.board[3].innerHTML !== '')
            || 
            (gameBoard.board[1].innerHTML == gameBoard.board[4].innerHTML && gameBoard.board[1].innerHTML !== '')
                && (gameBoard.board[4].innerHTML == gameBoard.board[7].innerHTML && gameBoard.board[4].innerHTML !== '')
            || 
            (gameBoard.board[2].innerHTML == gameBoard.board[5].innerHTML && gameBoard.board[2].innerHTML !== '')
                && (gameBoard.board[5].innerHTML == gameBoard.board[8].innerHTML && gameBoard.board[5].innerHTML !== '')
        ) console.log('column win');
         //check diagonals for win
        else if (
            (gameBoard.board[0].innerHTML == gameBoard.board[4].innerHTML && gameBoard.board[0].innerHTML !== '') 
                && (gameBoard.board[4].innerHTML == gameBoard.board[8].innerHTML && gameBoard.board[4].innerHTML !== '')
            || 
            (gameBoard.board[2].innerHTML == gameBoard.board[4].innerHTML && gameBoard.board[2].innerHTML !== '')
                && (gameBoard.board[4].innerHTML == gameBoard.board[6].innerHTML && gameBoard.board[4].innerHTML !== '')
        ) console.log('diagonal win');
        return;
        
    }
    const gameOver = function() {

    }
    const checkSpace = function() {

    }

    return {
        checkWin
    }

})()

const player = (function(){

})();

const AI = (function(){

})();

const gameBoard = (function(){
    let board = [];
    const init = function() {
        cacheDOM();
        bindEvents();
    }
    const cacheDOM = function() {
        let container = document.getElementById('container');
        for(let i = 0; i < 9; i++ ) {
             board.push(document.getElementById(i));
        }
        console.log(board);
        return board;
    }
    const bindEvents = function() {
        for(let i = 0; i < 9; i++ ) {
            board[i].addEventListener("click", function() {
                document.getElementById(i).innerHTML = 'x'
                
            })
        } 
        console.log(gameFlow.checkWin())
        return board;
        
    }
    const restartGame = function() {
        for(let i = 0; i < 9; i++ ) {
        document.getElementById(i).innerHTML = '';
    }
    }
    return {
        board,
        init,
        restartGame,
    };
})();

gameBoard.init();



