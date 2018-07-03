const commando = require('discord.js-commando');

class PraiseJokoCommand extends commando.Command{
    constructor(client){
        super(client, {
            name : 'praisejoko',
            group : 'praisejoko',
            memberName: 'praisejoko',
            description: 'The bot praises our might and saviour.',
            args: [{key : 'number',prompt:'prompt' , type: 'float', default: ''}] //WE USE THE ARGUMENT HERE TO SETUP SPECIFIC BOT RESPONSES
        });
    }
    async run(message, {number}){
         let tmpJoko = 
         [
            ' Praise Joko!',
            ' Praise our high and mighty Palawa Joko!'
         ]
      
         //IF NO SUBCOMMAND IS ENTERED OR THE NUMBER IS GREATER THAN THE ARRAY SIZE
        if (!number || number > tmpJoko.length-1)
        {      
            //PICK A RANDOM RESPONSE
            let randJoko = tmpJoko[Math.floor(Math.random()*tmpJoko.length)];
            message.reply(randJoko);

        }
        else
        {
            //PICK THE SPECIFIC RESPONSE
            let replyJoko = tmpJoko[number];         
            message.reply(replyJoko);
        }    
    }
}

module.exports = PraiseJokoCommand;