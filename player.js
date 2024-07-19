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

    win() {
        return `${this.name} has won!`
    }

    lose() {
        return `${this.name} has lost!`
    }

}

module.exports = {
    Player
}