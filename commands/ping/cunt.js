const commando = require('discord.js-commando');

class PingCommand extends commando.Command{
    constructor(client){
        super(client, {
            name : 'cunt',
            group : 'ping',
            memberName: 'cunt',
            description: 'The bot says hello'

        });
    }
    async run(message, args){
         let tmpCunt = [' you cunt',
                        ' uwotm8?', 
                        ' how unsavoury of you.',
                        ' CONGRATULATIONS YOU ARE THE 1,000,000TH PERSON TO ENTER THAT COMMAND! CLICK HERE TO CLAIM YOUR FREE IPOD! <https://goo.gl/SsAhv>', 
                        ' Did you know Indi only uses this command to make sure I am on. #gankbotfacts',
                        ' I am currently finding a new AFK spot, I will be back with an insult in 5 minutes',
                        ' I wish people would stop provoking me.',
                        ' Are you looking for my mate Kev? https://www.youtube.com/watch?v=yuwprXAaSv0',
                        ' Such a word has a fantastic history! Would you like to know more? https://www.youtube.com/watch?v=3GAbStTKFIw',
                        ' Dont make me go all cockney on your ass! https://www.youtube.com/watch?v=juIvwwPlCus',
                        ' Its just a game to you - https://www.youtube.com/watch?v=Z-IYk7YVW80',
                        ' My favourite TV show is Game Of Cunts - https://www.youtube.com/watch?v=jvK0rahXZgw',
                        ' Need help pronouncing that word? - https://www.youtube.com/watch?v=bs8Yjh45rhs']
      let randCunt = tmpCunt[Math.floor(Math.random()*tmpCunt.length)];
      message.reply(randCunt);
    }
}

module.exports = PingCommand;