class Board {

    constructor(row=3, column=3) {
        this.row = row;
        this.column = column;
        console.log("INSIDE BOARD!", this.column)
        this.empty = ".";
        this.board = this.initilise2DArray();
        this.count = 0;
    }

    initilise2DArray() {
        const arr = [];
        for (let r = 0; r < this.row; r++) {
            const innerArr = [];
            for (let c = 0; c < this.column; c++) {
                innerArr.push(this.empty);
            }
            arr.push(innerArr);
        }
        return arr;
    }

    isDraw() {
        return this.count === this.row * this.column;
    }

    displayBoard() {
        let w = "";
        const temp_array = this.board;
        for (let r = 0; r < this.row; r++) {
            for (let c = 0; c < this.column; c++) {
                w += temp_array[r][c];
            }
            w += "\n";
        }
        return w.trim();
    }

    makeMove(row, col, mark) {
        if (this.board[row][col] === this.empty) {
            this.board[row][col] = mark;
            this.count++;
            return true;
        } else {
            return false;
        }
    }

    winCondition() {
        if (this.board.length > 3) {
            console.log("BOARD IS");
            console.log(this.board);
            console.log("first")
            return this.connect4WinCondition();
        } else {
            return this.ticTacToeWinCondition();
        }
    }

    connect4WinCondition() {
        const connect = 4;
        // Check horizontal win
        for (let r = 0; r < this.row; r++) {
            for (let c = 0; c <= this.column - connect; c++) {
                if (this.board[r][c] !== this.empty &&
                    this.board[r][c] === this.board[r][c + 1] &&
                    this.board[r][c + 1] === this.board[r][c + 2] &&
                    this.board[r][c + 2] === this.board[r][c + 3]) {
                    return true;
                }
            }
        }

        // Check vertical win
        for (let c = 0; c < this.column; c++) {
            for (let r = 0; r <= this.row - connect; r++) {
                if (this.board[r][c] !== this.empty &&
                    this.board[r][c] === this.board[r + 1][c] &&
                    this.board[r + 1][c] === this.board[r + 2][c] &&
                    this.board[r + 2][c] === this.board[r + 3][c]) {
                    return true;
                }
            }
        }

        // Check diagonal (bottom-left to top-right) win
        for (let r = 0; r <= this.row - connect; r++) {
            for (let c = 0; c <= this.column - connect; c++) {
                if (this.board[r][c] !== this.empty &&
                    this.board[r][c] === this.board[r + 1][c + 1] &&
                    this.board[r + 1][c + 1] === this.board[r + 2][c + 2] &&
                    this.board[r + 2][c + 2] === this.board[r + 3][c + 3]) {
                    return true;
                }
            }
        }

        // Check diagonal (top-left to bottom-right) win
        for (let r = 3; r < this.row; r++) {
            for (let c = 0; c <= this.column - connect; c++) {
                if (this.board[r][c] !== this.empty &&
                    this.board[r][c] === this.board[r - 1][c + 1] &&
                    this.board[r - 1][c + 1] === this.board[r - 2][c + 2] &&
                    this.board[r - 2][c + 2] === this.board[r - 3][c + 3]) {
                    return true;
                }
            }
        }

        return false;        
    }

    ticTacToeWinCondition() {
        for (let r = 0; r < this.row; r++) {
            if (this.board[r][0] !== this.empty &&
                this.board[r][0] === this.board[r][1] &&
                this.board[r][1] === this.board[r][2]) {
                return true;
            }
            if (this.board[0][r] !== this.empty &&
                this.board[0][r] === this.board[1][r] &&
                this.board[1][r] === this.board[2][r]) {
                return true;
            }
        }

        // Check Diagonals
        if (this.board[0][0] !== this.empty &&
            this.board[0][0] === this.board[1][1] &&
            this.board[1][1] === this.board[2][2]) {
            return true;
        }

        if (this.board[0][2] !== this.empty &&
            this.board[0][2] === this.board[1][1] &&
            this.board[1][1] === this.board[2][0]) {
            return true;
        }
        return false;
    }

}

module.exports = {
    Board
}