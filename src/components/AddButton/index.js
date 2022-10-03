import React from 'react';
import { View, Text , StyleSheet, ActivityIndicator } from 'react-native'
import {PlatformToubale} from '../playground/PlatformToubale'

 export class AddButton extends React.Component {
 render() {
   const {title, isLoading , disabled  , ...rest} = this.props
  return (
    <PlatformToubale
    disabled={disabled || isLoading}
    {...rest}
     style={[styles.button, disabled ? styles.disabled : null]}>
     {isLoading ? <ActivityIndicator /> : 
        <Text style={styles.text}>{title}</Text>
     }
    </PlatformToubale>
      )
 }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    padding: 15,
    color: 'white',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.3
  }
})