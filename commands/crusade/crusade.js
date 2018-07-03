const commando = require('discord.js-commando');

class crusadeCommand extends commando.Command{
    constructor(client){
        super(client, {
            name : 'crusade',
            group : 'crusade',
            memberName: 'crusade',
            description: 'How long has it been?'            

        });
    }
    async run(message, args){
        var countDownDate = new Date("Oct 23, 2015 12:00:00").getTime();
        // Get todays date and time
        var now = new Date().getTime();
        // Find the distance between now an the count down date
        var distance = countDownDate - now;
        // Time calculations for days
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var negDays = Math.floor(days * -1);

        let daysMsg = ("Aly's dagger crusade has lasted for " + negDays + " days.");   

        message.reply(daysMsg + " Here's her last playing GW2 - https://youtu.be/yDyjz5bLSEU?t=30s");
    }
}

module.exports = crusadeCommand;
