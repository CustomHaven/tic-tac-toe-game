const prompt = require("prompt-sync")();

class Player {
    constructor(name, mark) {
        this.name = name
        this.mark = mark
    }

    invalidOption(emptySlots, row, col) {
        if (row >= 3 || col >= 3 || typeof(row) !== "number" || typeof(col) !== "number") {
            console.log("ITS MORE THAN 3")
            return true;
        }


        if (emptySlots[row][col] === ".") {
            return false;
        }

        return true;
    }

    promptPlayer(emptySlots) {
        console.log("Choose an empty slot.");

        const row = prompt("Enter the row number (0, 1, or 2): ");
        const col = prompt("Enter the column number (0, 1, or 2): ");
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