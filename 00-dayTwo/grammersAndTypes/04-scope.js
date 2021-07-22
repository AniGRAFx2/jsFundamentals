/*
SCOPE is how comp keeps track of all of its variables in a Program.
It can be nested, where there is an Outer Scope that encloses an Inner Scope.

- Global:  Variables that are defined outside of a function.  Functions can have acess to variables 
  that are within the global scope.  Consider global scope just like we would consider Earth in 
  relation to Indiana.  There are a lot of "things" that could be happening outside of our local
  environment that could affect our state and a lot of "things" that wouldn't.
  In relation to JS, we could have multiple functions within one JS file.

  - Local:  Variables that are defined within a function. Within Indiana, 
  there are aspects that we can focus on that our Global aspect doesn't consider unless
  we make it available.  

  - As long as your application exist, your Global Scope exist.  
  Local Scope only exist when your functions are 
  called and executed.
*/

let scope = 'Earth';

let getFromGlobal = 'the Moon!';

if(true){
    let scope = 'Indiana';
    console.log(scope, 'marks the local scope.');
let kindaLocal = 'Noblesville';

if(true) {
    let scope = 'Indianapolis';
    console.log(scope, 'is the capitol of Indiana.');
  }
  console.log(scope, 'is the closest to Indiana.')

let anotherScope = 'Hello from Indianapolis.';

  console.log(`While looking outside of my very local area, I went to ${kindaLocal} at night and saw ${getFromGlobal}`);
}


/*
LET vs VAR seem to operate similiarly, have a lot of functionality (both let us declare
& initialize variables), they behave differently:
  -Var is scoped to the nearest function block
  -Let is scoped to the nearest enclosing block
*/