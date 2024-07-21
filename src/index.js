const { Game } = require("./game");



// Play the game through CLI or through GUI PAGE
const game = new Game("Player 1", "X", "Player 2", "O", typeof(window) === "object" ? window : undefined);

if (game.window) {
    // Initial set up for the front end
    let playerType = game.player1.name;
    let markType = game.player1.mark;

    const divHolder = [];

    let modalDiv, modalDivFirst, modalDivSecond, modalWinnerP, modalLoserP;


    const playAgainButton = document.createElement("button");
    const ticContainer = document.querySelector(".ticTacToeContainer");
    const playerTypeH2 = document.querySelectorAll(".playerType");
    const gameMainContainer = document.querySelector(".container");

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


    // create Modal
    const modal = (winner, loser=undefined) => {

        modalDiv = document.createElement("div");
        modalDivFirst = document.createElement("div");
        modalDivSecond = document.createElement("div");

        modalWinnerP = document.createElement("p");

        modalDiv.classList.add("modalDiv");
        modalWinnerP.textContent = winner;

        playAgainButton.textContent = "Play Again!"

        gameMainContainer.appendChild(modalDiv);

        modalDiv.appendChild(modalDivFirst);
        modalDiv.appendChild(modalDivSecond);

        modalDivFirst.appendChild(modalWinnerP);

        if (loser) {
            modalLoserP = document.createElement("p");
            modalLoserP.textContent = loser;
            modalDivFirst.appendChild(modalLoserP);
        }

        modalDivSecond.appendChild(playAgainButton);
    }

    // Handle Draw
    const draw = () => {
        const over = "Game finished, It's a Draw!";
        modal(over);
    }


    // Display Winner!
    const displayWinner = (winner) => {
        let loser = winner === game.player1.name ? game.player2.lose() : game.player1.lose();

        winner = winner === game.player1.name ? game.player1.win() : game.player2.win();

        modal(winner, loser);
    }


    // Handle the click event
    const handleGameClick = (e, row, col) => {
        if (e.target.textContent) {
            return;
        }
        if (!game.board.winCondition()) {
            e.target.style.cursor = "grabbing";
            e.target.textContent = markType;
            game.board.makeMove(row, col, markType);
            if (!game.board.winCondition()) {
                markType = markType === game.player1.mark ? game.player2.mark : game.player1.mark;
                playerType = playerType === game.player1.name ? game.player2.name : game.player1.name;
                changePlayerClass(playerType);
            }
        
        }
    
        if (!game.board.winCondition()) {
            if (game.board.isDraw()) {
                setTimeout(() => {
                    draw();
                }, 300)
            
            }
        }
    
    }

    // Call event listener for each div box
    divHolder.forEach((articles, rowIndex) => {
        articles.forEach((div, colIndex) => {
            div.addEventListener("mousedown", (e) => handleGameClick(e, rowIndex, colIndex));

            div.addEventListener("mouseup", (e) => {
                e.target.style.cursor = "grab";
                if (game.board.winCondition()) {
                    setTimeout(() => {
                        displayWinner(playerType);
                    }, 300)
                }
            });
        })
    });


    // Reset the game!
    playAgainButton.addEventListener("click", () => {
        game.reset(game.player1.name, game.player1.mark, game.player2.name, game.player2.mark);

        playerType = game.player1.name;
        markType = game.player1.mark;

        removeAllPlayerClasses();
        player1UI.classList.add("playerToPlay");
        player2UI.classList.add("playerToNotPlay");

        modalDiv.remove();
        modalDivFirst.remove();
        modalDivSecond.remove();
        modalWinnerP.remove();
        modalLoserP.remove();
        playAgainButton.remove();

        for (const row of divHolder) {
            for (const col of row) {
                col.textContent = "";
            }
        }
    });

} else {
    const play = game.play();
    console.log(play);
}
