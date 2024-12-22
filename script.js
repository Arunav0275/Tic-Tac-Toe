let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGameBtn=document.querySelector("#newG");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O"; 
            box.style.color="green";
            turnO=false;
        }else{
            box.innerText="X";
            box.style.color="#b0413e";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    })
});

const disabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}



const resetGame=()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    })
}

const showWinner = (value)=>{
    msg.innerText = `Congratulations, Winner is ${value}`;
    msgContainer.classList.remove("hide");
}

const checkWinner=()=>{
    let count=0;
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val==="O" || pos1Val==="X"){
            if(pos1Val === pos2Val && pos2Val===pos3Val){
                disabledBoxes();
                showWinner(pos1Val);
            }
        }
    }
    for(let i=0;i<9;i++){
        if(boxes[i].innerText==="O" || boxes[i].innerText==="X"){
            count++;
        }
    }
    if(count===9 && msgContainer.classList[1]==="hide"){
        msg.innerText= `It is a DRAW!`;
        msgContainer.classList.remove("hide");
    }
    
}


resetBtn.addEventListener("click",()=>{
    if(msgContainer.classList[1]==="hide"){
        resetGame();
    }else{
        return;
    }
});

newGameBtn.addEventListener("click",()=>{
    resetGame();
    msgContainer.classList.add("hide");
})

