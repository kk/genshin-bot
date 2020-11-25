var config = require('./config.json');

console.log("hello beep boop");

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping' && msg.channel.id == '781076421581209601') {
    msg.reply('Pong!');
  }
});

client.login(config.token);