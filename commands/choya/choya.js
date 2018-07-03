const commando = require('discord.js-commando');

class choyaCommand extends commando.Command{
    constructor(client){
        super(client, {
            name : 'choya',
            group : 'choya',
            memberName: 'choya',
            description: 'Gank Bot does a choya!'

            //args: [{}]
        });
    }
    async run(message, args){

       
      let tmpchoya = ["I THINK I'M WAITING FOR ALY TO PROVIDE ME WITH CHOYA RESPONSES"]
      let randchoya = tmpchoya[Math.floor(Math.random()*tmpchoya.length)];
      message.reply(" I did a choya! " + randchoya);
     
      
    }
}

module.exports = choyaCommand;
