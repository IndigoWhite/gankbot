const commando = require('discord.js-commando');

class BuildsCommand extends commando.Command{
    constructor(client){
        super(client, {
            name : 'builds',
            group : 'builds',
            memberName: 'builds',
            description: 'The bot provides links to Metabattle and Quantifys sites'

        });
    }
    async run(message, args){
        message.reply("Looking for a build? Metabattle has a wide range of builds available at https://www.metabattle.com If you are looking for a PvE Raid build we recommend Quantifys website at http://qtfy.eu/ Both sites are usually kept up to date.");
    }
}

module.exports = BuildsCommand;
