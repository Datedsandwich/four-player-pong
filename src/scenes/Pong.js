import Phaser from 'phaser'
import assets from '../const/assets'
import keys from '../const/keys'
import scenes from '../const/scenes'
import { runInThisContext } from 'vm'

class Pong extends Phaser.Scene {
    constructor() {
        super({
            key: scenes.pong
        })

        this.paddle
        this.ball
    }

    preload() {
        this.load.atlas(keys.assets, 'assets/breakout.png', 'assets/breakout.json')
    }

    create() {
        this.setUpObjects()

        this.physics.add.collider(this.ball, this.paddle, this.hitPaddle, null, this)
        this.physics.add.collider(this.ball, this.paddle2, this.hitPaddle, null, this)
        this.physics.add.collider(this.ball, this.paddle3, this.hitPaddle, null, this)
        this.physics.add.collider(this.ball, this.paddle4, this.hitPaddle, null, this)

        this.physics.add.collider(this.secondaryBall, this.paddle, this.hitPaddle, null, this)
        this.physics.add.collider(this.secondaryBall, this.paddle2, this.hitPaddle, null, this)
        this.physics.add.collider(this.secondaryBall, this.paddle3, this.hitPaddle, null, this)
        this.physics.add.collider(this.secondaryBall, this.paddle4, this.hitPaddle, null, this)

        this.physics.add.collider(this.ball, this.secondaryBall, null, null, this)
        this.physics.add.collider(this.secondaryBall, this.ball, null, null, this)
    }

    update() {
        if (this.checkBall(this.ball)) {
            this.resetBall(this.ball)
        }

        if (this.checkBall(this.secondaryBall)) {
            this.secondaryBall.disableBody(true, true)
            this.resetBall(this.secondaryBall)
        }
    }

    hitPaddle(ball, paddle) {
        const modifier = 10
        if (ball.x < paddle.x) {
            ball.setVelocityX(-modifier * (paddle.x - ball.x))
        } else if (ball.x > paddle.x) {
            ball.setVelocityX(modifier * (ball.x - paddle.x))
        } else {
            ball.setVelocityX(2 + Math.random() * modifier)
        }

        if (ball.y < paddle.y) {
            ball.setVelocityY(-modifier * (paddle.y - ball.y))
        } else if (ball.y > paddle.y) {
            ball.setVelocityY(modifier * (ball.y - paddle.y))
        } else {
            ball.setVelocityY(2 + Math.random() * modifier)
        }

        if (!this.secondaryBall.body.enable && this.getRandomArbitrary(0, 5) > 4) {
            this.secondaryBall.enableBody(false, this.ball.x, this.ball.y, true, true)
            this.secondaryBall.setPosition(this.ball.x, this.ball.y)
            this.secondaryBall.setVelocity(-this.ball.x, -this.ball.y)
        }
    }

    resetBall(ball) {
        ball.setVelocity(0)
        ball.setPosition(400, 300)
        ball.setData('onPaddle', true)

        this.redTeamScore.setText(`Red Team: ${this.scores[0]}`)
        this.blueTeamScore.setText(`Blue Team: ${this.scores[1]}`)
    }

    setUpObjects() {
        this.ball = this.physics.add.image(400, 300, keys.assets, assets.ball).setBounce(1)
        this.ball.setData('onPaddle', true)

        this.secondaryBall = this.physics.add.image(400, 300, keys.assets, assets.ball).setBounce(1)
        this.secondaryBall.disableBody(true, true)

        this.paddle = this.physics.add
            .image(400, 550, keys.assets, assets.paddle)
            .setImmovable()
            .setCollideWorldBounds(true)
        this.paddle2 = this.physics.add
            .image(400, 50, keys.assets, assets.paddle)
            .setImmovable()
            .setCollideWorldBounds(true)
        this.paddle3 = this.physics.add
            .image(50, 300, keys.assets, assets.otherPaddle)
            .setImmovable()
            .setCollideWorldBounds(true)

        this.paddle3.setRotation(1.5708)
        this.paddle3.body.setSize(24, 104, 50, 50)

        this.paddle4 = this.physics.add
            .image(750, 300, keys.assets, assets.otherPaddle)
            .setImmovable()
            .setCollideWorldBounds(true)

        this.paddle4.setRotation(1.5708)
        this.paddle4.body.setSize(24, 104, 50, 50)

        this.scores = [0, 0]

        this.redTeamScore = this.make.text({
            x: 0,
            y: 0,
            text: 'Red Team: 0',
            style: {
                font: '20px monospace',
                fill: '#ff0044'
            }
        })

        this.blueTeamScore = this.make.text({
            x: this.cameras.main.width - 250,
            y: 0,
            text: 'Blue Team: 0',
            style: {
                font: '20px monospace',
                fill: '#0000ff'
            }
        })

        this.setUpInputEvents()
    }

