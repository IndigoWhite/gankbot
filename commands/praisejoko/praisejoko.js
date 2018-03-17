const commando = require('discord.js-commando');

class PraiseJokoCommand extends commando.Command{
    constructor(client){
        super(client, {
            name : 'praisejoko',
            group : 'praisejoko',
            memberName: 'praisejoko',
            description: 'The bot praises our might and saviour.'

        });
    }
    async run(message, args){
         let tmpJoko = [' Praise Joko!',
                        ' Praise our high and mighty Palawa Joko!'
        ]
      let randJoko = tmpJoko[Math.floor(Math.random()*tmpJoko.length)];
      message.reply(randJoko);
    }
}

module.exports = PraiseJokoCommand;