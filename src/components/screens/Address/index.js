import { View, Text } from 'react-native'
import React from 'react'
import { Input } from '../../Input'
import { AddButton } from '../../AddButton'
import styles from './styles'
const Address = () => {
  return (
    <View style={styles.conainer}>
    <View>
      <Input stacked  placeholder='Name' wrapperSty={styles.wrapper} />
      <Input stacked placeholder='password' wrapperSty={styles.wrapper} />

      <Input stacked  placeholder='City ' wrapperSty={styles.wrapper} />
      <Input stacked placeholder='Area' wrapperSty={styles.wrapper} />

      <Input stacked  placeholder='street' wrapperSty={styles.wrapper} />
      <Input stacked placeholder='Building' wrapperSty={styles.wrapper} />
    </View>
      
      <AddButton title='SAVE' />
    </View>
  )
}

export default Address