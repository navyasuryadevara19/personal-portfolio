// //voter program

// let voter = prompt("");
// // let voter = 18;

// if(voter == 18){
//     console.log("You are eligible for vote");
// }
// else if(voter>18 && voter<=80){
//     console.log("you are 18+, eligible for vote");
// }
// else if(voter<18){
//     console.log("you are a teenager not eligible for vote");  
// }
// else if(voter == 13 || voter<13){
//     console.log("you are too young for the vote");
// }
// else{
//     console.log("Invalid output");
// }


// let text = doucment.getElementById("text")


//for in & for of difference

// const flowers = ["Rose", "Jasmin", "Tulips","Daisy","Lavender"];
// console.log(flowers[3][2]);
// for(let x in flowers){
//   console.log(flowers[x]);
// }

// for(let y of flowers){
//     console.log(y);
//   }


  //for each

  const flowers = ["Rose", "Jasmin", "Tulips","Daisy","Lavender"];

//   flowers.forEach(function(flower,index){   
//     console.log(`Index ${index}: ${flower}`);
//   })

flowers.forEach(function (flower){
  console.log(flower);
});



//map() function

// -------double the value----------
// -------triple the value----------
// -------binary value--------------

// const arr = [3,6,4,8,1];

// function double(x){
//     return x*2;
// }

// const output = arr.map(double);

// console.log(output);





// const arr = [3,6,4,8,1];

// function triple(x){
//     return x*3;
// }

// const output = arr.map(triple);

// console.log(output);




// const arr = [3,6,4,8,1];


// function binary(x){
//     return x.toString(2);
// }

// const output = arr.map(binary);

// console.log(output);



//mapping types

// const arr = [3,6,4,1];


// const output = arr.map(function binary(x){
//     return x.toString(2);
// });

// console.log(output);




//using arrow function

const arr = [3,6,4,2];


const output = arr.map((x)=> x.toString(2));

console.log(output);



//array with different options

const name = [2,5,3,6,7,4,8,9];

name.push(10);  //it adds the element at the last of an array
name.pop();  //it deletes the element from the last of an array
name.unshift(0) ;  //it adds the element from the first of an array
name.shift();  //it delete the first element of an array--- if u give value or not it should delete the first element from am array
console.log(name.slice(2,4)); //it cuts the array into one piece but it not include the last element index 4.
console.log(name.splice(3,2,10)); //here(start indexno, how many want to delete, adding no)--including 3rd index
console.log(name.splice(2,0,10,56)); //nothing deleted add the element to the array at index 2--adding 2 elements


console.log(name);



//map() method

const employee =[ 
  {
  id : 1,
  name : "navya",
  surname : "suryadevara",
  age : 24,
  location : "hyd",
},
{
  id : 2,
  name : "bhagi",
  surname : "Ambati",
  age : 26,
  location : "khammam",
},
{
  id : 3,
  name : "geethu",
  surname : "kanna",
  age : 5,
  location : "nvc",
},

];


for(let x of employee){
  console.log(x.name,x.age);
}

console.log(employee[1]);
console.log(employee[1].location)

//for simple getting all names we use map() method

employee.map((item) => {
     console.log(item.id)
     console.log(item.name)
     console.log(item.surname)

     console.log(`all items of names:${item.name}`)
     for(let x of employee){
      console.log(x.name,x.age); //here it accept the for..of --because of the objects written in  array
    }
});





// const employee =  {
//   id : 1,
//   name : "navya",
//   surname : "suryadevara",
//   age : 24,
//   location : "hyd",
// };

//only iterable thigs are accepted so obj not working here so for that we use arrayofobjects
// for(let x of employee){
//   console.log(x)
// }

// console.log(employee);
// console.log(employee.age);


// data.js
export const dataArray = [
  { id: 1, name: 'Apple', price: '$1.00' },
  { id: 2, name: 'Banana', price: '$0.50' },
  { id: 3, name: 'Cherry', price: '$2.00' },
  { id: 4, name: 'Date', price: '$3.00' },
];
