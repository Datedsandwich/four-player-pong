import { Scene } from 'phaser'

import scenes from '../const/scenes'

export class Title extends Scene {
    constructor() {
        super({
            key: scenes.title
        })
    }

    create() {
        this.input.keyboard.once('keydown', event => {
            this.scene.start(scenes.breakout)
        })

        const width = this.cameras.main.width
        const height = this.cameras.main.height

        const titleText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'Four Player Super Awesome Pong',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        })

        titleText.setOrigin(0.5, 0.5)

        const instructionText = this.make.text({
            x: width / 2,
            y: height / 2,
            text: 'Press any key to play',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        })

        instructionText.setOrigin(0.5, 0.5)
    }
}

export default Title
