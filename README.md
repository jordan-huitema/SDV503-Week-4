# SDV503-Week-4
Jordan huitema

Link to Lab-two on Github
https://github.com/jordan-huitema/Lab-Three

Link to clone Lab-two 
https://github.com/jordan-huitema/Lab-Three.git

Link to SDV503-Week-4
https://github.com/jordan-huitema/SDV503-Week-4

Link to clone SDV503-Week-4
https://github.com/jordan-huitema/SDV503-Week-4.git

--Journal Week 4--

This week we touched on 3 main topics, If/Else Statements, Switch Statments and Ternary Operators.

If/Else Statements

-If and Else

>If statements are used to have a conditinal outcome. e.g. you would use an if statment if you only wanted a peice of code to run based on the condition of another variable

>Else statements are used to both chain if statments and provide alternative code to run if the prior statments conditions where not met

-Comparison operators

>Comparison operators are exactly what they sound like, they compare two values and give a "True" or "False" result. These can be used in an argument (). These are the types of comparison operators

"   >   Greater than        (Value 1 must be greater than value 2)
"   <   Less Than           (Value 1 must be less than value 2)
"   ==  Equal               (Must be equal values)
"   !=  unequal             (Must be diffrent values)
"   === Strictly Equal      (Must be same data type and same value)
"   !== Strictly Unequal    (Must be diffrent data type or value)  

Arrays Are Special

>Arrays do not act as regular variables or values. If var a and b have an array that looks the same the === operator will still return false. This is because an array is not a value, an array contains values.

Truthy and Falsy

>We learned that an if statement whos argument contains nothing but a var (e.g. if (var) {}; ), it will run as long as the var contains a value, if the var dosnt contain a value it will not run (e.g. var = null; wont run).

-Switch Statements 

>A switch statement is a container that houses case statement's, these case statements function in much the same way as an if statement but are easier to be chained and are written diffrently. Switches are useful because you can make a block that has 1 or more outputs. A switch will run cases in a decending order and only stop when it encounters a "break" command or the containers end ( }; ).

e.g.
Switch (var) {
    case 1:
    case 2:                 <--If var = 2 the switch will start running cases from here 
        console.log("hey ");
    case 3:
        console.log("there );
    case 4:
    case 5:
        console.log("bud");
        break;               <--To here even tho the arguments of the proceding case's are not true
};                              This switch would output "hey " "there " "bud" 

>If a switches case statement's are not met it will end without an output, you can change this by adding "default" before after or inbetween the case's so the program will still have an output if no case conditions are met

e.g.
Switch (var) {
    case 1:
    case 2:
    default:                <-- this can be places anywhere between, before or after the cases
        console.log("nothin ran i guess)
        break
    case 3:
    case 4:
    case 5:
    
};

-Ternary Operators

>A ternary operator is a shorter way of writing a basic if statement that only needs 2 outputs. The advantage these operators have over if statments or switches is that they contain very few characters and can be written on the same line making for much more compact blocks of code that are easier to understand.

if ( x = y ) {                              //this is how you would change the value of x depending on the value of y with an if statment
     x = 10 
    } else {
    x = 5 
    };      

x = x = y ? 10 : 5                          //this is how you could do the same task with ternary operators
array.x = array.x = array.y ? 10 : 5        //this would be the same with arrays

Challenges

>This week my only challenge was with the Lab-Three assesment, I wanted to create my program but using switch statments inside if statements but unfortunatly I couldnt get the switch statments to work. After some googling I came to the conclusion that you couldnt put an argument in a case statment and had to change my program acordingly, later i realized the only reason my switches didnt work was because i forgot you needed the ":" character after the case argument. Unfortunatly it was to late to go back and change everything so i left it as it was. 

>I think an example of case's with arguments in them on the gitbook resources could have helped with this because i didnt end up practicing it or have any relevant refrance to figure out what my problem was. I think it would have helped me spot my mistake earlier.

My code

case (var >= 85 && var <= 100) {
    console.log("words and such");
    break
}

Correct code                  || forgot you needed that
                              \/
case (var >= 85 && var <= 100): {
    console.log("words and such");
    break
}