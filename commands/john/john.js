const commando = require('discord.js-commando');

class johnCommand extends commando.Command{
    constructor(client){
        super(client, 
            {
            name : 'john',
            group : 'john',
            memberName: 'john',
            description: 'Ask the bot its opinion on John',
            args: [{key : 'number',prompt:'prompt' , type: 'float', default: ''}] //WE USE THE ARGUMENT HERE TO SETUP SPECIFIC BOT RESPONSES
            });

    }

    run(message, {number})
    {
        //SET UP AN ARRAY OF RESPONSES
        let tmpJohn = 
        [
            'Here is a recent picture of @Rolfokvar - http://i.imgur.com/kfWjfcq.png', 
            'John has a unique view on Ascended Chest drops - http://i.imgur.com/1B3RAkp.png' , 
            'Johns favourite song is - https://www.youtube.com/watch?v=5NV6Rdv1a3I&feature=youtu.be'
        ]
        //IF NO SUBCOMMAND IS ENTERED OR THE NUMBER IS GREATER THAN THE ARRAY SIZE
        if (!number || number > tmpJohn.length-1)
        {      
            //PICK A RANDOM RESPONSE
            let randJohn = tmpJohn[Math.floor(Math.random()*tmpJohn.length)];
            message.reply(randJohn);
        }
        else
        {
            //PICK THE SPECIFIC RESPONSE
            let replyJohn = tmpJohn[number];         
            message.reply(replyJohn);
        }    

    }
}

module.exports = johnCommand;
