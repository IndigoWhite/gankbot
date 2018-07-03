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
        message.reply("If you are looking for a basic build to run various things, Metabattle has a wide range of builds available at https://www.metabattle.com \n Including a new Open World section - https://metabattle.com/wiki/Open_World \n \n If you are looking for a meta PvE Raid or Fractals build we recommend Snow Crows website at https://snowcrows.com/ \n \n If you are looking for a PvP build, GodsOfPvP have a nice website - https://www.godsofpvp.net/ ");
    }
}

module.exports = BuildsCommand;
