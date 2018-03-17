const commando = require('discord.js-commando');

class ForumCommand extends commando.Command{
    constructor(client){
        super(client, {
            name : 'forum',
            group : 'forum',
            memberName: 'forum',
            description: 'The bot provides a link to the Gank forums'

        });
    }
    async run(message, args){
        message.reply("Looking for the Gank forums? http://gankersquad.proboards.com/");
    }
}

module.exports = ForumCommand;
