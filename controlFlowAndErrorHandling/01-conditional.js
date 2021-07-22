/*
CONDITIONALS

FALSY VALUES is a Value tht 's considered false when encountered in a boolean context. Six falsy values:
   - false
   - 0
   - "", '', `
   - null 
   - undefined
   -NaN (not a number)

   This means whenevr JS is expecting a boolean value & gets one of thz 6, it's evaluated as false.

   side note: There are also TRUTHY VALUES in JS which tend to be much less limited. EX: true, {}. [],
    42 (any number), 3.14 (any decimal), "false" (any non-empty string)
    */

    // We'll test if fractions are "truthy"


    /*
    IF STATEMENTS

    When using comparison operators, we typically are asking if we can move on to the next section of code.
    "If" something is true, "do this thing".
    */

    
    // keyword - expression
    if (true) {
    // code to run if expression evaluates to "true" 
    console.log('Truthy Test');   
    }

    if(false){
    console.log('Falsy Test');
    }

    let light = "on";

    if(light == "on") {
        console.log('The light is on');
    }

    let weather = 65;
    let rain = 'true'
    if(weather <= 70 && rain == true){
        console.log('Maybe wear a jacket')
    }

   
    //CHALLENGE

   
    
    let batman = 'is the night';
    let bruce = 'true';
    if(bruce && batman == 'is the night') {
        console.log('Batman')
    }

    let batman = 'is the night';
    let bruce = false;
// "!bruce" [if not] will check that bruce is not equal to true
    if(!bruce && batman != 'why so serious') {
        console.log('Batman!')
    }

/*
IF ELSE can think of this as providing an answer if our condition evaluates to be true & also if it ends up being false
*/

let today = 68;

if(today <70) {
    //           string interpolation
    console.log(`It's ${today}, wear a jacket`)
} else {
    console.log(`It's ${today}. No jacket needed!`);
}


/*
ELSE IF is a condition that will be checked if the above condition was not met. 
Keep track of which conditions needs to go where. Stricter ones need to be first or higher;
loser ones lower
*/

let cooktime = 40;


if(cooktime === 45) {
    console.log('Let us feast!');
} else if(cooktime >= 30) {
    console.log(`It has only been ${cooktime} minutes. Wait another 5-15 minutes.`);
} else if(cooktime >= 20) {
    console.log(`It has only been ${cooktime}minutes. Wait another 10-25 minutes,`);
} else {
    console.log(`It has only been ${cooktime} minutes. Perhaps we could at least try cooking it...`);
}


let cooktime = 25;

if(cooktime === 45) {
    console.log('Let us feast!');
} else if(cooktime >= 30) {
    console.log(`It has only been ${cooktime} minutes. Wait another 5-15 minutes.`);
} else if(cooktime >= 20) {
    console.log(`It has only been ${cooktime}minutes. Wait another 10-25 minutes,`);
} else {
    console.log(`It has only been ${cooktime} minutes. Perhaps we could at least try cooking it...`);
}

// CHALLENGE!

let age2 = 19

if(age2 >= 25) {
    console.log(`You can rent a car!`);
} else if(age2 >= 21) {
    console.log(`You can drink`);
} else if(age2 >= 18) {
    console.log(`You can vote!`);
} else {
    console.log("Sorry, you are too young to do anything");
}    

/*
TENARIES are if/else statements but they look weird.
*/

let myName = 'Joe';

if(myName === 'Joe') {
    console.log(`Hi, ${myName}!`);
} else {
    console.log(`Not sure I know ${myName}`);
}

// condition "?" if true: else result

myName === 'Joe' ? console.log(`Hi, ${myName}!`) : console.log(`Not sure I know ${myName}`);
console.log(`Not sure I know ${myName}`);






/*

SWITCH STATEMENTS executes a block of code, depending on different cases

*/

let instructor = 'Jerome';

