const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = "?";
///onst messageArray = message.content.split(" ");
//const args = messageArray.slice(1);
const opusscript = require("opusscript");


Client.on('ready', ()=>{
    console.log(`Bot started with ${Client.guilds.size} servers with ${Client.guilds.users} members.`);

    Client.user.setPresence({ game: { name: (process.env.STATUS), type: 3 } });


  })


Client.on('message', (message)=>{
    if(!message.content.startsWith(prefix)) return;


    

  const ytdl = require('ytdl-core');
  let args = message.content.slice(prefix.length).trim().split(' ')




  if(message.content.startsWith(prefix + "kick")){
    const kickembed55 = new Discord.RichEmbed()
    .setDescription(" - Kick -")
    .setColor('RANDOM')
    .addField(`Successfully kicked user.`)
    .addField(`Kicked by: ${message.author.username}`)
    .addField(`Time kicked: ${message.createdAt}`)
   if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('```You do not have permissions to kick members.```')
   const user = message.mentions.users.first();

   // Assuming we mention someone in the message, this will return the user
   // If we have a user mentioned
   if (user) {
     // Now we get the member from the user
     const member = message.guild.member(user);
     const reasonkick = args[2]
     // If the member is in the guild
     if (member) {
       /**
        * Kick the member
        * Make sure you run this on a member, not a user!
        * There are big differences between a user and a member
        */
       member.kick(`Kicked by: ${message.author.username} with reason: ${message.reasonkick}`).then(() => {
         // We let the message author know we were able to kick the person
         message.reply({embed: kickembed55});
       }).catch(err => {
         // An error happened
         // This is generally due to the bot not being able to kick the member,
         // either due to missing permissions or role hierarchy
         message.reply('```I was unable to kick the member.```');
         // Log the error
         console.error(err);
       });
     } else {
       // The mentioned user isn't in this guild
       message.reply('```That user is not in this guild.```');
     }
   // Otherwise, if no user was mentioned
   } else {
     message.reply('```You did not mention the user to kick.```');
   
 
   }

}

if(message.content.startsWith(prefix + "ban")){
    const banembed = new Discord.RichEmbed()
    .setDescription("- Ban -")
    .setColor('RANDOM')
    .addField(`Successfully banned: ${message.user}`)
    .addField(`Banned by: ${message.author.username}`)
    .addField(`Time banned: ${message.createdAt}`)
  
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('```You do not have permissions to ban members.```')
   // if(message.author.id("306767358574198786")) return message.channel.send('```You do not have permissions to ban members.```')
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=ban
         */
        member.ban({
          reason: `Banned by: ${message.author.username} with reason: ${message.args[2]}`,
        }).then(() => {
          // We let the message author know we were able to ban the person
          message.reply({embed: banembed});
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to ban the member,
          // either due to missing permissions or role hierarchy
          message.reply('```I was unable to ban the member.```');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('```That user is not in this guild!```');
      }
    } else {
    // Otherwise, if no user was mentioned
      message.reply('```You did not mention the user to ban!```');
    }
}


if(message.content.startsWith(prefix + "play")){
    const ytdl = require('ytdl-core');
    const streamOptions = { seek: 0, volume: 1 };
    const voiceChannel = message.member.voiceChannel;
    if(!message.member.voiceChannel) return message.channel.send('```Please connect to a voice channel.```')
    if(!args[1]) return message.channel.send('Please enter a URL to play.')
    voiceChannel.join()
      .then(connection => {
        const stream = ytdl(args[1])
        const info = ytdl.getInfo(args[1]);
        const dispatcher = connection.playStream(stream, streamOptions);
        message.channel.send(`**Song now playing.**`)
      })
      .catch(console.error);

    }
  
if(message.content.startsWith(prefix + "stop")){
    if(!message.member.voiceChannel) return message.channel.send('```You need to be in a voice channel to stop music.```')
    message.member.voiceChannel.leave();
    message.channel.send("Stopped. :thumbsup:")
  
  
}
  
  if(message.content.startsWith(prefix + "disconnect")){
    if(!message.member.voiceChannel) return message.channel.send('```You must be in a voice channel to make me leave a channel.```')
    message.member.voiceChannel.leave();
    message.channel.send("**Disconnected!**")
  }
  
  if(message.content.startsWith(prefix + "connect")){
    if(!message.member.voiceChannel) return message.channel.send('```You must be in a voice channel to make me connect to a channel.```')
    message.member.voiceChannel.join();
    message.channel.send('**Connected!** :thumbsup:')
  
  }

  if(message.content.startsWith(prefix + "mu32432321321423213342te")){
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('*Nonononononono.*')
    const user = message.mentions.users.first();
      const member = message.guild.member(user);
      const giveroleto = message.mentions.users.first();
      if(member === message.author.tag) return message.channel.send('You cannot mute yourself.')
      message.member.addRole(`name`, Muted);    
      message.channel.send(':thumbsup:')

  }

  
  if(message.content.startsWith(prefix + "unmu34421`343213424te")){
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('*Nonononononono.*')
    const user = message.mentions.users.first();
      const member = message.guild.member(user);
      const giveroleto = message.mentions.users.first();
      if(member === message.author.tag) return message.channel.send('You cannot unmute yourself.')
      message.member.removeRole(`name`, Muted);    
      message.channel.send(':thumbsup:')

  }

  if(message.content.startsWith(prefix + "warn")){
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('*Nonononononono.*')
    const user = message.mentions.users.first();
    const member = message.guild.member(user);
    const warnreason = (args[1])
    const warnembed = new Discord.RichEmbed()
    .setTitle("- Warn -")
    .addField(`Warned by: ${message.author.tag}`)
    .addField(`Time warned: ${message.createdAt}`)
    .addField(`Reason: ${args[1]}`)
    .setColor('RANDOM')
    user.send({embed: warnembed})
    message.channel.send(':thumbsup:')
    .catch(console.error);

  }

  if(message.content.startsWith(prefix + "purge")){
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('```You do not have permissions to clear messages.```')
        
    let args = message.content.split(" ").slice(1);

    if(args >= 100) return message.channel.send("You can only clear 100 messages or lower.")
        
    if(!args[0]) return message.channel.send("Please type how much messages you want to delete. **Usage:** ``/clear 10``")
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`${args[0]} messages were deleted.`);
    })
  }


