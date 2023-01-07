const gameFlow = (function(){

    const checkWin = function() {
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
        ) gameFlow.gameOver();
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
        ) gameFlow.gameOver();
         //check diagonals for win
        else if (
            (gameBoard.board[0].innerHTML == gameBoard.board[4].innerHTML && gameBoard.board[0].innerHTML !== '') 
                && (gameBoard.board[4].innerHTML == gameBoard.board[8].innerHTML && gameBoard.board[4].innerHTML !== '')
            || 
            (gameBoard.board[2].innerHTML == gameBoard.board[4].innerHTML && gameBoard.board[2].innerHTML !== '')
                && (gameBoard.board[4].innerHTML == gameBoard.board[6].innerHTML && gameBoard.board[4].innerHTML !== '')
        ) gameFlow.gameOver();
        return;
    }
    const gameOver = function() {
        let outcome = 'Lose'
        
        let container = document.getElementById('container')
        
        while(container.lastChild) container.lastChild.remove();
        
        let message = document.createElement('h2');
        let button = document.createElement('button')

        container.style.backgroundColor = "var(--primary)";
        container.style.display = "block";
        container.style.textAlign = "center";
        container.style.height = "300px";


        message.innerHTML = 'You ' + outcome 
        button.innerHTML = '↻'
        button.setAttribute('onclick','gameBoard.restartGame()')

        container.appendChild(message);
        container.appendChild(button);

    }

    return {
        checkWin,
        gameOver    
    }

})()

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
        
        location.reload()
    
    }
    return {
        board,
        init,
        restartGame,
    };
})();

gameBoard.init();



