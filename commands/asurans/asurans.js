const commando = require('discord.js-commando');

class AsuransCommand extends commando.Command{
    constructor(client){
        super(client, {
            name : 'asurans',
            group : 'asurans',
            memberName: 'asurans',
            description: 'Ask the bot its opinion on Asurans;'

        });
    }

    async run(message, args){
        let insults = [ 'The Asuran Race are just somewhat intelligent bobbleheads.', 
                        'Asurans make great doorstops.', 
                        'I dislike Asurans. I also dislike Moas.',
                        'Asurans are officially the worst midget race in Tyria - https://goo.gl/4Ag3vE' ];
        let selectedInsult = insults[Math.floor(Math.random()*insults.length)];
        message.reply(selectedInsult);
    }
}

module.exports = AsuransCommand;
