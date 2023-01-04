const gameBoard = function(){
    let board = []
    const init = function() {
        cacheDOM();
        bindEvents();
    }
    const cacheDOM = function() {
        let container = document.getElementById('container');
        for(let i = 0; i < 9; i++ ) {
             board.push(document.getElementById(i));
        }
    }
    const bindEvents = function() {
        for(let i = 0; i < 9; i++ ) {
            board[i].addEventListener("click", function() {
                document.getElementById(i).innerHTML = 'x'
            })
        } 
    }
    return {
        init
    };
}();



gameBoard.init();