/*
DATA & STRUCTURE TYPES

-Primitive:
  -boolen
  -undefined
  -string
  -number
  -bigInt
  -symbol
-null
-Object
-Function
*/

/*
Boolean - Has two possible values: True or False. Think of a 'On' or 'Off' switch.
*/

let on = true;
let off = false;

console.log(on);
console.log(off);

/*
NULL
  an empty Value. Think of it as an empty Container that has space to fill. NOTE: null & undefined are two different things.
*/

  let empty = null;
  console.log(empty);

/*
Undefined - no value has been assigned to a container & doesn't act as an empty container.


let unknown;
let undef = undefined;

The difference between Null & Undefined is that null is a Container with noting in instanceof; Undefined is a variable
that has never been setInterval, or hasn't been created yet.
/*
Numbers - literally just Numbers.
*/

let degrees = 82;
console.log(degrees)

let precise = 999999999999999; //16 9's in the console
console.log(precise);

let rounded = 99999999999999999999; //18 9's becomes 1 with 18 0's
console.log(rounded);
// 9,007,199,254,740,992 is the maximum numbers JS rounds up to

let notQuite = 0.2+0.1;
console.log(notQuite);

let whatIf = (0.2*10+0.1*10)/10;
console.log(whatIf);
//decimals & big number are really hard for JS to deal with

/*
Strings - represent text & are wrapped in either single or double quotes.
*/

let doubleQuote = "Double Quote";
let singleQuote = "Single Quote";
console.log(doubleQuote);
console.log(singleQuote);

let bothQuotes = 'I said, "How cool is that?"';
let bothQuotesAlt = "I said, 'It's pretty cool right?'";
console.log(bothQuotes);
console.log(bothQuotesAlt);

/*const contractions1 = "now U can can't run into any issues";
const contractions2 = 'now U can\'t run into any issues';
console.log(contractions1);
console.log(contractions2);
*/

/*
Numbers and Strings
*/
let addThese = 1050+100;
console.log(addThese);

let addTheseAlso = '1050'+'100';
console.log(addTheseAlso);
//We can use an Operation 'typeof' to return a String of the Varible's type

console.log(typeof addThese);
console.log(typeof addTheseAlso);

let addTest = 1050+'100';
console.log(addTest);
//If one is just a String, it wil combine them not perform operational computation.

/*
Objects are used to
*/


/*
Arrays are Containers that hold a List of items denoted by square brackets "[]". All items are within the brackets
regardless of the data type; separated by commas.
*/

let arrayList = ['position 1', 'position 2', 'position 3'];
console.log(arrayList);

let anotherEX = ['muffins', 'pizza toppings', true, 69, false, undefined, [], 'Oopsie'];
console.log(anotherEX);
console.log(anotherEX[0]); // square bracket notation

console.log(typeof anotherEX);

/*
ADDITION vs CONCATENATION
 JS sees "+" symbol in two different ways:
  -Use it with numbers it uses the built-in math functionality
   - Used with Strings, it will ignore the math funct & concats, or combines, the two Strings into one.
*/

let strings = 'one'+' '+'is a number';
console.log(strings);

let strings2 = 'one'+'is a number';
console.log(strings2);

let concatDiff = 1050 + '100';
console.log(concatDiff);
console.log(typeof concatDiff);


let firstName = "Joseph";
let lastName = "Lee";
let houseNumber = '7143'
let street = "N. Lyndhurst Crossing";
let city = "McCordsville";
let state = "Indiana";
let zipcode = "46055";
console.log(firstName, lastName +',', houseNumber, street +',', city + ',', state, zipcode);
 
/*
 String: Properties are qualities associated with a data type. Strings have properties, or qualities
 associated with them. the length of a String is a property.
*/ 

let myName = 'Joseph';
console.log(myName.length);

/*
  String: Methods are tools that can help us manipulate data - .property  .method()
  no parenthesis,  ()
*/

let myNameIs = 'Joseph';
console.log(myNameIs);
console.log(myNameIs.toUpperCase())

let home = 'My home is in Heaven';
console.log('Includes Method;', home.includes('Heaven'));


//CHALLENGE! (O Lord)

let sent = 'This sentence will be split into individual parts';

const str = 'This sentence will be split into individual parts';
const word = sent.split(' ');
console.log(word); 

//console.log(str.split(''));
//console.log(str.split(' '));
//console.log(str.split('ex'));

