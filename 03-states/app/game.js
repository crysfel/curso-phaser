
var MyGame = new Phaser.Game(1024, 768, Phaser.AUTO, 'game-container');


MyGame.state.add('game', GameState);

MyGame.state.start('game');