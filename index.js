const boxes=document.querySelectorAll(".boxes");
const newGamebtn=document.querySelector(".btn");
const gameInfo=document.querySelector(".player-info")

let currentPlayer;
let gameGrid;

const winningPosition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];



//funstion for initializing the game

function initGame(){
    currentPlayer="X";
    gameGrid=["","","","","","","","",""];
    newGamebtn.classList.remove("active");
    gameInfo.innerText=`Current Player - ${currentPlayer}`;
}


initGame();

function swapTurn() {
    if(currentPlayer==="X"){
        currentPlayer==="O";
    }
    else{
        currentPlayer="X";
    }
    gameInfo.innerText=`Current Player - ${currentPlayer}`;
}

function handleClick(index){
    if(gameGrid[index]===""){
        boxes[index].innerText=currentPlayer;
        gameGrid[index]=currentPlayer;
        boxes[index].style.pointerEvents="none";

        //swap turn
        swapTurn(); 

        //check anyone wins??

        checkGameOver();
    }
 
}

boxes.forEach((box,index) => {
    box.addEventListener("click", ()  =>{
        handleClick(index);
    })
}); 