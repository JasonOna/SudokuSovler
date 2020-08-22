import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Values } from '../../types'

const styles = StyleSheet.create({ container: {backgroundColor: 'pink', borderWidth: 1, width: 20, height: 20, alignItems: 'center', textAlign: 'center'}})

type Props = {
  value: Values
  callback: (value: string) => void
}

export const Square: React.FunctionComponent<Props> = (props: Props) => {
  const {callback, value} = props

  return <TextInput style={styles.container} placeholder='' onChangeText={callback} value={value} />
}
