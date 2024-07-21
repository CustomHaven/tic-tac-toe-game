const { Game } = require("./game");



// Play the game through CLI or through GUI PAGE
const game = new Game("Player 1", "X", "Player 2", "O", typeof(window) === "object" ? window : undefined);


// Initial set up for the front end
let playerType = game.player1.name;
let markType = game.player1.mark;

const divHolder = [];

const ticContainer = document.querySelector(".ticTacToeContainer");
const playerTypeH2 = document.querySelectorAll(".playerType");

const player1UI = playerTypeH2[0]
const player2UI = playerTypeH2[1]

player1UI.textContent = game.player1.name;
player2UI.textContent = game.player2.name;

player1UI.classList.add("playerToPlay");
player2UI.classList.add("playerToNotPlay");



// Functions to remove and change the current player display colours
const removeAllPlayerClasses = () => {
    player1UI.classList.remove("playerToPlay");
    player1UI.classList.remove("playerToNotPlay");
    player2UI.classList.remove("playerToPlay");
    player2UI.classList.remove("playerToNotPlay");
}

const changePlayerClass = (turn) => {
    if (turn === game.player1.name) {
        removeAllPlayerClasses();
        player1UI.classList.add("playerToPlay");
        player2UI.classList.add("playerToNotPlay");
    } else {
        removeAllPlayerClasses();
        player2UI.classList.add("playerToPlay");        
        player1UI.classList.add("playerToNotPlay");

    }
}


// Initilise the board on to the UI
const gameBoard = () => {
    console.log(game.board.board);

    for (const row of game.board.board) {
        const article = document.createElement("article");
        article.classList.add("btn-main");
        const innerArray = [];
        for (const _ of row) {
            const div = document.createElement("div");
            innerArray.push(div);
            div.classList.add("box");
            
            article.appendChild(div);
            
        }
        ticContainer.appendChild(article);
        divHolder.push(innerArray);
    }
}

gameBoard();


// Handle the click event
const handleGameClick = (e, row, col) => {
    console.log("WINNING!", game.board.winCondition())
    if (!game.board.winCondition()) {
        e.target.textContent = markType;
        game.board.makeMove(row, col, markType);
        if (!game.board.winCondition()) {
            markType = markType === game.player1.mark ? game.player2.mark : game.player1.mark;
            playerType = playerType === game.player1.name ? game.player2.name : game.player1.name;
            changePlayerClass(playerType);
        }

    } else {
        console.log("GAME HAS ENDED SOME1 WON!");
        console.log("WINNER IS!", playerType);
    }

}

// Call event listener for each div box
divHolder.forEach((articles, rowIndex) => {
    articles.forEach((div, colIndex) => {
        return div.addEventListener("click", (e) => handleGameClick(e, rowIndex, colIndex))
    })
});