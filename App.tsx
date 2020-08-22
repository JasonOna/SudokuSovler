import React from 'react';
import { StyleSheet, View } from 'react-native';

import { SudokuSolver } from './SudokuSolver/index'

const App: React.FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <SudokuSolver />
    </View>
  );
}

export default App; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
