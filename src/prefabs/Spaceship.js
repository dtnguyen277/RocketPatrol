//Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue, rand) {
        super(scene, x, y, texture, frame);
        this.setFlipX(rand);
        this.random = rand;
        scene.add.existing(this); // add object to existing scene
        this.points = pointValue;

    }

    update() {
        if (this.random == 0) {
            // move spaceship left
            this.x -= game.settings.spaceshipSpeed;
            // wraparound screen bounds
            if (this.x <= 0 - this.width) {
                this.reset();
            }
        }
        else if (this.random == 1) {
            this.x += game.settings.spaceshipSpeed;
            if(this.x >= game.config.width) {
                this.reset();
            }
        }
    }
    reset() {
        if (this.random == 0)
            this.x = game.config.width;
        else if (this.random == 1)
            this.x = 0;
    }
}