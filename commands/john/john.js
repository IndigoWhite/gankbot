const commando = require('discord.js-commando');

class johnCommand extends commando.Command{
    constructor(client){
        super(client, {
            name : 'john',
            group : 'john',
            memberName: 'john',
            description: 'Ask the bot its opinion on John;'

        });
    }

    async run(message, args){
        let tmpJohn = ['Here is a recent picture of @Rolfokvar - http://i.imgur.com/kfWjfcq.png', 'John has a unique view on Ascended Chest drops - http://i.imgur.com/1B3RAkp.png' , 'Johns favourite song is - https://www.youtube.com/watch?v=5NV6Rdv1a3I&feature=youtu.be']
      let randJohn = tmpJohn[Math.floor(Math.random()*tmpJohn.length)];
      message.reply(randJohn);        
        }
}

module.exports = johnCommand;
