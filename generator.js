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

// maybe have textfiles of characters rather than arrays idk or put in config.json
var fiveStarCharacters = ['Keqing', 'Mona', 'Qiqi', 'Diluc', 'Jean'];
var fiveStarExclusive = 'Childe';

var fourStarRateUp = ['Diona', 'Ningguang', 'Beidou'];
var fourStarOtherCharacter = ['4* character1', '4* character2'];
var fourStarOtherWeapon = ['4* weapon1', '4* weapon2'];

var threeStar = ['3* weapon1', '3* weapon2'];


var result = generateResult();
if (result == "5 star") {
    var flip = random(1, 2);
    if (flip == 1) { // 50% chance to get childe
        console.log(result + " - " + fiveStarExclusive);
    }
    else {
        console.log(result + " - " + fiveStarCharacters[Math.floor(Math.random() * fiveStarCharacters.length)] );
    }
}
else if (result == "4 star") {
    var flip = random(1, 2);
    if (flip == 1) { // 50% chance to get rate up 4* character
        console.log(result + " - " + fourStarRateUp[Math.floor(Math.random() * fourStarRateUp.length)] );
    }
    else {
        var flip = random(1, 2);
        if (flip == 1) { // regular 4* character
            console.log(result + " - " + fourStarOtherCharacter[Math.floor(Math.random() * fourStarOtherCharacter.length)] );
        }
        else {  // regular 4* weapon
            console.log(result + " - " + fourStarOtherWeapon[Math.floor(Math.random() * fourStarOtherWeapon.length)] );
        }
    }
}
else {
    console.log(result + " - " + threeStar[Math.floor(Math.random() * threeStar.length)] );
}
