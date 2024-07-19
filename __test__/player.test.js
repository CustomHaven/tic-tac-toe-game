const { Player } = require("../player");

let player;
let emptySlots;
let emptySlotsIndexes;


describe("Player Class", () => {

    beforeEach(() => {
        player = new Player();
        emptySlots = [
            ["X", ".", "."],
            ["O", ".", "."],
            [".", ".", "."]
        ];
        emptySlotsIndexes = [];
        emptySlots.forEach((slots, rI) => slots.forEach((slot, cI) => {
            if (slot === ".") {
                emptySlotsIndexes.push({
                    emptyRow: rI,
                    emptyCol: cI
                })
            }
        }));
    });

    afterEach(() => {
        emptySlotsIndexes = [];
    })



    it("Constructor has 2 arguments", () => {
        expect(player.constructor instanceof Function).toEqual(true);
        // to have 2 arguments
        expect(Player.prototype.constructor.length).toBe(2);

    });

    it("Has method invalidOption with 3 arguments", () => {
        expect(player.invalidOption instanceof Function).toEqual(true);
        expect(Player.prototype.invalidOption.length).toBe(3);  
    })


    it("invalidOption if row or column are 3 and above return true", () => {
        // Assign 
        const row = 3;
        const col = 3;

        expect(player.invalidOption(emptySlots, row, col)).toEqual(true);
    })

    it("invalidOption returns false when an empty slot is found", () => {
        // Arrange
        const row = 0;
        const col = 2;
        // Assign

        expect(player.invalidOption(emptySlots, row, col)).toBe(false);
    });

    xit("invalidOption returns true when a occupied slot is found", () => {
        // Arrange
        const row = 0;
        const col = 0;
        // Assign

        expect(player.invalidOption(emptySlots, row, col)).toBe(false);
    });




    xit("Has method promptPlayer and takes 1 argument", () => {
        expect(player.promptPlayer instanceof Function).toEqual(true);
        expect(Player.prototype.promptPlayer.length).toBe(1);
    });


})

/*
    METHOD INVALID_OPTION(emptySlotIndexes, row, col):
        if row, col not in emptySlotIndexes:
            return true
        return false
    END MEHTOD  

*/


/*
    METHOD PROMPT_PLAYER(emptySlotIndexes):
        // PROMPT PLAYER TO MAKE A MOVE

        CONSOLE.LOG MAKE A MOVE from emptySlotIndexes 

        row = prompt "Enter the row number (0, 1, or 2): "
        col = prompt "Enter the column number (0, 1, or 2): "

        checkMark = this.INVALID_OPTION(emptySlotIndexes, row, col)
        
        if checkMark:
            CONSOLE.LOG "Invalid move. Try again."
            console.log() // create a new line
            this.PROMPT_PLAYER(emptySlotIndexes)
        else:
            return {
                newMarkIndex { row, column }
                markType: PLAYER_MARK
            }
    END MEHTOD
    */