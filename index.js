var lastSymbol = "";
var board = [ ["", "", ""], ["", "", ""], ["", "", ""] ];

window.addEventListener("load", event => {
    var btns = document.getElementsByTagName("button");
    for (let btn of btns) {
        btn.onclick = TickCell;
    }
});

function TickCell() {
    // checks if the symbol is picked again
    if (this.innerText == lastSymbol) {
        alert("you cant pick " + lastSymbol);
        return;
    }

    // getting the parent cell
    var cell = this.parentElement;
    
    // assigning the label the clicked symbol
    var lbl = cell.getElementsByTagName("label")[0];
    lbl.textContent = this.innerText;
    lbl.style.display = "unset";
    
    // recording pick
    lastSymbol = this.innerText;
    board[cell.id[0]][cell.id[2]] = lastSymbol;
    
    // make the buttons disappear
    for (let btn of cell.getElementsByTagName("button")){
        btn.style.display = "none";
    }
    
    CheckWin(cell);
}

function CheckWin(cell) {
    //check row
    for(var i = 0; i < 3; i++){
        if(board[cell.id[0]][i] != lastSymbol)
            break;
        if(i == 2){
            alert("win for " + lastSymbol);
            document.location.reload(true);
        }
    }

    //check col
    for(var i = 0; i < 3; i++){
        if(board[i][cell.id[2]] != lastSymbol)
            break;
        if(i == 2){
            alert("win for " + lastSymbol);
            document.location.reload(true);
        }
    }

    //check diag
    if(cell.id[0] == cell.id[2]){
        //we're on a diagonal
        for(var i = 0; i < 3; i++){
            if(board[i][i] != lastSymbol)
                break;
            if(i == 2){
                alert("win for " + lastSymbol);
                document.location.reload(true);
            }
        }
    }

    //check anti diag (thanks rampion)
    if(Number(cell.id[0]) + Number(cell.id[2]) == 2){
        for(var i = 0; i < 3; i++){
            if(board[i][2-i] != lastSymbol)
                break;
            if(i == 2){
                alert("win for " + lastSymbol);
                document.location.reload(true);
            }
        }
    }
}