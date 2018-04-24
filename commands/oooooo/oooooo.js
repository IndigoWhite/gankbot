const commando = require('discord.js-commando');

class ooooooCommand extends commando.Command{
    constructor(client){
        super(client, {
            name : 'oooooo',
            group : 'oooooo',
            memberName: 'oooooo',
            description: 'Access a random quaggan'

        });
    }
    async run(message, args){
         let tmpoooooo = ['404', 'aloha', 'attack', 'bear', 'bowl', 'box', 'breakfast', 'bubble', 'cake', 'cheer', 'coffee', 'construction', 'cow', 'cry', 'elf', 'ghost', 'girl', 'hat', 'helmut', 'hoodie-down', 'hoodie-up', 'killerwhale', 'knight', 'lollipop', 'lost', 'moving', 'party', 'present', 'quaggan', 'rain', 'scifi', 'seahawks', 'sleep', 'summer', 'vacation'];
         let randoooooo = tmpoooooo[Math.floor(Math.random()*tmpoooooo.length)] ;
         let actualoooooo = 'https://static.staticwars.com/quaggans/' + randoooooo + '.jpg';
        
         message.reply('RANDOM QUAGGAN REQUESTED ' + actualoooooo);
         
      
      
    }
}

module.exports = ooooooCommand;

