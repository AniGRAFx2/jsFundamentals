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

//Ctrl-ALT-N will runCode Runner (Windows)
// CTRL-OPTION-N on a MAC.

/*
KEYWORDS

var, let, const

 -var: 'old' keyword fro VVariables. We won't use so much but it's still used depending on Project
 & when it was made. We'll focus on 'let' & 'const' instead.

 -let: 'new' keywprd for Variables that introduces in ES6 *newest version of ECMAScript, a 
  standardization of JS.

 - const: 'new', and declares an unchageable, or constant, Variable. Only limit is that 
 once they're declared/assigned, their value will NEVER change.

  */

 var variable = 'var variable';

 /*
   Declarations on LEFT SIDE of assigned Operator (=) within a Variable: "let x"
   Initialiazations are the RIGHT SIDE of assignment Operator (=) and sets the Valiue of the Variable.
   EX: let x = 10
   10 would be the initialization
*/   

//"let x;"  //This not Valid
//console.log(x);
//console.log('Declaration:',x);


let x = 10;
console.log(x);

x=10;
console.log(x);

x=33;
console.log(x);

let y = 'Hello';
console.log('Both:', x, y);

let today = 'Great!';
const efa = 'Wonderful!';
console.log(today, efa);

today = 'Awesome!';
console.log(today, efa);

efa = 'Super!';
console.log(today, efa);

//const example = 'Initialize';
//example = 'Testing';
//console.log(example);




