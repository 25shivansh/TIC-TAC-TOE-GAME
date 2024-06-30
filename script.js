let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true//playerO,playerX
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");

};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            box.style.color="black"
            turnO=false;
        }else{
            box.innerText="X";
            box.style.color="red"
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    };
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    };
};
const drawMatch=()=>{
    msg.innerText=`MATCH DRAW! START NEW GAME`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const showWinner=(winner)=>{
    msg.innerText = `CONGRATULATIONS, WINNER IS ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val !=""&&pos2Val !=""&&pos3Val !=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                showWinner(pos1Val);
                return;
            }
                
        }
    }
    if(Array.from(boxes).every(box =>box.innerText !=="")){
        drawMatch();
    }
};
newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);