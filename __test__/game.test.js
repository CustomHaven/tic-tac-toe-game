const { Game } = require("../src/game");
const { Player } = require("../src/player");
const { Board } = require("../src/board");

jest.mock("prompt-sync", () => {
    const mockPrompt = jest.fn();
    return () => mockPrompt;
});

let game;
let mockPrompt;

describe("Game Class", () => {

    beforeEach(() => {
        game = new Game("Player 1", "X", "Player 2", "O");
        mockPrompt = require("prompt-sync")();
    })

    it("Constructor is defined", () => {
        expect(game.constructor instanceof Function).toBe(true);
    });

    it("Constructor has 7 arguments", () => {
        expect(Game.prototype.constructor.length).toBe(7);
    });

    it("reset method is functional", () => {
        expect(game.reset instanceof Function).toBe(true);
        expect(Game.prototype.reset.length).toBe(6);
    });

    it("Player and Board instances are available", () => {
        expect(game.player1 instanceof Player).toBe(true);
        expect(game.player2 instanceof Player).toBe(true);
        expect(game.board instanceof Board).toBe(true);
    });

    it("Selecting Game type tic-tac-toe", () => {
        mockPrompt.mockReturnValueOnce("1");
        
        game.cliSelection();

        expect(game.board.row).toBe(3);
        expect(game.board.column).toBe(3);
    });


    it("Selecting Game type connect 4", () => {
        mockPrompt.mockReturnValueOnce("2");
        
        game.cliSelection();

        expect(game.board.row).toBe(6);
        expect(game.board.column).toBe(7);
    })



    it("should handle Player 1 winning the game", () => {
        mockPrompt
            .mockReturnValueOnce("0").mockReturnValueOnce("0")
            .mockReturnValueOnce("0").mockReturnValueOnce("1")
            .mockReturnValueOnce("1").mockReturnValueOnce("0")
            .mockReturnValueOnce("1").mockReturnValueOnce("1")
            .mockReturnValueOnce("2").mockReturnValueOnce("0");

        const result = game.play();

        expect(result).toBe("Player 1 has won!");
    });

    it("should handle Player 2 winning the game", () => {
        mockPrompt
            .mockReturnValueOnce("0").mockReturnValueOnce("0")
            .mockReturnValueOnce("1").mockReturnValueOnce("0")
            .mockReturnValueOnce("2").mockReturnValueOnce("0")
            .mockReturnValueOnce("1").mockReturnValueOnce("1")
            .mockReturnValueOnce("0").mockReturnValueOnce("2")
            .mockReturnValueOnce("1").mockReturnValueOnce("2");

        const result = game.play();

        expect(result).toBe("Player 2 has won!");
    });

    it("should handle a draw", () => {
        mockPrompt
            .mockReturnValueOnce("0").mockReturnValueOnce("0")
            .mockReturnValueOnce("0").mockReturnValueOnce("1")
            .mockReturnValueOnce("0").mockReturnValueOnce("2")
            .mockReturnValueOnce("1").mockReturnValueOnce("0")
            .mockReturnValueOnce("1").mockReturnValueOnce("2")
            .mockReturnValueOnce("1").mockReturnValueOnce("1")
            .mockReturnValueOnce("2").mockReturnValueOnce("1")
            .mockReturnValueOnce("2").mockReturnValueOnce("2")
            .mockReturnValueOnce("2").mockReturnValueOnce("0");

        const result = game.play();

        expect(result).toBe("Game finished, It's a Draw!");
    });

});