if(message.content.startsWith(prefix + "rps")){
  var sayings = ["I used: **Rock**", "I used: **Paper**", "I used: Scissors"] 
  var result = Math.floor((Math.random() * sayings.length) + 0);

  const args = message.content.slice(prefix.length).trim().split(/ +/g);

  const embed1 = new Discord.RichEmbed()
  .setTitle('RPS Command')
  .addField(sayings[result])
  .setColor('#c0baba')
  message.channel.send({embed: embed1})

}

if(message.content.startsWith(prefix + "joke")){
  number = 10;
  var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
  switch (random) {
      case 1: message.channel.send("What do you call a fish with no eyes?\n``Fsh.``"); break;
      case 2: message.channel.send("A ham sandwich walks into a bar and asks for beer, the bartender says:\n``Sorry, we dont serve food.``"); break;
      case 3: message.channel.send("Why couldn't the skeleton go to the dance?\n``Because he had 'no body' to dance with.``"); break;
      case 4: message.channel.send("What lights up a soccer stadium?\n``A soccer match.``"); break;
      case 5: message.channel.send("Why should you not write with a broken pencil?\n``Because it's pointless.``"); break;
      case 6: message.channel.send("Why do people say 'break a leg' when you go up stage?\n``Because everybody has a cast.``"); break;
      case 7: message.channel.send("What do you call a pig that does karate?\n``A pork chop.``"); break;
      case 8: message.channel.send("Why are there gates around cemetries?\n``Because people are dying to get in.``"); break;
      case 9: message.channel.send("When do computers overheat?\n``When they need to vent.``"); break;
      case 10: message.channel.send("Why do bees have sticky hair?\n``Because they use honeycombs.``"); break;

  }
}

