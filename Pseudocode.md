# HACKATHON Pseudocode for Tic-Tac-Toe GAME

CONSTANT ROW = 3

CONSTANT COLUMN = 3

CONSTANT EMPTY = "."

CONSTANT PLAYER1 = "O"

CONSTANT PLAYER2 = "X"


```
CLASS BOARD:
    CONSTRUCTOR:
        this.NON_PLAYER = "FREE"
        this.BOARD = 2D ARRAY Filled with EMPTY
        <!-- this.PLAYER1 = EMPTY ARRAY
        this.PLAYER2 = EMPTY ARRAY -->
        this.COUNT = 0
    
    METHOD DISPLAYBOARD:
        b = ""
        TEMP_ARRAY = this.BOARD
        START FOR LOOP
        FOR EACH R in ROW:
            FOR EACH C in COLUMN:
                b += TEMP_ARRAY.SHIFT[0]
            b += "\n"
        END FOR LOOP
        RETURN B
    END METHOD

    METHOD MAKE_MOVE(row, col, mark):
        START IF
        IF this.BOARD[row][col] === EMPTY:
            // SET CELL to mark
            this.BOARD[row][col] = mark
            this.COUNT += 1
            RETURN TRUE
        ELSE:
            RETURN FALSE
        END IF
    END METHOD
    

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

    METHOD IS_DRAW():
        RETURN this.COUNT === ROW * COLUMN
    END METHOD
END CLASS
```

```
CLASS PLAYER:
    
    METHDOD CONSTRUCTOR(name, mark):
        PLAYER_NAME = name
        PLAYER_MARK = mark
    END METHOD

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

    METHOD INVALID_OPTION(emptySlotIndexes, row, col):
        if row, col not in emptySlotIndexes:
            return true
    END MEHTOD    

    METHOD WIN:
        return `${PLAYER_NAME} has won!`
    END MEHTOD


    METHOD LOSE:
        return `${PLAYER_NAME} has lost!`
    END MEHTOD
END CLASS
```

```
CLASS GAME:
    PROPERTIES = BOARD
    PROPERTIES = PLAYER1
    PROPERTIES = PLAYER2


    METHOD CONSTRUCTOR:
        this.BOARD = INITILISE A NEW BOARD
        this.PLAYER1 = INITILISE A NEW PLAYER 1 X
        this.PLAYER2 = INITILISE A NEW PLAYER 2 O


    METHOD GET_EMPTY_SLOTS():
        emptySlots = []
        FOR EACH r IN 0 TO ROW-1:
            FOR EACH c IN 0 TO COLUMN-1:
                IF this.BOARD[r][c] == EMPTY:
                    emptySlots.APPEND((r, c))
        RETURN emptySlots
    END METHOD

    METHOD PLAY:
        currentPlayer = this.PLAYER1
        START LOOP
        WHILE TRUE:
            this.BOARD.DISPLAY_BOARD()
            emptySlots = this.GET_EMPTY_SLOTS()

            row, col = currentPlayer.PROMPT_PLAYER(emptySlotIndexes)
            successfulMove = this.BOARD.MAKE_MOVE(row, col, currentPlayer.PLAYER_MARK)

            START IF
            IF successfulMove:
                START IF
                IF this.BOARD.WIN_CONDITION():
                    this.BOARD.DISPLAY_BOARD()
                    CONSOLE.LOG currentPlayer.WIN()
                    BREAK
                ELSE IF this.BOARD.IS_DRAW():
                    this.BOARD.DISPLAY_BOARD()
                    CONSOLE.LOG "GAME OVER it is a DRAW!!"
                    BREAK
                // SWITCH PLAYER
                ELSE:
                    IF current_player === this.PLAYER1:
                        current_player = this.PLAYER2
                    ELSE:
                        current_player = this.PLAYER1
            ELSE:
                CONSOLE.LOG "Invalid move, try again."
END CLASS
```