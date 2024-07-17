// cocat method
// const str = "ashwin";
// const str1 = "varma";
// const result = str.concat("",   str1);
// console.log(result);

// concat method with + oprator
// let x = "as";
// let y = "wi";
// let z = (x + y);
// console.log(z);

//split method-->splits (break) a string into an array of substrings based on a specified oprator.
// const words = 'Zindginamilgidaubara';
// const result = words.split('');
// console.log(result);
// output-->
//[
//   'Z', 'i', 'n', 'd', 'g',
//   'i', 'n', 'a', 'm', 'i',
//   'l', 'g', 'i', 'd', 'a',
//   'u', 'b', 'a', 'r', 'a'
// ]

//indexOf()-->and string.prototype.lastIndexOf():Returns the index within
// the calling string of the first occcurence of a spacified values.
// const str = "ashwin vvvvarma";
// console.log(str.indexOf("v"));
// console.log(str.lastIndexOf("a"));
// console.log(str.lastIndexOf(" "));

//Working With Arrays:
//->Array.push() and Array.pop()--> add/remove elements to/from the end of an array.

// const arr = [1,2,3];
// arr.push(4);
// console.log(arr);// output is [1,2,3,4]

// const Array = ["ashwin", "Varma", "27"];
// Array.push("single");
// console.log(Array); //[ 'ashwin', 'Varma', '27', 'single' ]
// const lastElement = Array.pop(Array);
//console.log(lastElement);//[ 'ashwin', 'Varma', '27' ] 'single' is removed
//console.log(Array.length); //3

//unshift() and shift()---> Add/Remove elements to/from the beginning of an array.
// const array = [1, 2, 3, 4];
// array.unshift(10); //it add 10 from the beginning in array list
// console.log(array); // output [10,1,2,3,4]
// array.shift(); // it removes 10 from the array list
// console.log(array); //[1,2,3,4]
// console.log(array.length); // output is 4

//join()->joins all elelments of an array insto a string
// const studentName = ["ashwin", " varma"];
// const joinString = studentName.join(" mafia"); // it's adding this word in between stringList
// console.log(joinString); //ashwinmafiavarma

//map() -->creates a new array populated with the results of calling
//a provided function on every element in the calling array.

// const numb = [1, 2, 3];
// const double = numb.map( x => x * 2);
// console.log(double);//[2,4,6]

// const arr = [1, 2, 4, 8, 10];
// const triple = arr.map((x) => x * 3);
// console.log(triple);//output - [3,6,12,24,30]

// const arr1 = [2,3,4,5];
// const binary = arr1.map((x)=> x.toString(2));
// console.log(binary);

// Array Filter ---->creates a new array with all
//elements that pass the test implemented by the provided function.

// const toFindEvenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = toFindEvenNumbers.filter((x) => x % 2 === 0);
// console.log(evenNumbers); //output-[2,4,6,8,10]

// const toFindOddNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const oddNumbers = toFindOddNumbers.filter((x) => x % 2);
// console.log(oddNumbers); //output-[1,3,5,7,9]

const countryName = [
  "India",
  "Africa",
  "New Zeland",
  "America",
  "United Kingdom",
];

const findTheSmallWordsCountryName = countryName.filter(
  (countryName) => countryName.length <= 5
);
console.log(findTheSmallWordsCountryName); // Output - 'India'
//console.log(findTheSmallWordsCountryName);
