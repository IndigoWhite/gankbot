const commando = require('discord.js-commando');

class thegreatergoodCommand extends commando.Command{
    constructor(client){
        super(client, {
            name : 'thegreatergood',
            group : 'thegreatergood',
            memberName: 'thegreatergood',
            description: 'The Greater Good...',
            args: [{key : 'number',prompt:'prompt' , type: 'float', default: ''}] //WE USE THE ARGUMENT HERE TO SETUP SPECIFIC BOT RESPONSES
        });
    }

    async run(message, {number}){
         let tmpGood = 
         [
            ' The greater good... https://www.youtube.com/watch?v=yUpbOliTHJY',
            ' Fuck off up the model village... https://www.youtube.com/watch?v=HWgYVeCqJ-8', 
            ' Ayespose... https://www.youtube.com/watch?v=Cun-LZvOTdw',
            ' Morning. https://www.youtube.com/watch?v=Tp05YYQtggU>' 
        ]
      

      //IF NO SUBCOMMAND IS ENTERED OR THE NUMBER IS GREATER THAN THE ARRAY SIZE
      if (!number || number > tmpGood.length-1)
      {      
          //PICK A RANDOM RESPONSE
          let randGood = tmpGood[Math.floor(Math.random()*tmpGood.length)];
          message.reply(randGood);
      }
      else
      {
          //PICK THE SPECIFIC RESPONSE
          let replyGood = tmpGood[number];         
          message.reply(replyGood);
      }    
    }
}


module.exports = thegreatergoodCommand;
