const commando = require('discord.js-commando');

class AsuransCommand extends commando.Command{
    constructor(client){
        super(client, {
            name : 'asurans',
            group : 'asurans',
            memberName: 'asurans',
            description: 'Ask the bot its opinion on Asurans;',
            args: [{key : 'number',prompt:'prompt' , type: 'float', default: ''}]
        });
    }

    async run(message, {number}){
        let insults = 
        [ 'The Asuran Race are just somewhat intelligent bobbleheads.', 
          'Asurans make great doorstops.', 
          'I dislike Asurans. I also dislike Moas.',
          'Asurans are officially the worst midget race in Tyria - https://goo.gl/4Ag3vE' 
        ];

        //IF NO SUBCOMMAND IS ENTERED OR THE NUMBER IS GREATER THAN THE ARRAY SIZE
        if (!number || number > insults.length-1)
        {      
            //PICK A RANDOM RESPONSE
            let randomInsult = insults[Math.floor(Math.random()*insults.length)];
        message.reply(randomInsult);
        }
        else
        {
            //PICK THE SPECIFIC RESPONSE
            let selectedInsult = insults[number];         
            message.reply(selectedInsult);
        }    

    }
}

module.exports = AsuransCommand;
