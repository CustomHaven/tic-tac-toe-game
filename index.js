const { Game } = require("./game");


const game = new Game("Player 1", "X", "Player 2", "O");


const play = game.play();

console.log(play);