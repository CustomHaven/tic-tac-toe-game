const { Window } = require("./frontendWindow");
const { Player } = require("./player");
const { Board } = require("./board");

class Game extends Window {

    constructor(player1Name, player1Mark, player2Name, player2Mark, window) {
        super(window);
        this.reset(player1Name, player1Mark, player2Name, player2Mark)
    }

    reset(player1Name, player1Mark, player2Name, player2Mark) {
        this.board = new Board();
        this.player1 = new Player(player1Name, player1Mark);
        this.player2 = new Player(player2Name, player2Mark);
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