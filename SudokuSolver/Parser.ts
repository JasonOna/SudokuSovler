import { validPositions, Digit, Values } from './types'

export const ParseSolution = (solution: string): Digit[] => {
  return solution.split('').map((value, index) => {
    return {
      position: validPositions[index],
      value: value as Values, 
    }
  })
}