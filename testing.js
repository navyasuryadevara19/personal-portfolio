

// Arrya methods


const Arryname = [1,2,3,4,5,6,7,8,9]

// Arryname.push(10)
// Arryname.unshift(0)

// for (let x of  Arryname){
//     console.log(Arryname.x+10)
// }

// 
// console.log(Arryname.splice(4,0,28))

// console.log(Arryname)


const Arryaofobject = [ 
    {
    name:"xyz",
    img:"link",
    price:500,
    description:"text me",
    age:"30",
    height:"5.8"
    },
    {
        name:"xz",
        age:"32",
        height:"5.9",
        img:"link2",
        price:50,
        description:"text me if you can",
     },
]

Arryaofobject.map((item)=>{
        console.log(item.name)
        console.log(item.description)
        document.getElementById
})


//  let name ="harish"


//  console.log(`MY name is ${name}`)

// console.log(person.name)``


// filter method

// const newArray = [1,2,3,4,5,6,7,8,9,10]

// newArray.filter((num)=>{

//         if(num>=5 && num<=10){
//             console.log(num)
//         }
// })

// reduce method


// const newArrayone = [1,2,3,4,5,6,7,8,9,10]

// newArrayone.reduce((a,b)=>{
//     console.log(a+b)
// },0)

// const numbers = [1, 2, 3, 4, 5,20,50,5];

// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// },0 );

// console.log(sum);


// const newSortArray = [22,33,43,1,5,7,3,95,7.3,8.45,9.3,-1,10,-1.5]


// const finalaraay = newSortArray.sort((a,b)=>b-a)

// console.log(finalaraay)


// const names = ["harish","ajay","akhil","kalyan","loki","bala","sethupathi","sandhay"]


// console.log(names.sort())


function handleaddcart(){
   alert("1 Item is Added to cart")
}

let inputs = prompt("Enter Your Name")

let maindiv = document.getElementById("testone")

maindiv.innerHTML=inputs


