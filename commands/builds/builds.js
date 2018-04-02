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
        message.reply("Looking for a ideas for builds? Metabattle has a wide range of builds available at https://www.metabattle.com \n \n If you are looking for a meta PvE Raid or Fractals build we recommend Snow Crows website at https://snowcrows.com/ \n \n If you are looking for an introduction in PvP Jawgeous has some good videos to get you started - https://www.youtube.com/channel/UCDisMN8e0aWh6lXq7c3QaCw  ");
    }
}

module.exports = BuildsCommand;
