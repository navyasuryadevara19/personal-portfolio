const video = document.getElementById("video_container")
const startbutton = document.getElementById("start_button")
const endbutton = document.getElementById("end_button")

let livestream ;
startbutton.addEventListener("click", async()=>{
    livestream = await navigator.mediaDevices.getUserMedia(
        {
        video:true,
        audio:true
    })
    video.srcObject = livestream;
    video.play()
})

endbutton.addEventListener("click",()=>{
    video.srcObject = null
})



//spread operator
const number1 = [1,2,3,4,5]

const number2 = [6,7,8,9,10]

const response = [...number1,...number2]
console.log(response)


//rest operator
const total = (...rest)=>{
    return rest.reduce((a,c)=>a+c)
}
console.log(total(12,24,43,34,55))