const { Window } = require("./frontendWindow");
const { Player } = require("./player");
const { Board } = require("./board");
const prompt = require("prompt-sync")();

class Game extends Window {

    constructor(player1Name, player1Mark, player2Name, player2Mark, row, col, window) {
        super(window);
        this.reset(player1Name, player1Mark, player2Name, player2Mark, row, col)
    }

    reset(player1Name, player1Mark, player2Name, player2Mark, row, col) {
        this.board = new Board(row, col);
        this.player1 = new Player(player1Name, player1Mark, row, col);
        this.player2 = new Player(player2Name, player2Mark, row, col);
    }

    cliSelection() {
        const choose = prompt("Choose game: (1.Tic-Tac-Toe, 2.Connect-4): ");

        if (choose === "1" || choose === "2") {
            console.log();
            if (choose === "1") {
                this.reset("Player 1", "X", "Player 2", "O", 3, 3);
            } else {
                this.reset("Player 1", "X", "Player 2", "O", 6, 7);
            }
        } else {
            console.log("Choose either 1 or 2.");
            this.cliSelection();
        }
    }

    play() {
        let currentPlayer = this.player1;

        while (true) {
            console.log(this.board.displayBoard());

            const { row, col, mark } = currentPlayer.promptPlayer(this.board.board);

            const successfulMove = this.board.makeMove(row, col, mark);

            if (successfulMove) {
                console.log(this.board.displayBoard());
                if (this.board.winCondition()) {
                    console.log("\n\n");
                    return currentPlayer.win();
                } else if (this.board.isDraw()) {
                    console.log("\n\n");
                    return "Game finished, It's a Draw!";
                } else {
                    console.log("\n\n\n");
                    if (currentPlayer === this.player1) {
                        currentPlayer = this.player2;
                    } else {
                        currentPlayer = this.player1;
                    }
                }
            }
        }
    }


}



module.exports = {
    Game
}