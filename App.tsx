import React from 'react';
import { StyleSheet, View } from 'react-native';

import { SudokuSolver } from './SudokuSolver/index'

export default function App() {
  return (
    <View style={styles.container}>
      <SudokuSolver />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
