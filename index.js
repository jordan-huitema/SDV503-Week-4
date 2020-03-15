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

