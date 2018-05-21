const Discord = require('discord.js');
   
   var bot = new Discord.Client();
   var prefix = ("B");
   
   bot.on('ready', () => {
       console.log("Prêt à travailler chef ");
   });
   
   bot.on('ready', () => {
       bot.user.setActivity(" Bhelp | HabbaVertGames")
       });
   
   bot.login(process.env.TOKEN);
   
   bot.on('message', message => {
       if (message.content === prefix + "help"){
           message.channel.sendMessage("Les commandes : Bhelp , Binfodiscord");
           console.log('help demandé');
       }
   
       if(message.content === prefix + "infodiscord")
       var embed = new Discord.RichEmbed()
       .setDescription("Information du Discord")
       .addField("Nom du discord", message.guild.name)
       .addField("Utilisateur sur le discord", message.guild.memberCount)
       .setColor("0x0000FF")
    message.channel.sendEmbed(embed);
   
   });
