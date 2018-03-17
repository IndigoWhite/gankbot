const commando = require('discord.js-commando');

class RacismCommand extends commando.Command{
    constructor(client){
        super(client, {
            name : 'racism',
            group : 'racism',
            memberName: 'racism',
            description: 'Aly and Shady are racist against Norns. And we have the proof!'

        });
    }
    async run(message, args){
        message.reply("Casual Racism provided by Shady and Aly \n http://i.imgur.com/AlfwcRI.png \n Shady's tirade would continue the next day after a conversation with a cow \n http://i.imgur.com/sKtYCqC.png ");
    }
}

module.exports = RacismCommand;
