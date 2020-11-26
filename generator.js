var gacha = require('./gacha.json');

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

var result = generateResult();
if (result == "5 star") {
    var flip = random(1, 2);
    if (flip == 1) { // 50% chance to get childe
        console.log(result + " - " + gacha.fiveStarExclusive);
    }
    else {
        console.log(result + " - " + randomPull("fiveStarCharacters"));
    }
}
else if (result == "4 star") {
    var flip = random(1, 2);
    if (flip == 1) { // 50% chance to get rate up 4* character
        console.log(result + " - " + randomPull("fourStarRateUp"));
    }
    else {
        var flip = random(1, 2);
        if (flip == 1) { // regular 4* character (50% chance)
            console.log(result + " - " + randomPull("fourStarOtherCharacter"));
        }
        else {  // regular 4* weapon
            console.log(result + " - " + randomPull("fourStarOtherWeapon"));
        }
    }
}
else {
    console.log(result + " - " + randomPull("threeStar"));
}

function randomPull(key) {
    return gacha[key][Math.floor(Math.random() * gacha[key].length)];
}
