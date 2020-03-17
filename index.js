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
//A switch statement is a container for case statements 
//Case statements are effetily else if statements but they can be chained if the switch container is not broken (by break;)
//Switch's with containers are a much shorter a and cleaner way of executing if and else if statments and also have extra functinallity

let person = 'Joe';

switch (person) {                           //start switch and use the var (person)
  case 'Jane':                              //if var (person) = jane
    console.log('Hi Jane');                   //print
    break;                                    //end switch
  case 'John':                              //if var (person) = john
    console.log('Hi John');                   //print
    break;                                    //end switch
  case 'Joe':                               //if var (person) = Joe
    console.log('Hi Joe');                    //print
    break;                                    //end switch
  case 'Mary':                              //if var (person) = Mary
    console.log('Hi Mary');                   //print
    break;                                    //end switch
  default:                                  //else if 
    console.log('Hi');                        //print
    break;                                    //end switch
};

//Putting Default Between Cases
//It dosnt matter where the default output is set it will still output default if other cases are not true or dont end the switch

person = '';                                //setting the person var to null
switch (person) {
  case 'Jane':
    console.log('Hi Jane');
    break;
  case 'John':
    console.log('Hi John');
    break;
  default:                                  //sets the default output of the switch to "hi" if other cases are not executed or switch is not broken (with break;)
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
//If a case dosnt contain a break to stop the switch, the switch will continue and chain the outputs until it reaches the end of the switch array ( }; )  of the switch
let foo = 1;
switch (foo) {
  case 2:                                   //this case is not printed because the var (foo) does not equal 2
    console.log("this aint it")
  case 1:
    console.log("just keep truckin");       //because this case dosnt have a break the switch will continue to print preceding case's until it finds one
  case 3:
  case 4:                                   //this case is enabled reguardless of its argument because it procedes a case without a break 
    console.log('I like this number');      //this log will be printed after the prior one (on a new console line) because it is a diffrent output
    break;                                  //the switch has found its break and will now end
  case -1:
  case -2:
    console.log('I love this number');
    break;
  default:
    console.log('I don\'t like this number.');
};

//--------------------Block-Scope Variable in Switch Statements------------
//much like if statements you can set new vars within the scope of the switch
let dob = 1998;

switch (dob){
  case 1997:{
    let age = 2020 - dob;                     
    console.log("your age is " + age);
    break;
  };
  case 1998:{
    let age = 2020 - dob;                     //setting a age var within the scope of the case (this cannot be used above/outside the case statement)
    console.log("your age is " + age);        //using the local age var to print the users age
    break;
  };
  case 1999:{
    let age = 2020 - dob;
    console.log("your age is " + age);
    break;
  };
  case 2000:{
    let age = 2020 - dob;
    console.log("your age is " + age);
    break;
  };
  default:
    console.log("You'r to old or young")
  break
};

//------Ternary Operator------
//js allows us to set arrays in varables, this effectivly puts variables inside other variables
person = {                                                    //setting the person var as an array
  name: 'tony',                                                 //adding name var to the array and setting as 'tony'
  age: 20,                                                      //adding age var to the array and setting as 20
  driver: null                                                  //adding driver var and setting as empty 
};
if (person.age >= 16) {                                       //this if statement checks the age var inside the person array and if it is above 15 it will run
  person.driver = 'Yes';                                        //this sets the driver var inside the perosn array as Yes
} else {                                                      //if the prior stement didnt run then
  person.driver = 'No';                                         //set driver var in the person array to No
};

person.driver = person.age >=16 ? 'Yes' : 'No';               //this line does the same thing as the if statements but in shorthand
//"person.age >=16" if the age var in the person array is greater than 15, "? 'Yes' : 'No'" if true set Yes if false set No

//Nesting Example

let mark = {score: 55, grade: null, desc: null};

mark.grade = (mark.score >= 85 && mark.score <= 100) ? 'A+' : mark.grade;
mark.grade = (mark.score >= 80 && mark.score <= 84) ? 'A' : mark.grade;
mark.grade = (mark.score >= 75 && mark.score <= 79) ? 'A-' : mark.grade;
mark.grade = (mark.score >= 70 && mark.score <= 74) ? 'B+' : mark.grade;
mark.grade = (mark.score >= 65 && mark.score <= 69) ? 'B' : mark.grade;
mark.grade = (mark.score >= 60 && mark.score <= 64) ? 'B-' : mark.grade;
mark.grade = (mark.score >= 55 && mark.score <= 59) ? 'C+' : mark.grade;
mark.grade = (mark.score >= 50 && mark.score <= 54) ? 'C' : mark.grade;
mark.grade = (mark.score >= 40 && mark.score <= 49) ? 'D' : mark.grade;
mark.grade = (mark.score >= 0 && mark.score <= 39) ? 'E' : mark.grade;

mark.desc = mark.score >= 75 && mark.score <= 100 ? 'Pass with Distinction': mark.desc;
mark.desc = mark.score >= 60 && mark.score <= 74 ? 'Pass with Merit': mark.desc;
mark.desc = mark.score >= 50 && mark.score <= 59 ? 'Pass': mark.desc;
mark.desc = mark.score >= 0 && mark.score <= 49 ? 'Fail': mark.desc;

console.log("Result = "+ mark.grade);
console.log(mark.desc);