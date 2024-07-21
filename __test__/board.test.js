const each = require("jest-each").default;
const { Board } = require("../src/board");

let board;

describe("Board Class tic-tac-toe", () => {
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
    });

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

        expect(board.ticTacToeWinCondition instanceof Function).toBe(true);

    });

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
});


describe("Board Class Connect 4", () => {
    beforeEach(() => {
        board = new Board(6, 7);
    });

    it("attribute this.board returns a 2d array", () => {
        expect(board.board).toEqual([
            [".", ".", ".", ".", ".", ".", "."], 
            [".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", "."]
        ])
    });


    it("isDraw return true if ROW * COLUMN is equal to count", () => {
        // ASSIGN
        board.count = 42;

        expect(board.isDraw()).toBe(true);
    });

    it("isDraw return false if ROW * COLUMN does not equal to count", () => {
        // ASSIGN
        board.count = 33;

        expect(board.isDraw()).toBe(false);
    });

    it("displayBoard returns a string representation of the board", () => {

        const expectedOutput = ".......\n.......\n.......\n.......\n.......\n.......";
        expect(board.displayBoard instanceof Function).toEqual(true);
        expect(board.displayBoard()).toEqual(expectedOutput.trim());
    });


    it("makeMove returns true and also check if this.board has changed", () => {

        // Assign
        const r = 5;
        const c = 6;
        const mark = "O";
        const newBoard = [
            [".", ".", ".", ".", ".", ".", "."], 
            [".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", "O"]
        ]

        expect(board.makeMove instanceof Function).toEqual(true);
        // to have 3 arguments
        expect(Board.prototype.makeMove.length).toBe(3);
        expect(board.makeMove(r,c, mark)).toBe(true);

        
        expect(board.board).toEqual(newBoard);
    });


    it("connect4WinCondition", () => {

        expect(board.connect4WinCondition instanceof Function).toBe(true);

    });

    each([
        [true, [
            [".", ".", ".", ".", ".", ".", "."], 
            [".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", "."],
            ["X", "X", "X", "X", "O", "O", "O"]
        ]],
        [true, [
            [".", ".", ".", ".", ".", ".", "."], 
            [".", ".", ".", ".", ".", ".", "."],
            [".", "O", ".", ".", ".", ".", "."],
            ["X", "O", ".", ".", ".", ".", "."],
            ["X", "O", ".", ".", ".", ".", "."],
            ["X", "O", "X", ".", ".", ".", "."]
        ]],
        [false, [
            [".", ".", ".", ".", ".", ".", "."], 
            [".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", "."],
            ["X", ".", ".", ".", ".", ".", "O"]
        ]],
        [true, [
            [".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", "X", ".", ".", "."],
            [".", ".", "X", ".", ".", ".", "."],
            [".", "X", ".", ".", ".", ".", "."],
            ["X", ".", ".", ".", ".", ".", "."]
        ]],
        [false, [
            [".", ".", ".", ".", ".", ".", "."], 
            [".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", "."]
        ]]
    ]).test(`winCondition returns %s when board is %s`, (expected, boardState) => {
        board.board = boardState;
        expect(board.winCondition()).toBe(expected);
    });
});