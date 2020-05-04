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
/*
While programming this game I used new methods that I learned a lot and used new things that 
I had never done before. An example of this is the procedural obstacle generation I created.
Instead of respawning and recylcing obstacles. I used a stack where I pushed on new obstacles
spliced off old ones when they weren't needed. I also created a difficulty curve where the 
spawn frequency and speed of the road increased as you dodged more obstacles and slowed down
when you ran into obstacles.
We learned a lot about video game asset creation and what goes into creating the visuals of a game. 
Before this, Rakhi had only made a handful of pixel art in her spare time but never did anything with 
fully top-down perspectives. She is especially proud of her explosion animation when the bus hits the 
police cars. We tried making the endless runner timed by the amount of gas in the bus, allowing the 
player to prolong their game by collecting gas on the road. However the as the game speeds up, it 
becomes harder and harder to collect the gas while making sure their score doesn't go down by avoiding 
obstacles. We also gave the player the ability to avoid the end of their run by allowing them to hit 
the police cars that would otherwise cause them to lose the game if they slow down far enough.
*/

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
