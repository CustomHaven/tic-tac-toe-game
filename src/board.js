class Board {

    constructor(row=3, column=3) {
        this.row = row;
        this.column = column;
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