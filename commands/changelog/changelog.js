const commando = require('discord.js-commando');

class changelogCommand extends commando.Command{
    constructor(client){
        super(client, {
            name : 'changelog',
            group : 'changelog',
            memberName: 'changelog',
            description: 'See the latest documented changes to the bot.'

        });
    }
    async run(message, args){
        message.reply(" ``` 06-07-2018 \n \n Added sub commands on the random responders, like !cunt and !john. \n Add a number after the command to get a specific response from the bot \n For example !cunt 3```");
    }
}

module.exports = changelogCommand;
