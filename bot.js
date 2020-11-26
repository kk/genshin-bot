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

var valid = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

client.on('message', msg => {

  if (msg.content.startsWith('!roll') && msg.channel.id == '781076421581209601') {
    var split = msg.content.split(" ");
    console.log(split);
    if (split.length > 1) {
        if (valid.includes(split[1])) {
          msg.reply(pull(split[1]));
        }
        else {
          msg.reply("Pulls can only be between 1 - 10");
        }
    }
    else {
      msg.reply(pull(1));
    }
    
  }
});

////////////////// helper functions

function pull(pulls) {
  var response = "";
  var pity = true; // 4* pity
  if (pulls > 1) response += "\n";
  for (i = 0; i < pulls; i++) {
      var result = generateResult();
      if (pity && (i == 9)) result = "4 star";

      if (result == "5 star") {
          var flip = random(1, 2);
          if (flip == 1) { // 50% chance to get childe
              response += ("⭐⭐⭐⭐⭐" + " - " + gacha.fiveStarExclusive);
          }
          else {
              response += ("⭐⭐⭐⭐⭐" + " - " + randomPull("fiveStarCharacters"));
          }
      }
      else if (result == "4 star") {
          pity = false;
          var flip = random(1, 2);
          if (flip == 1) { // 50% chance to get rate up 4* character
              response += ("⭐⭐⭐⭐" + " - " + randomPull("fourStarRateUp"));
          }
          else {
              var flip = random(1, 2);
              if (flip == 1) { // regular 4* character (50% chance)
                  response += ("⭐⭐⭐⭐" + " - " + randomPull("fourStarOtherCharacter"));
              }
              else {  // regular 4* weapon
                  response += ("⭐⭐⭐⭐" + " - " + randomPull("fourStarOtherWeapon"));
              }
          }
      }
      else {
          response += ("⭐⭐⭐" + " - " + randomPull("threeStar"));
      }
  
      if (i != (pulls - 1)) {
          response += "\n";
      }
  }

  return response;
}

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