let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")



let turno = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],


];

const resetGame =() => {
    turno= true;
    enableBoxes();
    msgContainer.classList.add("hide");
};


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turno) {
            box.innerHTML="O";
            turno=false;

        }else {
            box.innerHTML="X";
            turno=true;
        }
        box.disabled= true;

        checkWinner();
    });
});
 const disableBoxes = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
 };
 const enableBoxes = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerHTML="";

    }
 };



const showWinner = (winner) =>{
   msg.innerHTML = `Congratulations Winner is ${winner}`;
   msgContainer.classList.remove("hide");
   disableBoxes();
}




const checkWinner = () => {
    for(let pattern of winPatterns){
      let pos1Val = boxes[pattern[0]].innerHTML;
      let pos2Val=  boxes[pattern[1]].innerHTML;
      let pos3Val = boxes[pattern[2]].innerHTML;

      if(pos1Val != "" && pos2Val !="" && pos3Val !=""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
            
            

        }
      }
    }
};


newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
