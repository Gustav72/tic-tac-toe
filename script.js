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
                if (document.getElementById(i).innerHTML === ''){
                document.getElementById(i).innerHTML = 'x'
            }
            gameFlow.robot()
            
            })
        } 
        gameFlow.checkWin()
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

const gameFlow = (function(){

    const gameOver = function(outcome) {
        
        let container = document.getElementById('bottom')
        
        while(container.lastChild) container.lastChild.remove();
        
        let message = document.createElement('h2');
        let button = document.createElement('button')

        container.style.textAlign = "center";
        container.style.fontSize = "3rem";
       
        message.innerHTML = outcome 
        button.innerHTML = '↻'
        button.setAttribute('onclick','gameBoard.restartGame()')

        container.appendChild(message);
        container.appendChild(button);
    }

    const robot = function() { 
        let num 
        console.log('hi mr robot')

        numGenerator()

        function numGenerator() {

        num = Math.floor(Math.random() * 9)
        console.log(num)

        if (document.getElementById(num).innerHTML === '') document.getElementById(num).innerHTML = 'o';
        else if (
                gameBoard.board[0].innerHTML !== '' &&
                gameBoard.board[1].innerHTML !== '' &&
                gameBoard.board[2].innerHTML !== '' &&
                gameBoard.board[3].innerHTML !== '' &&
                gameBoard.board[4].innerHTML !== '' &&
                gameBoard.board[5].innerHTML !== '' &&
                gameBoard.board[6].innerHTML !== '' &&
                gameBoard.board[7].innerHTML !== '' &&
                gameBoard.board[8].innerHTML !== ''
        ) gameFlow.gameOver('tie');
        else {
            numGenerator();
            console.log('else')
        }
        }

        gameFlow.checkWin()

    }
    const checkWin = function() {
        //check rows for x win
        if (
            (gameBoard.board[0].innerHTML == gameBoard.board[1].innerHTML && gameBoard.board[0].innerHTML == 'x') 
                && (gameBoard.board[1].innerHTML == gameBoard.board[2].innerHTML && gameBoard.board[2].innerHTML == 'x')
            || 
            (gameBoard.board[3].innerHTML == gameBoard.board[4].innerHTML && gameBoard.board[3].innerHTML == 'x')
                && (gameBoard.board[4].innerHTML == gameBoard.board[5].innerHTML && gameBoard.board[5].innerHTML == 'x')
            ||
            (gameBoard.board[6].innerHTML == gameBoard.board[7].innerHTML && gameBoard.board[6].innerHTML == 'x')
                && (gameBoard.board[7].innerHTML == gameBoard.board[8].innerHTML && gameBoard.board[8].innerHTML == 'x')
        ) gameFlow.gameOver('You Win');
        //check columns for x win
        else if (
            (gameBoard.board[0].innerHTML == gameBoard.board[3].innerHTML && gameBoard.board[0].innerHTML == 'x') 
                && (gameBoard.board[3].innerHTML == gameBoard.board[6].innerHTML && gameBoard.board[3].innerHTML == 'x')
            || 
            (gameBoard.board[1].innerHTML == gameBoard.board[4].innerHTML && gameBoard.board[1].innerHTML == 'x')
                && (gameBoard.board[4].innerHTML == gameBoard.board[7].innerHTML && gameBoard.board[4].innerHTML == 'x')
            || 
            (gameBoard.board[2].innerHTML == gameBoard.board[5].innerHTML && gameBoard.board[2].innerHTML == 'x')
                && (gameBoard.board[5].innerHTML == gameBoard.board[8].innerHTML && gameBoard.board[5].innerHTML == 'x')
        ) gameFlow.gameOver('You Win');
         //check diagonals for x win
        else if (
            (gameBoard.board[0].innerHTML == gameBoard.board[4].innerHTML && gameBoard.board[0].innerHTML == 'x') 
                && (gameBoard.board[4].innerHTML == gameBoard.board[8].innerHTML && gameBoard.board[4].innerHTML == 'x')
            || 
            (gameBoard.board[2].innerHTML == gameBoard.board[4].innerHTML && gameBoard.board[2].innerHTML == 'x')
                && (gameBoard.board[4].innerHTML == gameBoard.board[6].innerHTML && gameBoard.board[4].innerHTML == 'x')
        ) gameFlow.gameOver('You Win');
        //check rows for o win
        else if (
            (gameBoard.board[0].innerHTML == gameBoard.board[1].innerHTML && gameBoard.board[0].innerHTML == 'o') 
                && (gameBoard.board[1].innerHTML == gameBoard.board[2].innerHTML && gameBoard.board[2].innerHTML == 'o')
            || 
            (gameBoard.board[3].innerHTML == gameBoard.board[4].innerHTML && gameBoard.board[3].innerHTML == 'o')
                && (gameBoard.board[4].innerHTML == gameBoard.board[5].innerHTML && gameBoard.board[5].innerHTML == 'o')
            ||
            (gameBoard.board[6].innerHTML == gameBoard.board[7].innerHTML && gameBoard.board[6].innerHTML == 'o')
                && (gameBoard.board[7].innerHTML == gameBoard.board[8].innerHTML && gameBoard.board[8].innerHTML == 'o')
        ) gameFlow.gameOver('You Lose');
        //check columns for o win
        else if (
            (gameBoard.board[0].innerHTML == gameBoard.board[3].innerHTML && gameBoard.board[0].innerHTML == 'o') 
                && (gameBoard.board[3].innerHTML == gameBoard.board[6].innerHTML && gameBoard.board[3].innerHTML == 'o')
            || 
            (gameBoard.board[1].innerHTML == gameBoard.board[4].innerHTML && gameBoard.board[1].innerHTML == 'o')
                && (gameBoard.board[4].innerHTML == gameBoard.board[7].innerHTML && gameBoard.board[4].innerHTML == 'o')
            || 
            (gameBoard.board[2].innerHTML == gameBoard.board[5].innerHTML && gameBoard.board[2].innerHTML == 'o')
                && (gameBoard.board[5].innerHTML == gameBoard.board[8].innerHTML && gameBoard.board[5].innerHTML == 'o')
        ) gameFlow.gameOver('You Lose');
         //check diagonals for o win
        else if (
            (gameBoard.board[0].innerHTML == gameBoard.board[4].innerHTML && gameBoard.board[0].innerHTML == 'o') 
                && (gameBoard.board[4].innerHTML == gameBoard.board[8].innerHTML && gameBoard.board[4].innerHTML == 'o')
            || 
            (gameBoard.board[2].innerHTML == gameBoard.board[4].innerHTML && gameBoard.board[2].innerHTML == 'o')
                && (gameBoard.board[4].innerHTML == gameBoard.board[6].innerHTML && gameBoard.board[4].innerHTML == 'o')
        ) gameFlow.gameOver('You Lose');
        else if (
                gameBoard.board[0].innerHTML !== '' &&
                gameBoard.board[1].innerHTML !== '' &&
                gameBoard.board[2].innerHTML !== '' &&
                gameBoard.board[3].innerHTML !== '' &&
                gameBoard.board[4].innerHTML !== '' &&
                gameBoard.board[5].innerHTML !== '' &&
                gameBoard.board[6].innerHTML !== '' &&
                gameBoard.board[7].innerHTML !== '' &&
                gameBoard.board[8].innerHTML !== ''
        ) gameFlow.gameOver('Tie Game');
        
        return;
    }

    return {
        checkWin,
        gameOver,
        robot    
    }

})()

gameBoard.init();



