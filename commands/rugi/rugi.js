const commando = require('discord.js-commando');

class rugiCommand extends commando.Command{
    constructor(client){
        super(client, {
            name : 'rugi',
            group : 'rugi',
            memberName: 'rugi',
            description: 'Ask the bot its opinion on Rugi;',
            args: [{key : 'number',prompt:'prompt' , type: 'float', default: ''}] //WE USE THE ARGUMENT HERE TO SETUP SPECIFIC BOT RESPONSES
        });
    }

    async run(message, {number}){
        let tmpRugi = 
        [
            'Here is Rugis latest single - https://www.youtube.com/watch?v=0doSWS0Fj24',
            'Rugi sometimes works at McDonalds when he needs a bit of spare cash - https://www.youtube.com/watch?v=A6m0M4se_QQ', 
            'Rugi was last heard saying - http://s2.quickmeme.com/img/62/62b15dec772e1c51e1c6fcbcc5c52b245bf29a8143e84ecc689e79c424b52de2.jpg'
        ]
             

      //IF NO SUBCOMMAND IS ENTERED OR THE NUMBER IS GREATER THAN THE ARRAY SIZE
      if (!number || number > tmpRugi.length-1)
      {      
          //PICK A RANDOM RESPONSE
          let randRugi = tmpRugi[Math.floor(Math.random()*tmpRugi.length)];
      message.reply(randRugi); 
      }
      else
      {
          //PICK THE SPECIFIC RESPONSE
          let replyRugi = tmpRugi[number];         
          message.reply(replyRugi);
      }    
    }
}

module.exports = rugiCommand;
