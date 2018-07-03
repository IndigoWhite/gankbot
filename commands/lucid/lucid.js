const commando = require('discord.js-commando');

class LucidCommand extends commando.Command{
    constructor(client){
        super(client, {
            name : 'lucid',
            group : 'lucid',
            memberName: 'lucid',
            description: 'Gank Bot does a Lucid!',
            args: [{key : 'number',prompt:'prompt' , type: 'float', default: ''}] //WE USE THE ARGUMENT HERE TO SETUP SPECIFIC BOT RESPONSES
        });
    }
    async run(message, {number})
    {
      let tmpLucid = 
      [
          'https://i.makeagif.com/media/12-14-2015/qXzZVA.gif', 
          'https://www.youtube.com/watch?v=_CBLDA86LMQ', 
          'http://www.gifbin.com/bin/112014/1417109336_guy_falls_off_roof.gif', 
          'https://www.youtube.com/watch?v=FunoDTsdr2E', 
          'https://giant.gfycat.com/InfinitePointlessDeviltasmanian.webm  maybe not this time.', 
          'https://www.youtube.com/watch?v=bvim4rsNHkQ' 
        ]
      
      //IF NO SUBCOMMAND IS ENTERED OR THE NUMBER IS GREATER THAN THE ARRAY SIZE
      if (!number || number > tmpLucid.length-1)
      {      
          //PICK A RANDOM RESPONSE
          let randLucid = tmpLucid[Math.floor(Math.random()*tmpLucid.length)];
          message.reply(" I did a Lucid! " + randLucid);
      }
      else
      {
          //PICK THE SPECIFIC RESPONSE
          let replyLucid = tmpLucid[number];         
          message.reply(replyLucid);
      }   
      
    }
}

module.exports = LucidCommand;
