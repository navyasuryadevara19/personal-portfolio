// --------tricks----------
// 1.to run html code in VS Code-----start index.html
//2.to run JS code in VS Code--------node script.js


//by default it is undefined
var message;

console.log(message);


//assign value to a variable
let message1;
message1 = "Hello";

console.log(message1);


//declaring a 2 or more variables
let name = "navya", age=24;
console.log(name,age);


//string is replaced with number 
let name1 = "bhavya";
name1 = 100;
console.log(name1);


//null data type
let a = null;
console.log(typeof a);  //output---object

console.log(null == undefined); //true


//NaN data type
console.log('a'/2); // NaN;
console.log(NaN/2); // NaN
console.log(NaN == NaN); // false---tha NaN value is not equal to any value include itself


//initialzing a floating value
let price = 12.00; 
let discount = 0.05;
console.log(price);
console.log(discount);


//range of a Number datatype
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE + Number.MAX_VALUE);  //output ---- (infinity)
console.log(-Number.MAX_VALUE - Number.MAX_VALUE);  //output ---- (-infinity)
console.log(Number.MIN_VALUE - Number.MIN_VALUE);  //0


//String datatype
let c = "Suryadevara";
c = c +" " +"Navya";
console.log(c);


console.log('I\'m also a valid string');  //backslash to escape the single quotes
console.log("'\Im also a valid string\'");
console.log('"\Im also a valid string\"');
console.log("\\Im also a valid string\\");


//arthmetic operations

let A = 20;
let B= 10;

let C = A/B;

console.log(C);

//if condition

let age1 = 17;
if(age1 == 18){
    console.log("you are 18 years old");
}
else{
    console.log("you are not 18 years old");
}




console.log(5 + "5");

console.log(5 == "5");
console.log(5 === "5");



//switch---compare the value 
let n=2;

switch(true){
    case n>1:
        console.log("here 1");
        break;
     case n<2:
       console.log("here 2");
        break;
    case n!=2:
        console.log("here 2");
        break;
    default:
        console.log("exit");
}

// --------n-------
//assign the value just print the statement
let d=2;

switch(d){
    case d=1:
        console.log("here 1");
        break;
     case d=2:
       console.log("here 2");
        break;
    case d=3:
        console.log("here 2");
        break;
    default:
        console.log("exit");
}


//document.write--- it display the html text directly


var x=10;
var y=20;
var z=x+y;
document.writeln(z);


//local variable----declared within a function 

function nav(){
    let x=10;  //local variable
    document.writeln(x);
}
nav();


//global variable -- variables declared outside of function or delcared within a window object
let glb = 20;
function lokesh(){
    document.writeln(glb);
}
function kalyan(){
    document.write(glb);
}
lokesh();
kalyan();


// //for loop
// for(let i=0;i<=10;i++){
//     console.log(i);
//     // document.write(i);
// }




//for loop example
const fruits = ["Apple","banana","carrot","grapes","watemelon"];

console.log(fruits);
for(i=0;i<fruits.length;i++){
    //console.log(veg[i])
    console.log(fruits[0],fruits[4]);
    
}



//---------for in loop----------
const person = {
    name : "navya",  //key:value pair
    age : 25,
    city : "hyd"
}

// console.log(person);
console.log(person.age);


//print above object using for in loop
for(let i in person){
    console.log(person[i]);
}



//string even using array
const colors = ["red","green","blue","white","black","orange","voilet"];

for(let x in colors){
    if(x%2===0){
     console.log(colors[x]);
    }
}



//

