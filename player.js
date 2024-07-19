const prompt = require("prompt-sync")();

class Player {
    constructor(name, mark) {
        this.name = name
        this.mark = mark
    }

    validOption(emptySlots, row, col) {
        try {
            row = Number(row);
            col = Number(col);

            if (isNaN(row) || isNaN(col) || row < 0 || col < 0 || row >= 3 || col >= 3) {
                return false;
            }
            return emptySlots[row][col] === ".";
        } catch (error) {
            return false;
        }
    }

    promptPlayer(emptySlots) {
        console.log("Choose an empty slot.", emptySlots);

        let row = prompt("Enter the row number (0, 1, or 2): ");
        let col = prompt("Enter the column number (0, 1, or 2): ");


        const isValid = this.validOption(emptySlots, row, col);

        if (!isValid) {
            return this.promptPlayer(emptySlots);
        } else {
            return {
                row: parseInt(row, 10),
                col: parseInt(col, 10),
                mark: this.mark
            }
        }
    }
}


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

module.exports = {
    Player
}