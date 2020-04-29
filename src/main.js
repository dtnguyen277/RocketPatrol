// Daniel Nguyen
// Dnguy182@ucsc.edu
// Starting Tier
// Music: 8-Bit Surf by David Renda 
// Link: https://www.fesliyanstudios.com/royalty-free-music/downloads-c/8-bit-music/6
// Track a high score that persists across scenes and display it in the UI (10)
// Implement the 'FIRE' UI text from the original game (10)
// Add your own (copyright-free) background music to the Play scene (10)
// Implement the speed increase that happens after 30 seconds in the original game (10)
// Randomize each spaceship's movement direction at the start of each play (10)
// Create a new scrolling tile sprite for the background (10)
// Allow the player to control the Rocket after it's fired (10)

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
