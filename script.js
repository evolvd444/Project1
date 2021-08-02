//grabbing what i need using query selector
let targets = document.querySelector(".bullsEye")
let game = document.querySelector(".game")
let startButton = document.querySelector("#start")
let score = document.querySelector(".score")
let front = document.querySelector(".front")
let back = document.querySelectorAll(".back")
let card = document.querySelector(".card")
let inner = document.querySelectorAll(".inner")
let vanDamme = document.createElement("img")
let hostage = document.createElement("img", src="https://ak.picdn.net/shutterstock/videos/1021295671/thumb/11.jpg" )
//okay now i want to the divs to flip/change to from one side to the other individually
//just found how to creat flip card in w3schools https://www.w3schools.com/howto/howto_css_flip_card.asp
// <button class= "start">Start!</button>
//okay now i have  the divs flipping on hover.. but now i need to get the divs to turn around randomly themselves
//also how to get hostages and randomize them.
//then i need to register point take aways for killing hostage and health loss from not shooting vandamn in time.
// okay to create images to go randomly i have to create element


//here i have tested to append child.. it works... now i have to get it to append to a random div.
//i also have to make that random div flip at a certain speed2


// so this for loop randomly itterates through the array so vandame appears in different spots every time screen refreshes
//but i want it to autamtically switch van damme so i think i need to create a function
function start(){
    for (let i = 0; i < Math.floor(Math.random() * 9); i++) {
        let j = Math.floor(Math.random() * 9)
        inner[j].style = "transform: rotateY(180deg)";
    }    
    // this loop is for generating a random ammount of hostages
    for (let i = 0; i < Math.floor(Math.random() * 9); i++) {
        let j = Math.floor(Math.random() * 9)
        inner[j].style = "transform: rotateY(180deg)";
    }    

    //this is so vandamme can go into random places
    let i = Math.floor(Math.random() * 9)
    vanDamme.src = "https://i5.walmartimages.com/asr/8ed88348-fd7f-492b-9ad9-640d392fdac1_1.1bc02bb917b325271cc8593cfeda29b6.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff";
    vanDamme.style = "width:300px; height:300px";
    let test = back[i].appendChild(vanDamme)
    inner[i].style = "transform: rotateY(180deg)";
    console.log(test)

}



// startButton.addEventListener("onclick", start())











//<div class="flip-card">
/* <div class="flip-card-inner">
<div class="flip-card-front">
  <h1>Kill Van Damme </h1>
  <h1>Before he Kills you! </h1>
</div>
<div class="flip-card-back">
  <img src="https://i5.walmartimages.com/asr/8ed88348-fd7f-492b-9ad9-640d392fdac1_1.1bc02bb917b325271cc8593cfeda29b6.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff" alt="Avatar" style="width:300px;height:300px;">

</div>
</div>
</div> */