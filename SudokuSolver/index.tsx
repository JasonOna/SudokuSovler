import React from 'react';
import { StyleSheet } from 'react-native';

import { Square } from './components/Square'

const styles = StyleSheet.create({ text: { backgroundColor: 'pink' } })

export const SudokuSolver = () => {
  return <Square />
}
