//filter() method

const array = [1,4,3,6,8,3,9,10];

array.filter((arr)=>{
    if(arr%2==0){
        console.log(arr);
    }
})



//reduce() method
//reduce method adds the previous value + current value and it adds total array and gives the output
const reduce = [2,4,7,8,4,7,3,6,56,5,6,7];

const sum = reduce.reduce((a,b)=>{
   return a+b
},4)

console.log(sum)



//sort() method
const sort = [2,67,34,3,4,-6,5,-3,1.5,-6.78];

const c = sort.sort((a,b)=>b-a)  //highest to lowest
const d = sort.sort((a,b)=>a-b)  //lowest to highest
    console.log(c)
    console.log(d)


const names = ["navya","bhagi","geethu","pradeep","bhargav","shreya","mahi","varshi","shiva"];

console.log(names.sort())
console.log(names.sort().reverse())


//add email
function handleaddEmail(){

    let name = document.getElementById("email").value;
 console.log(name)
    let add = document.createElement("li");
    add.innerText = `${name}`;
    document.body.appendChild(add);
   document.getElementById("email").value = " "; //after printing one mail clear the input field
}



////////////////////////////



const person = {
    firstName: "harish",
    lastName: "ankathi",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }

  };
console.log(person.fullName())


// function funname  ()=>{
     
  
// }


// function expression    assign a function to a varable

// const funname = ()=>{
//     return
// }

//  Arrow funnton ==>


    // ()=>{
        
    // }

// arrow funtion
    // person.map(()=>{

    // })


// self invokation 

//    (funame= ()=>{

//     })


// DOM --> Doucument object model 



// document.write("hello all welcome")

// function handleaddEmail() {
//     alert("hello check it once ")
// }



