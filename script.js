//grabbing what i need using query selector
let targets = document.querySelector(".bullsEye");
let game = document.querySelector(".game");
let startButton = document.querySelector("#start");
let bossHp = document.querySelector(".bossHealth");
let playerHp = document.querySelector(".yourHealth");
let front = document.querySelector(".front");
let back = document.querySelectorAll(".back");
let card = document.querySelectorAll(".card");
let inner = document.querySelectorAll(".inner");
let vanDamme = document.createElement("img");
let hostage = document.createElement("img");
let bossHealth = 1000;
let yourHealth = 200;
bossHp.innerHTML = bossHealth
playerHp.innerHTML = yourHealth
// Get the modal
let modal = document.querySelector(".theModal");

// Get the button that opens the modal
var btn = document.querySelector("#rules");

// Get the <span> element that closes the modal
var span = document.querySelector(".close");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//this sets the speed of the game/ how fast the cards flip
let timerCd = 1500; 
let timer;
//keep track of the previous round/flip so we can get you to lose health if you dont shoot vandamme
let lastHealth = 0;
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
//need to get the cards to refresh

//this starts the game when you click the start button and refreshes the card ever second inna half
function startGame() {
    timer = setInterval(start, timerCd) 
}
// this is the actual start to the game that the function above calls
function start() {
  let inner = document.querySelectorAll(".inner");
  //refreshes the health on the screen every time it goes down for each player
  bossHp.innerHTML = bossHealth
playerHp.innerHTML = yourHealth
// putting these variables in scope
  let back = document.querySelectorAll(".back");
let card = document.querySelectorAll(".card");
//this is for if you dont shoot van damme, van damme will shoot you
  if (bossHealth == lastHealth) {
      yourHealth-=10
  }
  lastHealth = bossHealth
  // this loop is for resetting the board
  for (let i = 0; i < inner.length; i++) {
    if (inner[i].dataset.activemode != "Front") {
      inner[i].dataset.activemode = "Front";
      inner[i].style = "transform: rotateY(0deg)";
    }
    //resets the point back -10
    back[i].dataset.points = "-10";
    //this is to track which card got clicked so that when it gets clicked it calls the calculatePoints function
    card[i].setAttribute("onclick","calculatePoints(" + back[i].dataset.points + ", 'none')"
    );
    
  }
  // this loop is for generating a random ammount of hostages
  let numHostages = Math.floor(Math.random() * 9)
//these 2 loops generate random number of hostages and a random location of the hostages
  let hostageLocation = 0
  for (let i = 0; i < numHostages; i++) {
    do {
        hostageLocation = Math.floor(Math.random() * 9);
    } while (inner[hostageLocation].dataset.activemode == "back")
//this line is to show whether the card was flipped over or not
    inner[hostageLocation].dataset.activemode = "back";
    //this flips the card over live
    inner[hostageLocation].style = "transform: rotateY(180deg)";
    //shows hostage hit points or how much points you lose for hitting a hostage
    back[hostageLocation].dataset.points = "-10";
    //calculating point for hostages by adding an onclick attribute
    card[hostageLocation].setAttribute("onclick","calculatePoints(" + back[hostageLocation].dataset.points + ", 'hostage')"
    );
  }

  //this is so vandamme can go into random places
  let i = Math.floor(Math.random() * 9);
  vanDamme.src ="https://i5.walmartimages.com/asr/8ed88348-fd7f-492b-9ad9-640d392fdac1_1.1bc02bb917b325271cc8593cfeda29b6.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff";
  vanDamme.style = "width:300px; height:300px";
  let test = back[i].appendChild(vanDamme);
  inner[i].style = "transform: rotateY(180deg)";
//this line is to show whether the card was flipped over or not
  inner[i].dataset.activemode = "back";
  back[i].dataset.points = "-20";

   //calculating point for van Damme by adding an onclick attribute
  card[i].setAttribute(
    "onclick",
    "calculatePoints(" + back[i].dataset.points + ", 'vanDamme')"
  );
  
}
//this calculate points lol
function calculatePoints(numPoints, cardClicked) {
   
  //this determines who gets thier health taken
if (cardClicked == 'vanDamme') {
  bossHealth += parseInt(numPoints);
} else if (cardClicked == 'hostage' || cardClicked == 'none') {
    yourHealth += parseInt(numPoints);
  }
  //prevents the health from going below 0
  if (bossHealth <= 0) {
  bossHealth = 0
}
 if (yourHealth <= 0) {
    yourHealth = 0
}
//refreshes the health on the screen every time it goes down for each player for after the button 
//is click to update the point or after someone gets shot
  bossHp.innerHTML = bossHealth
  playerHp.innerHTML = yourHealth
 gameOver()
}
//this decides whether the game is over or not!
function gameOver() {
    if (bossHealth == 0) {
        clearInterval(timer)
        console.log("Player Win!")
    }else if (yourHealth == 0) {
        clearInterval(timer)
        console.log("Player Lose!")
    }
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