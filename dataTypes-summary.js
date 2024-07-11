//There are two types of dataTypes
//1.Primitive Data Types
//2.Non Primitive Data Types

// Primitive Data Types : Primitive data types in programming refer to the most basic data types
// that are built into the programming language itself. These types are directly managed by
// the underlying hardware of the computer, and they typically represent simple values.
//In JavaScript, there are six primitive data types:

// 1. **Number**: Represents both integer and floating-point numbers.
//In JavaScript, all numbers are represented as 64-bit floating-point numbers (double precision).

//Ex-
// let num = 10; // Integer number
// let pi = 3.14; // Floating-point number

// 2. **String**: Represents sequences of characters, enclosed in single quotes (`'`) or /
//double quotes (`"`). Strings are immutable in JavaScript.

// Ex-
// let name = 'Alice';
// let message = "Hello, World!";

// 3. **Boolean**: Represents a logical value indicating true or false.

// Ex
// let isValid = true;
// let isFinished = false;

// 4. **Undefined**: Represents a variable that has been declared but has not been
// assigned a value. Variables are initialized with `undefined` by default.

// Ex-
// let x;
// console.log(x); // Outputs: undefined

// 5. **Null**: Represents the intentional absence of any object value.
// It is often used to signify that a variable intentionally has no value.

// Ex-
// let user = null;

// 6. **Symbol**: Represents a unique identifier. Symbols are often used as keys
//for object properties when you want to avoid name collisions.

//Ex-
// const key1 = Symbol('key1');
// const key2 = Symbol('key2');

//---------------------------------------------------------------------------------------
// Primitive data types are immutable, meaning their values cannot be changed.
//Operations on primitives do not alter the original value; instead, they create and
// return a new value.

// These data types are fundamental building blocks in programming and are used extensively
// in variable assignments, function parameters, and other data manipulations within programs.
//-------------------------------------------------------------------------------------------

// Non-primitive data types, also known as reference types, are types of data that are not directly stored in the variable's allocated memory location. Instead, they are stored as references (or pointers) to the actual data stored somewhere else in memory. These types are typically more complex and can hold collections of values and more sophisticated entities. In JavaScript, non-primitive data types include:

// 1. **Object**: Objects in JavaScript are collections of key-value pairs, where keys are strings (or symbols) and values can be any data type, including other objects. Objects are used to represent more complex entities and are mutable, meaning their properties can be changed.

//   Ex-
//    let person = {
//        name: 'Alice',
//        age: 30,
//        address: {
//            city: 'New York',
//            country: 'USA'
//        }
//    };

// 2. **Array**: Arrays are ordered collections of values, where each value is identified by an index.
//Arrays in JavaScript can hold values of any data type, and they are mutable (you can change their elements).

//    Ex-
//    let numbers = [1, 2, 3, 4, 5];
//    let fruits = ['apple', 'banana', 'orange'];
//    ```

// 3. **Function**: Functions in JavaScript are first-class objects,
//meaning they can be assigned to variables, passed as arguments to other functions, /
//returned from functions, and stored in data structures.

//    Ex-
//    function greet(name) {
//        console.log(`Hello, ${name}!`);
//    }

// 4. **Date**: Represents a specific point in time, with methods for
//retrieving and manipulating date and time information.

//    Ex-
//    let today = new Date();

// 5. **RegExp (Regular Expression)**: Represents a pattern used for matching character
//combinations in strings. Regular expressions provide powerful pattern-matching capabilities.

//   Ex-
//    let pattern = /[a-z]+/;

// 6. **Map**: A collection of key-value pairs where keys can be of any data type. Maps are iterable and maintain the insertion order of elements.

//    Ex-
//    let myMap = new Map();
//    myMap.set('key1', 'value1');

// 7. **Set**: A collection of unique values of any data type. Sets are iterable and
//can be used to eliminate duplicate values from an array.

//Ex-
//let mySet = new Set([1, 2, 3, 2, 1]);

// Non-primitive data types are more flexible and can contain multiple values or
//even other non-primitive types within them. They are referenced by their memory address
// rather than being stored directly in a variable, which allows them to be more dynamic and
//versatile in how they are used and manipulated within a program.
