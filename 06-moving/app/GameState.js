

var GameState = {
    preload : function(){
        var me = this;

        me.load.image('bg', 'resources/images/background.png');
        me.load.image('rock', 'resources/images/rock.png');
        me.load.image('platform-1', 'resources/images/platform-1.png');
        me.load.image('platform-2', 'resources/images/platform-2.png');

        me.load.spritesheet('crow', 'resources/images/crow.png',97 ,120);
        me.load.spritesheet('man', 'resources/images/man.png',69 ,174);
    },

    create  : function(){
        var me = this;

        me.game.add.image(-100, 0, 'bg');
        me.game.add.sprite(-100, me.game.world.height-88, 'platform-1');
        me.game.add.sprite(867, me.game.world.height - 72, 'platform-2');
        me.game.add.image(355, this.game.world.height-115, 'rock');

        me.crow = me.game.add.sprite(150, 100, 'crow');
        me.crow.animations.add('right', [0,1,2,3], 8, true);
        me.crow.animations.add('left', [4,5,6,7], 8, true);
        me.crow.animations.play('right');

        me.man = me.game.add.sprite(200, me.game.world.height - 250, 'man');
        me.man.animations.add('right', [0,1,2,3,4,5,6,7], 10, true);
        me.man.animations.add('left', [15,14,13,12,11,10,9,8], 10, true);
        me.man.animations.play('left');
    },

    update  : function(){
        var me = this;

        me.crow.x += 5;

        if(me.crow.x >= me.game.world.width){
            me.crow.x = -100;
        }
    }
}