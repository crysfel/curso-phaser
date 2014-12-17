

var GameState = {
    preload : function(){
        var me = this;

        me.load.image('bg', 'resources/images/background.png');
        me.load.image('rock', 'resources/images/rock.png');
        me.load.image('platform-1', 'resources/images/platform-1.png');
        me.load.image('platform-2', 'resources/images/platform-2.png');
    },

    create  : function(){
        var me = this;

        me.game.add.image(-100, 0, 'bg');
        me.game.add.sprite(-100, me.game.world.height-88, 'platform-1');
        me.game.add.sprite(867, me.game.world.height - 72, 'platform-2');
        me.game.add.image(355, this.game.world.height-115, 'rock');
    },

    update  : function(){
        console.log('Updating!');
    }
}