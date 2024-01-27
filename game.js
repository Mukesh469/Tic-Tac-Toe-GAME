let boxes = document.querySelectorAll(".box") //Accessing all buttons 
let resetBtn = document.querySelector(".reset-btn") //Accessing Reset button 
let winMessage = document.querySelector("#win") // Accessing h1 to display winner
const winCombi =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],                // 2D array ( winning combination )
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

let turn0 = true

boxes.forEach((box) =>
    box.addEventListener("click",()=>
    {
        if(turn0)
        {//player0
            box.innerText = "O"
            box.style.color = "green"
            turn0 = false

        }
        else
        {//playerx
            box.innerText = "X"
            box.style.color = "red"
            turn0 = true 
        }
        box.disabled = true
        winnerCheck()        
    }  
))

// function to check win_combination 
const winnerCheck = () =>
{

    let draw = true;

    for ( let i of winCombi )
    {
        let position1 = boxes[i[0]].innerText
        let position2 = boxes[i[1]].innerText
        let position3 = boxes[i[2]].innerText

        if( position1 != "" && position2 != "" && position3 != "")
        {
            if(position1 === position2 && position2 === position3)
            {
                if(position1 === "X")
                {
                    winMessage.innerHTML="X is winner" 
                       
                }
                else
                {
                    winMessage.innerHTML="O is winner"
                }
                draw = false;
                boxes.forEach(box => {
                    box.disabled = true;
                });
                break;
            }     
        }
    }

    // match draw ??
    if(draw)
    {
        let isFilled = true;
        for(let j of boxes)
        {
            if(j.innerText === "")
            {
                isFilled = false;
                break
            }
        }
        if (isFilled) {
            winMessage.innerHTML = "It's a draw!";
        }   
    }

}


//RESETING THE GAME
resetBtn.addEventListener("click",()=>
{
    window.location.reload();
})
