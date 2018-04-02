const commando = require('discord.js-commando');

class NoblesCommand extends commando.Command{
    constructor(client){
        super(client, {
            name : 'nobles',
            group : 'nobles',
            memberName: 'nobles',
            description: 'Attempt to impress the nobles and Queen Brahne'

        });
    }
    async run(message, args){
         let tmpNobles = Math.floor(Math.random() * 100);
         
         let actualNobles = 'Of 100 nobles watching ' + tmpNobles + " were impressed. ";
        
         message.reply(actualNobles);
         if (tmpNobles > 79){
          let BrahneNobles = ' Queen Brahne was impressed.';
          message.reply(BrahneNobles);
      }
      else {
          let BrahneNobles = ' Queen Brahne was not impressed.';
          message.reply(BrahneNobles);
      }
      
    }
}

module.exports = NoblesCommand;

