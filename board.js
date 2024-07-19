const ROW = 3;
const COLUMN = 3;
const EMPTY = ".";

class Board {

    constructor() {
        this.board = this.initilise2DArray();
        this.count = 0;
    }

    initilise2DArray() {
        const arr = [];
        for (let r = 0; r < ROW; r++) {
            const innerArr = [];
            for (let c = 0; c < COLUMN; c++) {
                innerArr.push(EMPTY);
            }
            arr.push(innerArr);
        }
        return arr;
    }

    isDraw() {
        return this.count === ROW * COLUMN;
    }

    displayBoard() {
        let w = "";
        const temp_array = this.board;
        for (let r = 0; r < ROW; r++) {
            for (let c = 0; c < COLUMN; c++) {
                w += temp_array[r][c];
            }
            w += "\n";
        }
        return w.trim();
    }

    makeMove(row, col, mark) {
        if (this.board[row][col] === EMPTY) {
            this.board[row][col] = mark;
            this.count++;
            return true;
        } else {
            return false;
        }
    }

    winCondition() {
        for (let r = 0; r < ROW; r++) {
            if (this.board[r][0] !== EMPTY &&
                this.board[r][0] === this.board[r][1] &&
                this.board[r][1] === this.board[r][2]) {
                return true;
            }
            if (this.board[0][r] !== EMPTY &&
                this.board[0][r] === this.board[1][r] &&
                this.board[1][r] === this.board[2][r]) {
                return true;
            }
        }

        // Check Diagonals
        if (this.board[0][0] !== EMPTY &&
            this.board[0][0] === this.board[1][1] &&
            this.board[1][1] === this.board[2][2]) {
            return true;
        }

        if (this.board[0][2] !== EMPTY &&
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