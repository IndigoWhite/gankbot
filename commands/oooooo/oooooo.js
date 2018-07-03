const commando = require('discord.js-commando');

class ooooooCommand extends commando.Command{
    constructor(client){
        super(client, {
            name : 'oooooo',
            group : 'oooooo',
            memberName: 'oooooo',
            description: 'Access a random quaggan',
            args: [{key : 'name',prompt:'prompt' , type: 'string', default: ''}] //WE USE THE ARGUMENT HERE TO SETUP SPECIFIC BOT RESPONSES

        });
    }
    async run(message, {name}){
         let tmpoooooo = ['404', 'aloha', 'attack', 'bear', 'bowl', 'box', 'breakfast', 'bubble', 'cake', 'cheer', 'coffee', 'construction', 'cow', 'cry', 'elf', 'ghost', 'girl', 'hat', 'helmut', 'hoodie-down', 'hoodie-up', 'killerwhale', 'knight', 'lollipop', 'lost', 'moving', 'party', 'present', 'quaggan', 'rain', 'scifi', 'seahawks', 'sleep', 'summer', 'vacation'];
        //WE USE A FOR ARRAY HERE TO IRERATE THROUGH THE ARRAY BECAUSE WE ARE TRYING TO MATCH STRINGS.
            for (var i = 0, len = tmpoooooo.length; i < len; ++i) {
                if (name.indexOf(tmpoooooo[i]) != -1) 
                {
                  let randooo = tmpoooooo[i];
                  let actualooo = 'https://static.staticwars.com/quaggans/' + randooo + '.jpg';
                  message.reply('YOU REQUESTED THE SPECIFC QUAGGAN - ' + name + actualooo);
                }
            }
        
        if (!name)
        {      
            //PICK A RANDOM RESPONSE
            let randoooooo = tmpoooooo[Math.floor(Math.random()*tmpoooooo.length)] ;
            let actualoooooo = 'https://static.staticwars.com/quaggans/' + randoooooo + '.jpg';
            message.reply('RANDOM QUAGGAN REQUESTED ' + actualoooooo);
        }     
    }
}

module.exports = ooooooCommand;

