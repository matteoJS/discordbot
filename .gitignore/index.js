const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('NTExMjE0NDE5MzI2MjcxNDk5.Dsnq5Q.IDt5A7kU8AbIKOwRecUJX9ng0kg')
