import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import { getActualPrice } from '../../utls/helpersFunctions'
const Price = (props) => {
  const {price, discount} = props
  return (
    <View style={styles.container}>
      <Text style={styles.oldPrice}> ${getActualPrice(price, discount)}</Text>
      {discount && <Text style={styles.price}>{price}</Text>}
    </View>
  )
}

export default Price