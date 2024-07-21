const each = require("jest-each").default;
const { Player } = require("../src/player");

// Mock the prompt function
jest.mock("prompt-sync", () => {
    const mockPrompt = jest.fn();
    // Define the return values for the mock
    mockPrompt
        .mockReturnValueOnce("5")
        .mockReturnValueOnce("5")
        .mockReturnValueOnce("0")
        .mockReturnValueOnce("0")
        .mockReturnValueOnce("0")
        .mockReturnValueOnce("2")
    
    return () => mockPrompt;
});

let player;
let emptySlots;

describe("Player Class", () => {

    beforeEach(() => {
        player = new Player("Player 1", "X");
        emptySlots = [
            ["X", ".", "."],
            ["O", ".", "."],
            [".", ".", "."]
        ];
    });

    afterEach(() => {
        jest.clearAllMocks(); // Clear mock calls between tests
        jest.resetModules(); // Reset the module registry to ensure fresh mocks
    })



    it("Constructor has 2 arguments", () => {
        expect(player.constructor instanceof Function).toEqual(true);
        // to have 2 arguments
        expect(Player.prototype.constructor.length).toBe(4);

    });

    it("Has method validOption with 3 arguments", () => {
        expect(player.validOption instanceof Function).toEqual(true);
        expect(Player.prototype.validOption.length).toBe(3);  
    })

    each([
        [false, [[["X", ".", "."],["O", ".", "."],[".", ".", "."]], "2s", 2]],
        [false, [[["X", ".", "."],["O", ".", "."],[".", ".", "."]], "2s", "2"]],
        [false, [[["X", ".", "."],["O", ".", "."],[".", ".", "."]], [2, 3], 2]],
        [false, [[["X", ".", "."],["O", ".", "."],[".", ".", "."]], [2, 1]]]
    ]).test("validOption returns false when row or column or of wrong type", (expected, input) => {
        // Assign
        const empties = input[0];
        const row = input[1];
        const col = input[2];

        expect(player.validOption(empties, row, col)).toBe(expected);
    })



    it("validOption if row or column are 3 and above return false", () => {
        // Assign 
        const row = 3;
        const col = 3;

        expect(player.validOption(emptySlots, row, col)).toEqual(false);
    })

    it("validOption returns true when an empty slot is found", () => {
        // Arrange
        const row = 0;
        const col = 2;
        // Assign

        expect(player.validOption(emptySlots, row, col)).toBe(true);
    });

    it("validOption returns false when a occupied slot is found", () => {
        // Arrange
        const row = 0;
        const col = 0;
        // Assign

        expect(player.validOption(emptySlots, row, col)).toBe(false);
    });




    it("Has method promptPlayer and takes 1 argument", () => {
        expect(player.promptPlayer instanceof Function).toEqual(true);
        expect(Player.prototype.promptPlayer.length).toBe(1);
    });

    it("promptPlayer runs forever until user provides correct row can col values finally promptPlayer returns { row, col, mark }", () => {
        // // Arrange
        const mockPrompt = require('prompt-sync')();
        // By adding this here and removing it from the top breaks this test!
        mockPrompt.mockReturnValueOnce("0").mockReturnValueOnce("2");
        
        const result = player.promptPlayer(emptySlots);

        // Test the mockPrompt off prompt-sync
        expect(mockPrompt()).toBe("5");
        expect(mockPrompt()).toBe("5");
        expect(mockPrompt()).toBe("0");
        expect(mockPrompt()).toBe("0");
        expect(mockPrompt()).toBe("0");
        expect(mockPrompt()).toBe("2");

        // Assign
        expect(result).toEqual({
            row: 0,
            col: 2,
            mark: "X"
        });
    });

    it("Test lose", () => {
        const result = player.lose();
        expect(result).toEqual("Player 1 has lost!");
    });


    it("Test win", () => {
        const result = player.win();
        expect(result).toEqual("Player 1 has won!");
    });

})