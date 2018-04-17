const commando = require('discord.js-commando');

class whoCommand extends commando.Command{
    constructor(client){
        super(client, {
            name : 'who',
            group : 'who',
            memberName: 'who',
            description: 'Ask the bot its opinion on who;'

        });
    }

    async run(message, args){
        let tmpwho = ['https://i.imgur.com/F999NAf.jpg are we talking about my favourite wrestler?','https://www.youtube.com/watch?v=utBtRxPFPXU never heard of em', 'Time for some music - https://www.youtube.com/watch?v=gY5rztWa1TM']
      let randwho = tmpwho[Math.floor(Math.random()*tmpwho.length)];
      message.reply(randwho);        
    }
}

module.exports = whoCommand;
