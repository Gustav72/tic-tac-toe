const gameBoard = (function(){
    let board = [];
    const init = function() {
        cacheDOM(board);
        bindEvents(board);
    }
    const cacheDOM = function(board) {
        let container = document.getElementById('container');
        for(let i = 0; i < 9; i++ ) {
             board.push(document.getElementById(i));
        }
        console.log(board);
    }
    const bindEvents = function() {
        for(let i = 0; i < 9; i++ ) {
            board[i].addEventListener("click", function() {
                document.getElementById(i).innerHTML = 'x'
                console.log(gameFlow.checkWin())
            })

        } 
        
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




const gameFlow = (function(board){
    let turn = function() {
        
    };
    const checkWin = function() {

        console.log('in checkWin')
        //check rows for win
        if (
            board[0].value == board[1].innerHTML && board[1].innerHTML == board[2].innerHTML  
            || board[3].innerHTML == board[4].innerHTML && board[4].innerHTML == board[5].innerHTML
            || board[6].innerHTML == board[7].innerHTML && board[7].innerHTML == board[8].innerHTML
        ) console.log('it worked');
        //check columns for win
        else if (
            board[0].innerHTML == board[3].innerHTML && board[3].innerHTML == board[6].innerHTML  
            || board[1].innerHTML == board[4].innerHTML && board[4].innerHTML == board[7].innerHTML
            || board[2].innerHTML == board[5].innerHTML && board[5].innerHTML == board[8].innerHTML
        ) console.log('it worked');
        else if (
            board[0].innerHTML == board[3].innerHTML && board[3].innerHTML == board[8].innerHTML  
            || board[2].innerHTML == board[4].innerHTML && board[4].innerHTML == board[6].innerHTML
        ) console.log('it worked');
        //check diagonals for win
        
    }
    const gameOver = function() {

    }
    const checkSpace = function() {

    }

    return {
        checkWin
    }

})();







const player = function(){

}();

const AI = function(){

}();

let i = {
    
}



