import { ParseSolution } from '../SudokuSolver/Parser'
import { Digit } from '../SudokuSolver/types'

const mockSolution = '174368295285194367396275184417836529528419736639527418741983652852641973963752841'

describe('ParseResponse', () => {
  it('reutrns a string of values in the right order', () => {
    const expectedDigits: Digit[] = [
      { position: '01', value: '1' }, { position: '02', value: '7' }, { position: '03', value: '4' },
      { position: '04', value: '3' }, { position: '05', value: '6' }, { position: '06', value: '8' },
      { position: '07', value: '2' }, { position: '08', value: '9' }, { position: '09', value: '5' },
      { position: '10', value: '2' }, { position: '11', value: '8' }, { position: '12', value: '5' },
      { position: '13', value: '1' }, { position: '14', value: '9' }, { position: '15', value: '4' },
      { position: '16', value: '3' }, { position: '17', value: '6' }, { position: '18', value: '7' },
      { position: '19', value: '3' }, { position: '20', value: '9' }, { position: '21', value: '6' },
      { position: '22', value: '2' }, { position: '23', value: '7' }, { position: '24', value: '5' },
      { position: '25', value: '1' }, { position: '26', value: '8' }, { position: '27', value: '4' },
      { position: '28', value: '4' }, { position: '29', value: '1' }, { position: '30', value: '7' },
      { position: '31', value: '8' }, { position: '32', value: '3' }, { position: '33', value: '6' },
      { position: '34', value: '5' }, { position: '35', value: '2' }, { position: '36', value: '9' },
      { position: '37', value: '5' }, { position: '38', value: '2' }, { position: '39', value: '8' },
      { position: '40', value: '4' }, { position: '41', value: '1' }, { position: '42', value: '9' }, 
      { position: '43', value: '7' }, { position: '44', value: '3' }, { position: '45', value: '6' }, 
      { position: '46', value: '6' }, { position: '47', value: '3' }, { position: '48', value: '9' }, 
      { position: '49', value: '5' }, { position: '50', value: '2' }, { position: '51', value: '7' },
      { position: '52', value: '4' }, { position: '53', value: '1' }, { position: '54', value: '8' },
      { position: '55', value: '7' }, { position: '56', value: '4' }, { position: '57', value: '1' },
      { position: '58', value: '9' }, { position: '59', value: '8' }, { position: '60', value: '3' },
      { position: '61', value: '6' }, { position: '62', value: '5' }, { position: '63', value: '2' }, 
      { position: '64', value: '8' }, { position: '65', value: '5' }, { position: '66', value: '2' },
      { position: '67', value: '6' }, { position: '68', value: '4' }, { position: '69', value: '1' },
      { position: '70', value: '9' }, { position: '71', value: '7' }, { position: '72', value: '3' },
      { position: '73', value: '9' }, { position: '74', value: '6' }, { position: '75', value: '3' }, { position: '76', value: '7' }, { position: '77', value: '5' }, { position: '78', value: '2' },
      { position: '79', value: '8' }, { position: '80', value: '4' }, { position: '81', value: '1' }
    ]

    const digits = ParseSolution(mockSolution)

    expect(digits).toEqual(expectedDigits)
  })
})