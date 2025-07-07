let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn =true, cnt=0, noWinner=true;
const winPatterns=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
       if(turn){
        box.innerText="O";
        turn=false;
       }
       else{
        box.innerText="X";
        turn=true;
       }
       box.disabled=true;

       checkWinner();
       cnt++;
       if(cnt==9 && noWinner==true){
        showDraw();
       }
    });
});
const disableBoxes = () =>{
   for(box of boxes){
     box.disabled=true;
   }
};
const enableBoxes = () =>{
   for(box of boxes){
     box.disabled=false;
     box.innerText="";
   }
};
const showWinner = (winner) =>{
    msg.innerText=`Congratulations, ${winner} is the winner`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    noWinner=false;
};
const showDraw = () =>{
    msg.innerText=`The Match is Drawn!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner= () =>{
    for(pattern of winPatterns){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;

        if(val1 != "" && val2 != "" && val3 != ""){

            if(val1 == val2 && val2 == val3){
            console.log(pattern[0], pattern[1], pattern[2]);
              showWinner(val1);
            }

        }
    }

};
const resetGame = () =>{
   turn=true;
   cnt=0;
   noWinner=true;
   enableBoxes();
   msgContainer.classList.add("hide");
};
//newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);