//Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this); // add object to existing scene
        this.isFiring = false; // track rocket's firing status
        this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx
    }

    update() {
        // l/r movement
        if (keyLEFT.isDown && this.x >= 47) {
            this.x -= 2;
        }
        else if (keyRIGHT.isDown && this.x <= 578) {
            this.x += 2;
        }

        // fire button
        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            this.isFiring = true;
            this.sfxRocket.play();
            fireUI.alpha = 1;
        }

        // if fired, move up
        if (this.isFiring && this.y >= 108) {
            this.y -= 2;
        }
        // reset on miss
        if (this.y <= 108) {
            this.reset();
        }
    }

    reset() {
        this.isFiring = false;
        this.y = 431;
        fireUI.alpha = 0;
    }
}