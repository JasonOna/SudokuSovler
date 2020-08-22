import {Solution, ParseResponse } from '../SudokuSolver/Solver'

const mockSolution:  Solution[]= [
  {
    "col": 0,
    "number": 1,
    "row": 0,
  },
  {
    "col": 3,
    "number": 1,
    "row": 1,
  },
  {
    "col": 6,
    "number": 1,
    "row": 2,
  },
  {
    "col": 1,
    "number": 1,
    "row": 3,
  },
  {
    "col": 2,
    "number": 1,
    "row": 6,
  },
  {
    "col": 4,
    "number": 1,
    "row": 4,
  },
  {
    "col": 7,
    "number": 1,
    "row": 5,
  },
  {
    "col": 5,
    "number": 1,
    "row": 7,
  },
  {
    "col": 8,
    "number": 1,
    "row": 8,
  },
  {
    "col": 1,
    "number": 2,
    "row": 0,
  },
  {
    "col": 4,
    "number": 2,
    "row": 1,
  },
  {
    "col": 7,
    "number": 2,
    "row": 2,
  },
  {
    "col": 0,
    "number": 2,
    "row": 6,
  },
  {
    "col": 3,
    "number": 2,
    "row": 7,
  },
  {
    "col": 6,
    "number": 2,
    "row": 8,
  },
  {
    "col": 2,
    "number": 2,
    "row": 3,
  },
  {
    "col": 5,
    "number": 2,
    "row": 4,
  },
  {
    "col": 8,
    "number": 2,
    "row": 5,
  },
  {
    "col": 2,
    "number": 3,
    "row": 0,
  },
  {
    "col": 5,
    "number": 3,
    "row": 1,
  },
  {
    "col": 8,
    "number": 3,
    "row": 2,
  },
  {
    "col": 0,
    "number": 3,
    "row": 3,
  },
  {
    "col": 3,
    "number": 3,
    "row": 4,
  },
  {
    "col": 6,
    "number": 3,
    "row": 5,
  },
  {
    "col": 1,
    "number": 3,
    "row": 6,
  },
  {
    "col": 4,
    "number": 3,
    "row": 7,
  },
  {
    "col": 7,
    "number": 3,
    "row": 8,
  },
  {
    "col": 3,
    "number": 4,
    "row": 0,
  },
  {
    "col": 0,
    "number": 4,
    "row": 2,
  },
  {
    "col": 6,
    "number": 4,
    "row": 1,
  },
  {
    "col": 4,
    "number": 4,
    "row": 3,
  },
  {
    "col": 1,
    "number": 4,
    "row": 5,
  },
  {
    "col": 7,
    "number": 4,
    "row": 4,
  },
  {
    "col": 5,
    "number": 4,
    "row": 6,
  },
  {
    "col": 2,
    "number": 4,
    "row": 8,
  },
  {
    "col": 8,
    "number": 4,
    "row": 7,
  },
  {
    "col": 4,
    "number": 5,
    "row": 0,
  },
  {
    "col": 1,
    "number": 5,
    "row": 2,
  },
  {
    "col": 7,
    "number": 5,
    "row": 1,
  },
  {
    "col": 3,
    "number": 5,
    "row": 6,
  },
  {
    "col": 0,
    "number": 5,
    "row": 8,
  },
  {
    "col": 6,
    "number": 5,
    "row": 7,
  },
  {
    "col": 5,
    "number": 5,
    "row": 3,
  },
  {
    "col": 2,
    "number": 5,
    "row": 5,
  },
  {
    "col": 8,
    "number": 5,
    "row": 4,
  },
  {
    "col": 5,
    "number": 6,
    "row": 0,
  },
  {
    "col": 2,
    "number": 6,
    "row": 2,
  },
  {
    "col": 8,
    "number": 6,
    "row": 1,
  },
  {
    "col": 6,
    "number": 7,
    "row": 0,
  },
  {
    "col": 7,
    "number": 8,
    "row": 0,
  },
  {
    "col": 8,
    "number": 9,
    "row": 0,
  },
  {
    "col": 8,
    "number": 7,
    "row": 3,
  },
  {
    "col": 8,
    "number": 8,
    "row": 6,
  },
  {
    "col": 7,
    "number": 6,
    "row": 3,
  },
  {
    "col": 6,
    "number": 6,
    "row": 6,
  },
  {
    "col": 3,
    "number": 8,
    "row": 3,
  },
  {
    "col": 6,
    "number": 9,
    "row": 3,
  },
  {
    "col": 6,
    "number": 8,
    "row": 4,
  },
  {
    "col": 0,
    "number": 8,
    "row": 5,
  },
  {
    "col": 0,
    "number": 7,
    "row": 1,
  },
  {
    "col": 1,
    "number": 8,
    "row": 1,
  },
  {
    "col": 2,
    "number": 9,
    "row": 1,
  },
  {
    "col": 2,
    "number": 7,
    "row": 4,
  },
  {
    "col": 2,
    "number": 8,
    "row": 7,
  },
  {
    "col": 3,
    "number": 7,
    "row": 2,
  },
  {
    "col": 4,
    "number": 8,
    "row": 2,
  },
  {
    "col": 5,
    "number": 9,
    "row": 2,
  },
  {
    "col": 5,
    "number": 7,
    "row": 5,
  },
  {
    "col": 5,
    "number": 8,
    "row": 8,
  },
  {
    "col": 0,
    "number": 6,
    "row": 4,
  },
  {
    "col": 1,
    "number": 9,
    "row": 4,
  },
  {
    "col": 0,
    "number": 9,
    "row": 7,
  },
  {
    "col": 7,
    "number": 7,
    "row": 7,
  },
  {
    "col": 7,
    "number": 9,
    "row": 6,
  },
  {
    "col": 4,
    "number": 7,
    "row": 6,
  },
  {
    "col": 1,
    "number": 6,
    "row": 7,
  },
  {
    "col": 1,
    "number": 7,
    "row": 8,
  },
  {
    "col": 3,
    "number": 6,
    "row": 5,
  },
  {
    "col": 4,
    "number": 9,
    "row": 5,
  },
  {
    "col": 3,
    "number": 9,
    "row": 8,
  },
  {
    "col": 4,
    "number": 6,
    "row": 8,
  },
]

describe('ParseSolution', () => {
  it('reutrns a string of values in the right order', () => {
    const expectedString = '123456789789123456456789123312845967697312845845697312231574698968231574574968231'

    const solution = ParseResponse(mockSolution)

    expect(solution).toEqual(expectedString)
  })
})