if(message.content.startsWith(prefix + "roll")){
  number = 12;
  var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
  switch (random) {
      case 1: message.channel.send("Rolled! You got...\n``1``"); break;
      case 2: message.channel.send("Rolled! You got...\n``2``"); break;
      case 3: message.channel.send("Rolled! You got...\n``3``"); break;
      case 4: message.channel.send("Rolled! You got...\n``4``"); break;
      case 5: message.channel.send("Rolled! You got...\n``5``"); break;
      case 6: message.channel.send("Rolled! You got...\n``6``"); break;
      case 7: message.channel.send("Rolled! You got...\n``1``"); break;
      case 8: message.channel.send("Rolled! You got...\n``2``"); break;
      case 9: message.channel.send("Rolled! You got...\n``3``"); break;
      case 10: message.channel.send("Rolled! You got...\n``4``"); break;
      case 11: message.channel.send("Rolled! You got...\n``5``"); break;
      case 12: message.channel.send("Rolled! You got...\n``6``"); break;

  }
}



if(message.content.startsWith(prefix + "flip")){
  number = 11;
  var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
  switch (random) {
      case 1: message.channel.send("Flipped! You got...\n``Heads``"); break;
      case 2: message.channel.send("Flipped! You got...\n``Tails``"); break;
      case 3: message.channel.send("Flipped! You got...\n``Heads``"); break;
      case 4: message.channel.send("Flipped! You got...\n``Tails``"); break;
      case 5: message.channel.send("Flipped! You got...\n``Heads``"); break;
      case 6: message.channel.send("Flipped! You got...\n``Tails``"); break;
      case 7: message.channel.send("Flipped! You got...\n``Heads``"); break;
      case 8: message.channel.send("Flipped! You got...\n``Tails``"); break;
      case 9: message.channel.send("Flipped! You got...\n``Heads``"); break;
      case 10: message.channel.send("Flipped! You got...\n``Tails``"); break;
        case 11: message.channel.send("Flipped! You got...\n``Heads``"); break;

  }
}

if(message.content.startsWith(prefix + "avatar")){
  const user = message.mentions.users.first();
  const member = message.guild.member(user);
  const avatarembed = new Discord.RichEmbed()
  .setTitle(`**${message.author.username}'s avatar:**`)
  .setImage(message.author.displayAvatarURL)
  .setColor('RANDOM')
  message.channel.send({embed: avatarembed})

}

if(message.content.startsWith(prefix + "8ball")){
  var sayings = ["Yes", "No", "Maybe", "Ask again", "Doubt it", "Definitely", "Probably", "Probably not", "In your dreams", " Better not tell you now", "It is certain", "My sources say no", "As I see it, yes"]
  var result = Math.floor((Math.random() * sayings.length) + 0);

  const args = message.content.slice(prefix.length).trim().split(/ +/g);

  const embed = new Discord.RichEmbed()
  .setTitle('8ball Command')
  .addField(sayings[result])
  message.channel.send({embed: embed})

}

if(message.content.startsWith(prefix + "help")){
  const musichelp = new Discord.RichEmbed()
  .setTitle("**Help**")
  .addField('**Music commands:**\n?play\n?stop\n?connect\n?disconnect\n\n**Fun commands:**\n?flip\n?roll\n?8ball\n?joke\n?avatar\n?rps\n\n**Info Commands:**\n?info\n?credit\n?group\n\n**Moderation:**\n?kick\n?ban\n?warn\n\nMore commands coming soon!')
  .setColor('RANDOM')
  message.channel.send({embed: musichelp})

}

if(message.content.startsWith(prefix + "credit")){
  message.channel.send('I was made by: **@Pupppy44#1606**')

}

if(message.content.startsWith(prefix + "group")){
  message.channel.send('Group link: https://www.roblox.com/My/Groups.aspx?gid=4508673')

}

if(message.content.startsWith(prefix + "info")){
  message.channel.send('Savage Patrick is a private bot for **-content deleters-**. Currently in Beta.')


}










})


Client.login(process.env.BOT_TOKEN);
