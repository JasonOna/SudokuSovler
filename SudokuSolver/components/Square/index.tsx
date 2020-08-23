import React from 'react';
import { StyleSheet, TextInput, ViewProps } from 'react-native';
import { Values } from '../../types'

const squareStyles = {
  Container: {
    alignItems: 'center',
    borderWidth: 1,
    height: 30,
    textAlign: 'center',
    width: 30,
  } as ViewProps
}

const styles = StyleSheet.create(squareStyles)

type Props = {
  value: Values
  callback: (value: string) => void
}

export const Square: React.FunctionComponent<Props> = (props: Props) => {
  const {callback, value} = props

  return <TextInput keyboardType='numeric' maxLength={1} style={styles.Container} placeholder='' onChangeText={callback} value={value} />
}
