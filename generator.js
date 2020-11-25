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

console.log(result);