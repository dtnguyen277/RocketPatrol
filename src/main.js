// Daniel Nguyen
// Dnguy182@ucsc.edu
// Starting Tier
// Music: 8-Bit Surf by David Renda 
// Link: https://www.fesliyanstudios.com/royalty-free-music/downloads-c/8-bit-music/6

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ],
};

let game = new Phaser.Game(config);

// define game settings
game.settings = {
    spaceshipSpeed: 3,
    gameTimer: 60000
}

// reserve some keyboard variables
let keyF, keyLEFT, keyRIGHT;

// global highscore value
let hiScore = 0;

let fireUI;
