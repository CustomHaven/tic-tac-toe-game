const { Player } = require("./player");


const player = new Player("Player 1", "X");

const emptySlots = [
  ["X", ".", "."],
  ["O", ".", "."],
  [".", ".", "."]
];

console.log(player.promptPlayer(emptySlots));