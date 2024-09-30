let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#Reset1");
let newBtn = document.querySelector(".newBtn");
let msgContainer = document.querySelector(".winningMsg");
let msg = document.querySelector("#msg");



let turnO=true;
const winPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

]

const resetGame = ()=>
{
    turnO=true;
    for ( let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
            // msgContainer.classList.add("hide");
            msg.innerText="";
        }
        

}
resetBtn.addEventListener("click",resetGame);
const disBoxes = ()=>
{
for (box of boxes)
{
    box.disabled=true;
}
}
// console.log(boxes);
 boxes.forEach((box)=>
 {
    box.addEventListener("click" , ()=>
    {
        console.log("Box was Clicked");
        if(turnO)
        {
            box.innerText = "O";
            
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        winner();

        // box.innerText="Akshay";
    });
 }
 );
 const shWinner = (winner)=>
 {
   msg.innerText = `Congratulations Winner is ${winner}`;
//    boxes.disabled=true;
disBoxes();
 }

 const winner = () =>
 {
    for (let pattern of winPatterns)
    {
        
if(boxes[pattern[0]].innerText != "" && boxes[pattern[1]].innerText != "" && boxes[pattern[2]].innerText != "")
{
    if(boxes[pattern[0]].innerText === boxes[pattern[1]].innerText && boxes[pattern[1]].innerText ===  boxes[pattern[2]].innerText   ){
        // console.log("Winner is " , boxes[0].innerText);
        shWinner(boxes[pattern[0]].innerText);

    }
}
    }

 }
