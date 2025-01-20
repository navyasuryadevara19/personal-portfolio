// let x=10;
// if(x==10){
//    let x=20;
//    console.log(x);
// }
// console.log(x);


// var a = 10;
// console.log(window.a);

// let b = 20;
// console.log(window.b); 


// for(let i=1; i<=10; i++){
//    setTimeout(() => console.log(i),1000);
   
//     // setTimeout(function(){
//     //     console.log(i);
//     // },3000);
// }

{ // enter new scope, TDZ starts
    let log = function () {
        console.log(message); // messagedeclared later
    };

    // This is the TDZ and accessing log
    // would cause a ReferenceError

    let message= 'Hello'; // TDZ ends
    log(); // called outside TDZ
}