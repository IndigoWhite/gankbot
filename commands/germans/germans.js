

const commando = require('discord.js-commando');

class GermansCommand extends commando.Command{
    constructor(client){
        super(client, {
            name : 'germans',
            group : 'germans',
            memberName: 'germans',
            description: 'Dont ask.'

        });
    }
    async run(message, args){
        message.reply("Looking for the GERMANS IN GANK Standings? https://goo.gl/qoAqcA");
    }
}

module.exports = GermansCommand;
