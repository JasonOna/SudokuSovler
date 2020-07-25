# Sudoku Solver

* Solves sudoku puzzles on Mobile, and Web

# Notes

## Solver to do heavy lifting

* This module can solve the puzzle using the Dancing Links (DLX) algorithm
https://www.npmjs.com/package/sudoku-dlx

It's API expects an 81 length string of numbers `0` to `9` and `.` for empty squares

## High level algorithm

To solve puzzles, the app will just:
* take input from the user
* when the users presses submit:
  * a string will be created and input into the sudoku solver
  * then response will be parsed and the solution will be presented

## Terminology

Here are some conventions we will use:

### Positions

The positions on the board will be numbered as follow

01 02 03 04 05 06 07 08 09
11 11 12 13 14 15 16 17 18
19 20 21 22 23 24 25 26 27
28 29 30 31 32 33 34 35 36
37 38 39 40 41 42 43 44 45
46 47 48 49 50 51 52 53 54
55 56 57 58 59 60 61 62 63
64 65 66 67 68 69 70 71 72
73 74 75 76 77 78 79 80 81

So row 1 will consist of positions:

01 02 03 04 05 06 07 08 09

### Square

Handles input from user

Square {
  position: number
  value: '.' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
}

### Board

Manages state of 91 squares and passes data to Solver when submitted

