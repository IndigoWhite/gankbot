const commando = require('discord.js-commando');

class thegreatergoodCommand extends commando.Command{
    constructor(client){
        super(client, {
            name : 'thegreatergood',
            group : 'thegreatergood',
            memberName: 'thegreatergood',
            description: 'The Greater Good...'

        });
    }

    async run(message, args){
         let tmpGood = [' The greater good... https://www.youtube.com/watch?v=yUpbOliTHJY',
                        ' Fuck off up the model village... https://www.youtube.com/watch?v=HWgYVeCqJ-8', 
                        ' Ayespose... https://www.youtube.com/watch?v=Cun-LZvOTdw',
                        ' Morning. https://www.youtube.com/watch?v=Tp05YYQtggU>' ]
      let randGood = tmpGood[Math.floor(Math.random()*tmpGood.length)];
      message.reply(randGood);
    }
}


module.exports = thegreatergoodCommand;
