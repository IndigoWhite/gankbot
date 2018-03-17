// to run bot -  node . --harmony
const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroups([
        ['ping', 'Cunt'],
        ['legendary' , 'legendary'],
        ['builds' , 'builds'],
        ['gwbltc' , 'gwbltc'],
        ['lucid' , 'lucid'],
        ['forum' , 'forum'],
        ['racism', 'racism'],
        ['asurans', 'asurans'],   
        ['john', 'john'],
        ['chris', 'chris'],
        ['rugi'],['rugi'],
        ['changelog'],['changelog'],
        ['spy'],['spy'],
        ['thegreatergood'],['thegreatergood'],
        ['germans'],['germans'],
        ['praisejoko'],['praisejoko'],
        ['nobles'],['nobles']


]);

bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on("guildMemberAdd", member => {
    let guild = member.guild;
    guild.defaultChannel.send('Welcome new friend to the Ganker Squad discord server. We highly recommend checking out the pinned messages on each channel for information about them.')
})

bot.login('???'); //discord bot id here.