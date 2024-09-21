let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msg = document.querySelector(".msg");

// Makes the turn for the player
let turn0 = true;

const Winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 5],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "X";
            turn0 = false;
        }
        else {
            box.innerText = "O";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    })

});



const gamestop = () => {
    for (box of boxes) {
        box.disabled = true;

    }
}
const showinner = (pos1val) => {
    msg.innerText = "Congrulaiton!! you win the game";
}



const checkwinner = () => {
    for (let pattern of Winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner", pos1val);
                gamestop();
                showinner(pos1val);
            }

        }
    }

    const resetgame = () => {
        turn0 = true;
        enableboxes();
        msg.innerText = "";
    }

    const enableboxes = () => {
        for (box of boxes) {
            box.disabled = false;
            box.innerText = "";

        }
    }
    resetBtn.addEventListener("click", resetgame);

};
