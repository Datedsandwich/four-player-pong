import Phaser from 'phaser'
import Title from './scenes/Title'
import Pong from './scenes/Pong'

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'content',
    physics: {
        default: 'arcade'
    },
    scene: [Title, Pong]
}

const game = new Phaser.Game(config)
