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
        message.reply(" ``` 17-03-2018 \n \n Removed a load of bloated code. \n Added !nobles command```");
    }
}

module.exports = changelogCommand;
