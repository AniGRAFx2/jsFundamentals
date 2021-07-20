/*
A Variable is a Container for sorting data.
Think of these as containers or resources we 
can call upon later. Each variable allows us to store data
which could be a Value or Function that we will want
to refeerence back to.
*/

let a = 2;

/*
-"let" is our KEYWORD
-"a" is our NAME of Variable
-"=" is ASSIGNEMNT OPERATOR
-"2" is our Variable's VALUE
*/

let b = 1;

console.log(a+b);

/*
Restricted with variables

-a Variable must begin with a letter, underscore, or "$".
-number may follow above characters, but cannot come first in the name.
-JS is case sensitive - 'hello' and 'Hello' are different Variables.
-no spaces allowed in Variable Names.
- camelCase is best practice for namimg variables in JS. This will help keep names of Variables readable. 
  EX: let myName = 'Joe';
      is easier to read than, 
    let myname = 'Joe';
*/

let startingWithLetter = 'test';
let _startingWithUnderscore = 'test';
let $startingWithDollarSign = 'test';
// let 5startingWithNumber = 'test'; // cannot start Variable name with a number

console.log(startingWithLetter, _startingWithUnderscore, $startingWithDollarSign);