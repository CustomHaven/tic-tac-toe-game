# HACKATHON Tic-Tac-Toe Game

Simple Tic-Tac-Toe game which can be played from the CLI terminal and also is playable here [HTML Page](https://customhaven.github.io/tic-tac-toe-game/tic-tac-toe.html)

---

## Setup

The Game is set up in a grid format of 3x3 in size. 


## How to Play

The aim is to get 3 in a row veritically, horizontally, or diagonal without being interupted by the other player.



## Technology

* HTML
* Google Fonts
* CSS
* JavaScript
    * Object Oriented Programming
    * Event Driven Programming
    * npm
        * Dependencies
            * prompt-sync
        * DevDependencies
            * watchify
            * jest
            * jest-each
            * jsdom
            * live-server
            * npm-run-all



## Play Methods

Either play the game from your terminal. Or visit our gaming website and play the game online [HERE.](https://customhaven.github.io/tic-tac-toe-game/tic-tac-toe.html)


## Status

Game is fully operational it has been fully tested and works smoothly. Testings are done here [TEST.](./__test__/)


## Installation

Take the following steps to run the game locally in your terminal:
- Clone or Fork the project
- Run `npm install`
- Run `npm run cli`
- `ctrl + c` to stop the client running


To run the game locally on your web browser:
- Clone or Fork the project
- Run `npm install`
- Run `npm run dev`
- The frontend should be running and accessible on [8080](http://localhost:8080)
- `ctrl + c` to stop the client running

## Coverage Test

Fully maintained and tested!

```
--------------------|---------|----------|---------|---------|-------------------
File                | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
--------------------|---------|----------|---------|---------|-------------------
All files           |    97.9 |    90.66 |     100 |   97.69 |                   
 __test__           |     100 |      100 |     100 |     100 |                   
  helpers.js        |     100 |      100 |     100 |     100 |                   
 src                |   97.74 |    90.66 |     100 |    97.5 |                   
  board.js          |   95.94 |       88 |     100 |   95.08 | 46,94,138         
  frontendWindow.js |     100 |      100 |     100 |     100 |                   
  game.js           |     100 |    92.85 |     100 |     100 | 45                
  player.js         |     100 |      100 |     100 |     100 |                   
--------------------|---------|----------|---------|---------|-------------------


```