const each = require("jest-each").default;
const { Board } = require("../board");

let board;

xdescribe("Board Class", () => {
    beforeEach(() => {
        board = new Board();
    });

    it("attribute this.board returns a 2d array", () => {
        expect(board.board).toEqual([[".", ".", "."], [".", ".", "."], [".", ".", "."]])
    })

    it("isDraw return true if ROW * COLUMN is equal to count", () => {
        // ASSIGN
        board.count = 9

        expect(board.isDraw()).toBe(true);
    });

    it("isDraw return false if ROW * COLUMN does not equal to count", () => {
        // ASSIGN
        board.count = 8;

        expect(board.isDraw()).toBe(false);
    });

    it("displayBoard returns a string representation of the board", () => {

        const expectedOutput = '...\n...\n...';
        expect(board.displayBoard instanceof Function).toEqual(true);
        expect(board.displayBoard()).toEqual(expectedOutput.trim());
    })

    it("makeMove returns true and also check if this.board has changed", () => {

        // Assign
        const r = 1;
        const c = 2;
        const mark = "X";
        const newBoard = [[".", ".", "."], [".", ".", "X"], [".", ".", "."]]

        expect(board.makeMove instanceof Function).toEqual(true);
        // to have 3 arguments
        expect(Board.prototype.makeMove.length).toBe(3);
        expect(board.makeMove(r,c, mark)).toBe(true);

        
        expect(board.board).toEqual(newBoard);
    });

    it("winCondition", () => {

        expect(board.winCondition instanceof Function).toBe(true);

    })

    each([
        [true, [[".", ".", "X"], [".", ".", "X"], [".", ".", "X"]]],
        [true, [["O", ".", "."], [".", "O", "."], [".", ".", "O"]]],
        [false, [["O", "X", "O"], ["X", "X", "O"], ["O", "O", "X"]]],
        [false, [["O", "X", "."], ["X", ".", "O"], ["O", ".", "X"]]],
        [false, [[".", ".", "."], [".", ".", "."], [".", ".", "."]]]
    ]).test(`winCondition returns %s when board is %s`, (expected, boardState) => {
        board.board = boardState;
        expect(board.winCondition()).toBe(expected);
    });
})

/*
    METHOD WIN_CONDITION():
        START LOOP
        FOR EACH R in ROW:
            IF (this.BOARD[i][0] === this.BOARD[i][1] === this.BOARD[i][2]) && !== EMPTY:
                RETURN true
            IF (this.BOARD[0][i] == this.BOARD[1][i] == this.BOARD[2][i]) && !== EMPTY:
                RETURN true
        END LOOP

        # Check diagonals
        START IF
        IF (this.BOARD[0][0] === this.BOARD[1][1] === this.BOARD[2][2]) && !== EMPTY:
            RETURN true
        IF (this.BOARD[0][2] === this.BOARD[1][1] === this.BOARD[2][0]) && !== EMPTY:
            RETURN true
        END IF
    END MEHTOD
*/