switch(instructor){
    // if Instructor matches === 'Jerome'
    case 'Jerome':
      console.log(`${instructor} is a part of the Web Development Team`);
    // }
    break;
    case 'Summer':  
        console.log(`${instructor} is a part of the Web Development Team`);
    break;  
    case 'Josh':
        console.log(`${instructor} is a part of the Software Development Team`);
        break;
// else {} is default behavior if none are met    
    default:
        console.log(`Sorry, I can't find what ${instructor} teaches at this time`);
    // }
    break;        
}  

let staff = 'Jerome';

switch(staff) {
    case 'Jerome':
    case 'Summer':
    case 'Levi':
    case 'Adam':
    case 'Hustin':
        console.log(`${staff} is a part of the Web Development Team`);
        break;
    case 'Josh':
    case 'Amanda':
    case 'Casey':
    case 'Junior':
       console.logh(`${staff} is a part of the Software Development Team`);
       break;
       default:
           console.log(`Sorry, I can't find what ${staff} teaches`);
        break;
}

let switchConditional = 'example';

switch(typeof switchConditional == 'string' || typeof switchConditional == 'boolean') {
    case true:
        console.log(`${switchConditional} is a string or boolean`);
        break;
        default:
        console.log(`${switchConditional} is NOT a string or boolean`);   

}
// When we use "||"[or] only one side of the || needs to be true for the expression to be true

// When we sue &&[and] BOTH sides of the && needs to be true for the expression to be true.


//Take Home Challenge!
/*
//! Challenge 2: Take Home Challenge
/*  
Create a switch statement that takes in a value (number) that represents a grade.  If it is True, 
console log that they are passing with the correct letter grade.
*   A: 89-100
*   B: 79-88
*   C: 66-78
*   D: 59-65
*   F: 0-59
*/

let grade = 80;

switch (true) {
    case grade >= 89:
      console.log(`Your grade is ${grade}, you have an A`);
      break;
    
    case grade >= 79:
      console.log(`Your grade is ${grade}, you have a B`);    
      default:
          break;
    
    case grade >= 66:
      console.log(`Your grade is ${grade}, you have an C`);
          break;  
          
    case grade >= 59:
        console.log(`Your grade is ${grade}, you have an D`); 
          break;  
          
    case grade >= 0:
        console.log(`Your grade is ${grade}, you have an F`); 
          break;          

}

let character = "";
if(character === 'Michael') {
    console.log(`That\'s what she said!`);
} else if(characrter === 'Dwight') {
    console.log(`It\s not weed! It\'s hemp!`);
} else if(character === 'Jim') {
    console.log(`Bears. Beets. Battlestar Galactica.`);
} else {
    console.log(`*slow camers zoom*`);
}

// ! TENARY
let character = "Michael";

if(character === 'Michael') {
    console.log(`That\'s what she said!`);
} else if(characrter === 'Dwight') {
    console.log(`It\'s not weed! It\'s hemp!`);
} else if(character === 'Jim') {
    console.log(`Bears. Beets. Battlestar Galactica.`);
} else {
    console.log(`*slow camers zoom*`);
}

// ! SWITCH
// ! Ternary
let character = "";
"Michael" ? console.log("That's what she said!") :
"Dwight" ? console.log("It's not weed, its hemp!") :
"Jim" ? console.log("Bears. Beats. Battlestar Galactica") :
console.log("*slow camera zoom*");
// ! Switch
//Solution 1
let character = "";
switch(character) {
  case "Michael":
    console.log(`That's what she said ${character}`);
    break;
  case "Dwight":
    console.log(`It's not weed its hemp! ${character}`);
    break;
  case "Jim":
    console.log(`Bears. Beats. Battlestar Galactica ${character}`);
    break;
  default:
    console.log('*slow camera zoom*');
}
//Solution 2 (simpler)
let character = "Michael";
switch(character) {
  case "Michael":
    console.log(`That's what she said (${character})`);
    break;
  case "Dwight":
    console.log(`It's not weed its hemp! ${character}`);
    break;
  case "Jim":
    console.log(`Bears. Beats. Battlestar Galactica ${character}`);
    break;
  default:
    console.log('*slow camera zoom*');
}

