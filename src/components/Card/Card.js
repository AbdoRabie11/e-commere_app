import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
const Card = (props) => {
  const {style, ...rest} = props
  return (
    <View {...rest}  style={[styles.container, style]}/>
  )
}

export default Card