let gameSeq=[];
let userSeq=[];
let gameStart=false;
let level = -1;
let highScore = 0;

let h2= document.querySelector("h2");
let btns=["pink","blue","orange","yellow"];

// Step 1 to start game
document.addEventListener("keypress", function(){
    //console.log("Game Started");
    if(gameStart==false){
        console.log("Game Started");
        gameStart=true;

        levelUp();
    }

})

// Step 2 to flash a box and level up

function levelUp(){
    userSeq =[];
    level++;
    h2.innerText= "Level "+ level;

    let randInd=Math.floor(Math.random()*3);
    let randColor=btns[randInd];
    let randBtn= document.querySelector("."+randColor);
    // console.log(randInd);
    // console.log(randColor);
    // console.log(randBtn);

    gameSeq.push(randColor);
    console.log(gameSeq);
    flashBtn(randBtn);
}
              

function flashBtn(btn){
     btn.classList.add("flash");
     setTimeout(function(){
        btn.classList.remove("flash");
     },300);
    }

// Step 3 enable User Input

function btnPress(){
    //console.log("button is pressed");
   // console.log(this);
    let btn= this;
    //flashBtn(btn);
    flashUser(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length -1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
     btn.addEventListener("click",btnPress);
}

function flashUser(btn){
     btn.classList.add("userflash");
     setTimeout(function(){
        btn.classList.remove("userflash");
     },250);
    }

// step 4 tackle userseq and gameseq

function checkAns(idx){
    
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,500);
        }
       
    }
    // else{
    //     h2.innerHTML= "Game Over! Your score was <b>"+level +"</b> <br> Press any key to start";
    //     document.querySelector("body").style.backgroundColor = "red";
    //     setTimeout(function(){
    //         document.querySelector("body").style.backgroundColor = "white";
    //     },1000);
    //     reset();

    // }

    else {
    updateHighScore();

    h2.innerHTML = "Game Over! Your score was <b>" + level +
                   "</b><br> Highest Score: <b>" + highScore +
                   "</b><br>Press any key to start";

    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
    }, 1000);

    reset();
}

}

function reset(){
    gameStart= false;
    gameSeq=[];
    userSeq=[];
    level=-1;
}

function updateHighScore() {
    if (level > highScore) {
        highScore = level;
    }
}
