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

    it("Constructor has 4 arguments", () => {
        expect(Game.prototype.constructor.length).toBe(5);
    });

    it("Player and Board instances are available", () => {
        expect(game.player1 instanceof Player).toBe(true);
        expect(game.player2 instanceof Player).toBe(true);
        expect(game.board instanceof Board).toBe(true);
    });

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