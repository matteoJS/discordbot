const Discord = require('discord.js');
const yt = require('youtube-audio-stream');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.indexOf('pourparlers') > -1) {
    msg.reply('Article 8 du code des pirates - Une personne placé sous la protection des pourparlers devra être conduite saine et sauve au capitaine ennemi pour entamer les négociations.');
  }
  if (msg.content.indexOf('!play ') > -1) {
    let s = msg.content.substr(5);
    let channel = msg.guild.channels.filter(function (channel) {return (channel.type == 'voice');}).first();
    channel.join().then(function (conn) {
      let stream = yt(s);
      conn.playStream(stream).on('end', function () {conn.disconnect()});
    });
    msg.reply('Let\'s go !'); 
  }
});

client.login('')
