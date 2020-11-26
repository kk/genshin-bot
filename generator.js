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

function pull(pulls) {
    var response = "";
    var pity = true; // 4* pity
    for (i = 0; i < pulls; i++) {
        var result = generateResult();
        if (pity && (i == 9)) result = "4 star";

        if (result == "5 star") {
            var flip = random(1, 2);
            if (flip == 1) { // 50% chance to get childe
                response += (result + " - " + gacha.fiveStarExclusive);
            }
            else {
                response += (result + " - " + randomPull("fiveStarCharacters"));
            }
        }
        else if (result == "4 star") {
            pity = false;
            var flip = random(1, 2);
            if (flip == 1) { // 50% chance to get rate up 4* character
                response += (result + " - " + randomPull("fourStarRateUp"));
            }
            else {
                var flip = random(1, 2);
                if (flip == 1) { // regular 4* character (50% chance)
                    response += (result + " - " + randomPull("fourStarOtherCharacter"));
                }
                else {  // regular 4* weapon
                    response += (result + " - " + randomPull("fourStarOtherWeapon"));
                }
            }
        }
        else {
            response += (result + " - " + randomPull("threeStar"));
        }
    
        if (i != (pulls - 1)) {
            response += "\n";
        }
    }

    return response;
}


console.log(pull(3));

function randomPull(key) {
    return gacha[key][Math.floor(Math.random() * gacha[key].length)];
}
