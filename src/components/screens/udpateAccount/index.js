import { View } from 'react-native'
import React from 'react'
import { Input } from '../../Input'
import { AddButton } from '../../AddButton'
import styles from './styles'
const UpdateAccount = () => {
  return (
    <View style={styles.conainer}>
    <View>
      <Input stacked  placeholder='Name' wrapperSty={styles.wrapper} />
     </View>
      <AddButton title='DONE' />
    </View>
  )
}

export default UpdateAccount