    getRandomArbitrary = (min, max) => {
        const arbitrary = Math.random() * (max - min) + min

        if (arbitrary > -0.75 && arbitrary < 0) {
            return -0.75
        } else if (arbitrary < 0.75 && arbitrary > 0) {
            return 0.75
        } else {
            return arbitrary
        }
    }

    checkBall(ball) {
        const bottom = ball.y > this.cameras.main.height
        const top = ball.y < 0
        const left = ball.x < 0
        const right = ball.x > this.cameras.main.width

        if (bottom || top) {
            this.scores[0] += 1
            return true
        }

        if (left || right) {
            this.scores[1] += 1
            return true
        }

        return false
    }

    setUpInputEvents() {
        this.input.keyboard.on(
            'keyup_SPACE',
            event => {
                if (this.ball.getData('onPaddle')) {
                    this.ball.setVelocity(
                        300 * this.getRandomArbitrary(-1, 1),
                        300 * this.getRandomArbitrary(-1, 1)
                    )
                    this.ball.setData('onPaddle', false)
                }
            },
            this
        )

        const paddleSpeed = 500

        this.setUpInputForPaddle1(paddleSpeed)
        this.setUpInputForPaddle2(paddleSpeed)
        this.setUpInputForPaddle3(paddleSpeed)
        this.setUpInputForPaddle4(paddleSpeed)

        this.input.keyboard.on('keydown_ESC', event => {
            this.scene.start(scenes.title)
        })
    }

    setUpInputForPaddle1(paddleSpeed) {
        this.input.keyboard.on('keydown_LEFT', event => {
            this.paddle.setVelocityX(-paddleSpeed)
        })

        this.input.keyboard.on('keydown_RIGHT', event => {
            this.paddle.setVelocityX(paddleSpeed)
        })

        this.input.keyboard.on('keyup_LEFT', event => {
            this.paddle.setVelocityX(0)
        })

        this.input.keyboard.on('keyup_RIGHT', event => {
            this.paddle.setVelocityX(0)
        })
    }

    setUpInputForPaddle2(paddleSpeed) {
        this.input.keyboard.on('keydown_A', event => {
            this.paddle2.setVelocityX(-paddleSpeed)
        })

        this.input.keyboard.on('keydown_D', event => {
            this.paddle2.setVelocityX(paddleSpeed)
        })

        this.input.keyboard.on('keyup_A', event => {
            this.paddle2.setVelocityX(0)
        })

        this.input.keyboard.on('keyup_D', event => {
            this.paddle2.setVelocityX(0)
        })
    }

    setUpInputForPaddle3(paddleSpeed) {
        this.input.keyboard.on('keydown_W', event => {
            this.paddle3.setVelocityY(-paddleSpeed)
        })

        this.input.keyboard.on('keydown_S', event => {
            this.paddle3.setVelocityY(paddleSpeed)
        })

        this.input.keyboard.on('keyup_W', event => {
            this.paddle3.setVelocityY(0)
        })

        this.input.keyboard.on('keyup_S', event => {
            this.paddle3.setVelocityY(0)
        })
    }

    setUpInputForPaddle4(paddleSpeed) {
        this.input.keyboard.on('keydown_UP', event => {
            this.paddle4.setVelocityY(-paddleSpeed)
        })

        this.input.keyboard.on('keydown_DOWN', event => {
            this.paddle4.setVelocityY(paddleSpeed)
        })

        this.input.keyboard.on('keyup_UP', event => {
            this.paddle4.setVelocityY(0)
        })

        this.input.keyboard.on('keyup_DOWN', event => {
            this.paddle4.setVelocityY(0)
        })
    }
}

export default Pong
