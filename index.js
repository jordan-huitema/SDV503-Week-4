//If statements are self explanitory, if this, then that
//If statements allow you to make logic gates
//Else satements can be added to existing if stements to chain them together
//If this isnt that, then do this
//Else if is used so that if the first if statement = true the rest are ignored, if you dont use the else if you could get 2 or more outputs when you only wanted 1 (if the other statemts are also true)
//Else if also helps speed up a program so it dosnt always need to read all redundant or irelevant if statements

let light;                                  //creating light var
let obstical;                               //creating obstical var

light = null;
obstical = null;

if (light === "red") {                       //if the light is red
    console.log("hol up bud");              //stop
} else if (obstical === true) {              //if there is any type of obstical
    console.log("break check");             //stop
} else if (light === "yellow") {             //if the light is yellow
    console.log("tone it down");            //stop/sloow
} else {                                    //if prior if's are false 
    console.log("floor it");                //go
}

//shorter way of doiong it

let traffic;                                //green light is null, anything else is above 1

if (traffic > 0) {                          //if the light is anything but green
    console.log("hol up bud");              //stop
} else {                                    //if the light = null or 0 (green light)
    console.log("floor it");                //go
}


traffic = 1;                                //have a green light output a continues value of 1

if (traffic < 0) {                          //the light isnt green 
    console.log("hol up bud");              //stop
} else {                                    
    console.log("floor it");                //go
    traffic = 0;                            //reset the light
}
// ^ as long as the light is green traffic will go, if its not then there is no value and everything stops

let x = "1";
let y = 1;

console.log(x == y);                        //js converts the "1" string to a number which is the same as 1 so true
console.log(x === y);                       //js checks if the vars are the same data type before comparing values and "1" is not the same as 1 so false
console.log(x != y);                        //js converts the "1" to a number and the checks if the values are diffrnet, they are not so false
console.log(x !== y);                       //js checks if the vars are the same data type before comparing values and "1" is not the same as 1 so true


//----------------comparing objects and arrays-----------------------

let a = { isHavingFun: true};
let b = { isHavingFun: true};

console.log(a === b);                       //a and b are the same data type (array) but they are two seprate arrays so false
console.log(a == b);                        //a and b are not the same array, they have the same values in them but are independant of eachother

a = { isHavingFun: true };
b = a;                                      //setting b to be a mirror or copy of a's array

console.log(a === b);                       //because b is now a coppy of a both arrays are the same data type and are not independent so true

//-----------------Truthy and Falsy-------------
/*
A falsy value is a value that evaluates to false when converted into a boolean. There are six possible falsy values in JavaScript:
false
undefined
null
0 (numeric zero)
"" (empty string)
NaN (Not A Number)

A truthy value, on the other hand, is a value that evaluates to true when converted into a Boolean. In the case of numbers, anything that’s not 0 converts to true.
*/

traffic = null;             

if (traffic != null) {                      //if the traffic var isnt null (no value) 
    console.log("hol up bud");              //stop
} else {                                    //otherwise
    console.log("floor it");                //go
}

traffic = "litrally any value or value type";//example when var has a value

if (traffic != null) {                      //traffic dosnt have a value of null    
    console.log("hol up bud");              //stop
} else {
    console.log("floor it");
}

//if a if statement has a variable condition with no arguments it will default to var = true
let hasApples = 'true';
 if (hasApples) {                           //checks if hasApples is true
    console.log("Eat Apples");              //hasApples is true so eat apples
  } else { 
    console.log("Buy apples"); 
  };

//setting a var to = '' effectily emptys or sets it to nothing
let str = '';
 if (str) {                                 //checks if str is true (var is empty, false, null ect)
    console.log("it aint empty bud")        //print
  } else {                                  //if str is not true or dosnt have a value 
    console.log("nothin here bud")      //print 
  };

  //--------------Switch statments-----------
//

let person = 'Joe';

switch (person) {
  case 'Jane':
    console.log('Hi Jane');
    break;
  case 'John':
    console.log('Hi John');
    break;
  case 'Joe':
    console.log('Hi Joe');
    break;
  case 'Mary':
    console.log('Hi Mary');
    break;
  default:
    console.log('Hi');
    break;
};

//Putting Default Between Cases

person = 'Joe';
switch (person) {
  case 'Jane':
    console.log('Hi Jane');
    break;
  case 'John':
    console.log('Hi John');
    break;
  default:
    console.log('Hi');
    break;
  case 'Joe':
    console.log('Hi Joe');
    break;
  case 'Mary':
    console.log('Hi Mary');
    break;
};

//Multi-Criteria Case

let foo = 1;
switch (foo) {
  case 1:
  case 2:
  case 3:
  case 4:
    console.log('I like this number');
    break;
  case -1:
  case -2:
    console.log('I love this number');
    break;
  default:
    console.log('I don\'t like this number.');
};