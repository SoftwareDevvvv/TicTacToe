let board
let score
let computerScore

function drawBoard(){
    for (let row of board){
        console.log(row)
    }
}

function initBoard(){
    board = [[" "," "," "],
             [" "," "," "],
             [" "," "," "]
 ]
}

function drawMove(rowPos,colPos,symbol){
    board[rowPos][colPos] = symbol
}

const isValidMove = (rowPos,colPos) =>  ((rowPos < 0 || rowPos) > 2 || (colPos < 0 || colPos > 2)) ? false : true

const isMoveMade = (rowPos,colPos) => board[rowPos][colPos] !== " " ? true : false

const isBoardFull = (numberOfMoves) => numberOfMoves === 9

const checkWinner = () => {
    if (board[0][0] === "X" && board[1][0] === "X" && board[2][0] === "X" || (board[0][1] === "X" && board[0][2] === "X" && board[0][0] === "X") || (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") || (board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X") || (board[1][0] === "X" && board[1][2] === "X" && board[1][3] === "X") || (board[2][0] === "X" && board[2][1] === "X" && board[2][2] === "X") || (board[0][0] === "X" && board[1][0] === "X" && board[1][2] === "X") || (board[0][1] === "X" && board[1][1] === "X" && board[2][1] === "X") || (board[0][2] === "X" && board[1][2]  && board[2][2] === "X")){
        humanWon = true
        console.log("You won")
    }
    else if (board[0][0] === "O" && board[1][0] === "O" && board[2][0] === "O" || (board[0][1] === "O" && board[0][2] === "O" && board[0][0] ===  "O" ) || (board[0][0] === "O"&& board[1][1] === "O" && board[2][2] ===  "O" ) || (board[0][2] === "O" && board[1][1] === "O" && board[2][0] ===  "O" ) || (board[1][0] === "O" && board[1][2] === "O" && board[1][3] ===  "O" ) || (board[2][0] === "O" && board[2][1] === "O" && board[2][2] ===  "O" ) || (board[0][0] === "O" && board[1][0] === "O" && board[1][2] ===  "O" ) || (board[0][1] === "O" && board[1][1] === "O" && board[2][1] ===  "O" ) || (board[0][2] === "O" && board[1][2] === "O" && board[2][2] ===  "O" )){
        computerWon = true
        console.log("Computer won")
    }
} 

const makeLegalComputerMove = () =>{
    let randomRow = Math.floor(Math.random() * 3)
    let randomCol = Math.floor(Math.random() * 3)

    while (isMoveMade(randomRow,randomCol)){
         randomRow = Math.floor(Math.random() * 3)
         randomCol = Math.floor(Math.random() * 3)
    }

    drawMove(randomRow,randomCol,"O")
    
}

function start(){
    let computerWon = false
    let humanWon = false
    let numberOfMoves = 0

    initBoard()
    drawBoard()

    while (!computerWon || !humanWon || isBoardFull(numberOfMoves)){
        let userChoice = prompt("Type position (eg: 1 1 for first row, first column)").split(" ")
        userRow = Number(userChoice[0])
        userCol = Number(userChoice[1])

        while (!isValidMove(userRow,userCol) || isMoveMade(userRow,userCol)){
            let userChoice = prompt("Type position (eg: 1 1 for first row, first column)").split(" ")
            userRow = Number(userChoice[0])
            userCol = Number(userChoice[1])
        }
        drawMove(userRow,userCol,"X")
        drawBoard()
        checkWinner()
        makeLegalComputerMove()
        drawBoard()
        checkWinner()
        
    }

    
    
}

start()
