import { solveString } from 'sudoku-dlx'

export type Solution = {
  col: number,
  row: number
  number: number,
}

export const FindSolution = (input: string): string => {
  const response = solveString(input)[0]

  return ParseResponse(response)
}

export const ParseResponse = (solutions: Solution[]): string => {
  let solString = ''

  for (let row = 0; row <= 8; row++) {
    for (let col = 0; col <= 8; col++) {
      const solution = solutions.find((sol) => (sol.col === col && sol.row === row)) as Solution

      solString += solution.number
    }
  }

  return solString
}
