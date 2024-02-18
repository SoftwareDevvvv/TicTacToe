# Tic-Tac-Toe Game

This is a simple implementation of the classic Tic-Tac-Toe game in JavaScript. 

## Description

This code consists of functions to initialize the game board, draw the game board, make moves for both players (human and computer), check for a winner, and start the game loop until a winner is determined or the board is full.

## Functionality

- `initBoard()`: Initializes the game board with empty spaces.
- `drawBoard()`: Draws the current state of the game board.
- `drawMove(rowPos, colPos, symbol)`: Draws the player's move on the board.
- `isValidMove(rowPos, colPos)`: Checks if a move is valid.
- `isMoveMade(rowPos, colPos)`: Checks if a move has already been made in a position.
- `isBoardFull(numberOfMoves)`: Checks if the game board is full.
- `checkWinner()`: Checks if there's a winner on the current board state.
- `makeLegalComputerMove()`: Generates a legal move for the computer player.
- `start()`: Starts the game loop, allowing players to make moves until there's a winner or the board is full.

## How to Play

1. Enter the position where you want to place your move when prompted (e.g., "1 1" for the first row, first column).
2. The computer will make its move automatically.
3. Continue making moves until either you or the computer wins, or the board is full.
4. Restart the game if one of the players won or the game ends in a draw.

## Notes

- The game is played on the console.
- The game is played on a 3x3 grid.
- The human player uses 'X' as their symbol, and the computer uses 'O'.
- The game checks for winning patterns after each move.
- The computer generates random legal moves.
