const commando = require('discord.js-commando');

class tybaltCommand extends commando.Command{
    constructor(client){
        super(client, {
            name : 'tybalt',
            group : 'tybalt',
            memberName: 'tybalt',
            description: 'Ask the bot to do his best Tybalt Impression.'

        });
    }

    async run(message, args){
           message.reply(" FRESH GENDARRAN APPLES HERE! https://www.youtube.com/watch?v=v35pgnZ9wOg \n \n Welcome Initiate. \n It seems you are new here or requested information that would help a fellow player. Here is our current docket of information. \n \n BOTS, This discord has a couple of bots, all are available to use by anyone here. If you think you are going to spam a lot of commands please use the #botstuff channel. \n Gankbot has a load of simple commands used by our guild. Type !help for more information. \n GW2Bot has many commands specifically used for Guild Wars 2 information. Type $help for more information. \n We also have the Go4Liftoff bot, it's primary use is to automatically list upcoming space launches. Type .help for more information. \n \n For a list of resources/content creators for newer/returning Guild Wars 2 players it's worth checking out this reddit thread - https://www.reddit.com/r/Guildwars2/comments/8n95xy/gw2_content_creators_where_to_go_for_cool_videos/  ");        
    }
}

module.exports = tybaltCommand;
