console.log("Hellow World");

//creating a random number usually going to be between 0.0-1

let randomNumber =Math.random();

//if condition: if the specified number meets the requirements then the code will run

if (randomNumber<0.50){

    console.log("Condition was Met");
    console.log(randomNumber);
}


if (randomNumber>= 0.5){
    console.log('Condition Was MEt');
    console.log(randomNumber);
}

//else if 

const day0fWeek = 'Saturdy';

if (day0fWeek==='Monday'){

    console.log("Yay Its Monday");

} else if (day0fWeek=== 'Friyay');{
    console.log("Yay its Friyay");

} else if (day0fWeek==='Saturday'){
    console.log("You hace the correct day from the variable");
}

const age= promt ("Enter A Age");
if (age < 5){
    console.log("Youre a baby");

}else if (age<10){
    console.log("youre a kid");

}else if (age < 35){
    console.log("You're getting old");
}
//if all other conditions fail else

else {
    console.log("You are over the age of 35");
}

//case statements
const fruit = 'Mangos';

switch (fruit){

    case 'Oranges':
        console.log("Oranges are 59 cents");
        break;
    case 'Oranges':
         console.log("Oranges are 59 cents");
         break;  
    case 'Oranges':
         console.log("Oranges are 59 cents"); 
         break;
    case 'Oranges':
        console.log("Oranges are 59 cents");
        break;

        default:
            console.log("Last Resort IF all Conditions Fail");
}

//nested conditions:there is a parent condition, and if the condition is met and it runs then the nested 'if' conditions run as well.
//const- variable doesnt change
//in this example, the password has to be greater than or equal to 6 characters. If that condition is met, it goes to the nested conditions.

const password = promt("Enter a new Password");

//first 'if' condition

if (password.length>=6) {


    if (password.index0f('')=== -1) {

        console.log("Valid Password");
    
} else {
    console.log ("Password Cant Have Spaces")
} else {

    console.log("Passowrd is too short");
}

//functions=your declaration states. 
//give your function a name 
// within your () is your argument perameters and what you will manipulate in your code

function singingSong() {

    console.log("DO");
    console.log("RE");
    console.log("ME");

}

singingSong()
singingSong()
singingSong()


function greet(firstName) {

    console.log(`Hey there, ${firstName}`)
}
greet('Boomer');


function greet(firstName) {

    console.log(`Hey there, ${firstName}${lasName}`)
}
greet('Boomer','Sooner');
