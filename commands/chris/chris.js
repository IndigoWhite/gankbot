const commando = require('discord.js-commando');

class chrisCommand extends commando.Command{
    constructor(client){
        super(client, {
            name : 'chris',
            group : 'chris',
            memberName: 'chris',
            description: 'Ask the bot its opinion on Chris;',
            args: [{key : 'number',prompt:'prompt' , type: 'float', default: ''}]

        });
    }

    async run(message, {number})
    {
        let tmpChris = 
        [
            'Here is a recent picture of @Myon - http://i.imgur.com/nEaDqdi.jpg', 
            'If Chris had a theme song it would be - https://www.youtube.com/watch?v=ON-7v4qnHP8'
        ]

        //IF NO SUBCOMMAND IS ENTERED OR THE NUMBER IS GREATER THAN THE ARRAY SIZE
        if (!number || number > tmpChris.length-1)
        {      
            //PICK A RANDOM RESPONSE
            let randChris = tmpChris[Math.floor(Math.random()*tmpChris.length)];
            message.reply(randChris); 
        }
        else
        {
            //PICK THE SPECIFIC RESPONSE
            let selectedChris = tmpChris[number];         
            message.reply(selectedChris);
        }    
    }
}

module.exports = chrisCommand;
