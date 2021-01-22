// https://github.com/Crack-Tush/third-assignment

//kilometerToMeter

function kilometerToMeter(kiloMeter) {
    if (kiloMeter < 0) {
        return "Invalid Input"
    }
    else {
        var meter = kiloMeter * 1000
        return meter;
    }
}
var result = kilometerToMeter(1);
console.log(result);

//budgetCalculator

function budgetCalculator(clock, phone, laptop) {
    if (clock < 0 || phone < 0 || laptop < 0) {
        return "Invalid Input";
    }
    else {
        var total = clock * 50 + phone * 100 + laptop * 500;
        return total;
    }
}
var result = budgetCalculator(1, 3, 2);
console.log(result);

//hotelCost
function hotelCost(totalDays) {
    var totalCost = 0;
    if (totalDays < 0) {
        return "Invalid Input";
    }
    else if (totalDays <= 10) {
        totalCost = totalDays * 100;
    }
    else if (totalDays <= 20) {
        var forTenDays = 10 * 100;
        var extraDays = totalDays - 10;
        var nextTenDays = extraDays * 80;
        totalCost = forTenDays + nextTenDays;
    }
    else {
        var forTenDays = 10 * 100;
        var nextTenDays = 10 * 80;
        var extraDays = totalDays - 20;
        var moreThan20Days = extraDays * 50;
        totalCost = forTenDays + nextTenDays + moreThan20Days;
    }
    return totalCost;
}

var count = hotelCost(30)
console.log(count);

// //megaFriend

function megaFriend(names) {
    var emptyStr = "";
    var longgestName;
    if (Array.isArray(names) == false || names.length === 0) {
        return "Invalid Input";
    }
    else {
        for (var i = 0; i < names.length; i++) {
            var element = names[i].length;
            if (emptyStr < element) {
                emptyStr = element;
                longgestName = names[i];
            }
        }
    }
    return longgestName;
}
var names = ["hero", "Alam", "Kuddus", "Watermelon"];
var result = megaFriend(names);
console.log(result);