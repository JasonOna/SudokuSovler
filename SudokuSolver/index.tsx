import React, {useState } from 'react';
import { StyleSheet, View, TouchableHighlight, Text, ViewProps } from 'react-native';

import { Square } from './components/Square'
import { FindSolution } from './Solver';
import { ParseSolution } from './Parser';

import { validValues, Values, validPositions, Positions, Digit, initialDigits } from './types'

const sudokuStyles = {
  Container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    top: 100,
    width: '100%'
  } as ViewProps,
  Board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 270,
  } as ViewProps,
} 

const styles = StyleSheet.create(sudokuStyles)

const isValidInput = (text: string): boolean => {
  return validValues.includes(text as Values)
}

export const SudokuSolver: React.FunctionComponent = () => {
  const [message, setMessage] = useState<string>('')
  const [digits, setDigits] = useState<Digit[]>(initialDigits)

  const updateDigit = (position: Positions, value: string) => {
    if (isValidInput(value)) {
      let newDigits = digits.filter(digit => digit.position !== position)
      newDigits = [...newDigits, {position, value: value as Values}]

      setDigits(newDigits)
    }
  }

  const getDigit = (position: Positions): Digit => {
    return digits.find((digit) => digit.position === position) as Digit
  }

  const submit = () => {
    const currentValues = digits
      .sort((A, B) => Number(A.position) - Number(B.position))
      .map((digit) => digit.value || '.')
      .join('')

    const solution = FindSolution(currentValues)

    if (!solution) {
      return setMessage('No solution')
    }

    const solvedDigits = ParseSolution(solution)

    setDigits(solvedDigits)
  }

  const clear = () => {
    setMessage('')
    setDigits(initialDigits)
  }

  return (
    <View style={styles.Container}>
      <Text>{message}</Text>
      <View style={styles.Board}>
        {validPositions.map((position, index) => {
          return <Square key={index}  callback={(text) => updateDigit(position, text)} value={getDigit(position).value} />
        })}
      </View>
      <TouchableHighlight onPress={submit}><Text>Submit</Text></TouchableHighlight>
      <TouchableHighlight onPress={clear}><Text>Clear</Text></TouchableHighlight>
    </View>
  )
}
