const commando = require('discord.js-commando');

class chrisCommand extends commando.Command{
    constructor(client){
        super(client, {
            name : 'chris',
            group : 'chris',
            memberName: 'chris',
            description: 'Ask the bot its opinion on Chris;'

        });
    }

    async run(message, args){
        let tmpChris = ['Here is a recent picture of @Myon - http://i.imgur.com/nEaDqdi.jpg', 'If Chris had a theme song it would be - https://www.youtube.com/watch?v=ON-7v4qnHP8']
      let randChris = tmpChris[Math.floor(Math.random()*tmpChris.length)];
      message.reply(randChris); 
        }
}

module.exports = chrisCommand;
