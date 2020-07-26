import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({ container: {backgroundColor: 'pink'}})

export const Square = () => {
  return <TextInput style={styles.container} placeholder='hi' />
}