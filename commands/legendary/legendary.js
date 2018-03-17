const commando = require('discord.js-commando');

class LegendaryCommand extends commando.Command{
    constructor(client){
        super(client, {
            name : 'legendary',
            group : 'legendary',
            memberName: 'legendary',
            description: 'The bot provides a link to the Gank legendary google drive sheet.'

        });
    }
    async run(message, args){
        message.reply("Looking for the legendary spreadsheet? Here's the link you forgetful cunt. https://docs.google.com/spreadsheets/d/1jZvt1_WbNoFifOEcCQQlfCBbWE4sFV6IJz-oyK4EdRk/edit#gid=0");
    }
}

module.exports = LegendaryCommand;
