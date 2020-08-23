import React, {useState } from 'react';
import { StyleSheet, View, TouchableHighlight, Text, ViewProps, TextProps } from 'react-native';

import { Square } from './components/Square'
import { FindSolution } from './Solver';
import { ParseSolution } from './Parser';

import { validValues, Values, validPositions, Positions, Digit, initialDigits } from './types'

const MESSAGES = {
  START: "Input your sudoku board and press 'Submit'\n for awesomeness",
  ERROR: 'No solution',
  SOLVED: 'Here you go my friend'
}

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
  Buttons: {
    alignItems: 'center',
    borderWidth: 1,
    margin: 5,
    padding: 5,
    width: 140,
  } as ViewProps,
  Message: {
    height: 40,
    textAlign: 'center',
  } as TextProps
} 

const styles = StyleSheet.create(sudokuStyles)

const isValidInput = (text: string): boolean => {
  return validValues.includes(text as Values)
}

export const SudokuSolver: React.FunctionComponent = () => {
  const [message, setMessage] = useState<string>(MESSAGES.START)
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
      return setMessage(MESSAGES.ERROR)
    }

    setMessage(MESSAGES.SOLVED)
    const solvedDigits = ParseSolution(solution)

    setDigits(solvedDigits)
  }

  const clear = () => {
    setMessage(MESSAGES.START)
    setDigits(initialDigits)
  }

  return (
    <View style={styles.Container}>
      <Text style={styles.Message}>{message}</Text>
      <View style={styles.Board}>
        {validPositions.map((position, index) => {
          return <Square key={index}  callback={(text) => updateDigit(position, text)} value={getDigit(position).value} />
        })}
      </View>
      <TouchableHighlight style={styles.Buttons} onPress={submit}><Text>Submit</Text></TouchableHighlight>
      <TouchableHighlight style={styles.Buttons} onPress={clear}><Text>Clear</Text></TouchableHighlight>
    </View>
  )
}
