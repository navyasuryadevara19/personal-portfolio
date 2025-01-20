let a = document.getElementById("color");
let col = ["aqua", "blue", "orange", "green", "violet", "red", "yellow"];

function handleClick() {
    
    let randomColor = col[Math.floor(Math.random() * col.length)]; //random b/w 0 & 1-----floor is round the value
    a.style.backgroundColor = randomColor;
}



function handleAqua(){
    alert("color changing to Aqua")
    a.style.backgroundColor = `${col[0]}`; 
}
function handleBlue(){
    alert("color changing to Blue")
    a.style.backgroundColor = `${col[1]}`; 
}
function handleOrange(){
    alert("color changing to Orange")
    a.style.backgroundColor = `${col[2]}`; 
}
function handleGreen(){
    alert("color changing to Green")
    a.style.backgroundColor = `${col[3]}`; 
}
function handleViolet(){
    alert("color changing to Violet")
    a.style.backgroundColor = `${col[4]}`; 
}
function handleRed(){
    alert("color changing to Red")
    a.style.backgroundColor = `${col[5]}`; 
}ocument.bod
function handleYellow(){
    alert("color changing to yellow")
    a.style.backgroundColor = `${col[6]}`; 
}