var config = require('./config.json');
var gacha = require('./gacha.json');

console.log("hello beep boop");

const Discord = require('discord.js');
const client = new Discord.Client();

client.login(config.token);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping' && msg.channel.id == '781076421581209601') {
    msg.reply('Pong!');
  }
});


client.on('message', msg => {

  if (msg.content === '!roll' && msg.channel.id == '781076421581209601') {

    var result = generateResult();
    if (result == "5 star") {
        var flip = random(1, 2);
        if (flip == 1) { // 50% chance to get childe
            msg.reply("⭐⭐⭐⭐⭐" + " - " + gacha.fiveStarExclusive);
        }
        else {
            msg.reply("⭐⭐⭐⭐⭐" + " - " + randomPull("fiveStarCharacters"));
        }
    }
    else if (result == "4 star") {
        var flip = random(1, 2);
        if (flip == 1) { // 50% chance to get rate up 4* character
            msg.reply("⭐⭐⭐⭐" + " - " + randomPull("fourStarRateUp"));
        }
        else {
            var flip = random(1, 2);
            if (flip == 1) { // regular 4* character (50% chance)
                msg.reply("⭐⭐⭐⭐" + " - " + randomPull("fourStarOtherCharacter"));
            }
            else {  // regular 4* weapon
              msg.reply("⭐⭐⭐⭐" + " - " + randomPull("fourStarOtherWeapon"));
            }
        }
    }
    else {
        msg.reply("⭐⭐⭐" + " - " + randomPull("threeStar"));
    }

  }

});

////////////////// helper functions

function randomPull(key) {
  return gacha[key][Math.floor(Math.random() * gacha[key].length)];
}

function random(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low)
}

function generateResult() {
  var number = random(1,1000);
  console.log("number is: " + number);
  if (number >= 1 && number <= 6) { // 0.6% chance
      return "5 star";
  }
  else if (number >= 7 && number <= 57) { // 5.1% chance 
      return "4 star";
  }
  else if (number >= 58 && number <= 1000) {
      return "3 star";
  }
  else {
      return "how tf u end up here lmao";
  }
}