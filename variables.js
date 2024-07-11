const accountHolderName = "Rishi";
let cityName = "Bhopal";
let accountNumber = "23231122324567";
var lockerNumber = "32";

// we're not using var because of issue in block scope or functional scope...

console.log(accountHolderName);
console.log(cityName);
console.log(lockerNumber);
console.log(accountNumber);

console.table([accountHolderName, cityName, lockerNumber, accountNumber]);

cityName = "indore";
accountNumber = "12345657";
lockerNumber = "21";
console.table([accountHolderName, accountNumber, cityName, lockerNumber]);
