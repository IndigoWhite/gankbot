const commando = require('discord.js-commando');

class GWBLTCCommand extends commando.Command{
    constructor(client){
        super(client, {
            name : 'gwbltc',
            group : 'gwbltc',
            memberName: 'gwbltc',
            description: 'Search GW2BLTC.com'

        });
    }
    async run(message, args){
        let wanteditem = (args);
        let replaced = wanteditem.replace(/\s/g, "%20");
        message.reply("Searching GW2BLTC.com for " + wanteditem + "\n" + " https://www.gw2bltc.com/en/tp/search?name=" + replaced);
      
    }
}

module.exports = GWBLTCCommand;
