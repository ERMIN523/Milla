const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    const prefix = "$"
  if (msg.content === `${prefix}help`) { 
    msg.reply('--------------------------------------');
  }
});


client.login('NzYwOTA3Mzc2NjIxNjQ5OTcy.X3S4Nw.yBLONtLvcq1KaTdS2hZpQeHru4Y');