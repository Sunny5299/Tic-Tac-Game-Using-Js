const boxes = document.querySelectorAll(".box1");
let newgame1 = document.querySelector(".newgame");
let Reset1 = document.querySelector(".reset");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let x = 0;
const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];


const reset1 = () => {
    x = 0;
    enableboxes();
}

boxes.forEach((box1) =>{
    box1.addEventListener("click",() => {
        if(x % 2 == 0){
            console.log("0");
            box1.innerText = "0";
        }
        else{
            console.log("x");
            box1.innerText = "x";
        }
        x++;
        box1.disabled = true;
        checkwinner();
    });
});


const disableboxes =()=>{
    for(let box1 of boxes){
        box1.disabled = true;
    }
}


const enableboxes =()=>{
    for(let box1 of boxes){
        box1.disabled = false;
        box1.innerText = ''
        msg.innerText = ''
    }
}

const showwinner = (winner) => {
    msg.innerText = `congratulations, winner is ${winner}`
    msgcontainer.classList.remove("hide");
}


const checkwinner = () => {
    for(i of winpattern){
        let pos1val = boxes[i[0]].innerText;
        let pos2val = boxes[i[1]].innerText;
        let pos3val = boxes[i[2]].innerText;

        if(pos1val != '' && pos2val != '' && pos3val != ''){
        if(pos1val === pos2val && pos2val === pos3val && pos1val ===pos3val){
            console.log("winner",pos1val);
            disableboxes();
            showwinner(pos1val);
        }
    }}
};

Reset1.addEventListener("click",reset1)
newgame1.addEventListener("click",reset1)
