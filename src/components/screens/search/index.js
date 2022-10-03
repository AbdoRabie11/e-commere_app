import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import { Input } from '../../Input'
const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Input borderd placeholder='Type here ...' />
    </View>
  )
}

export default SearchScreen