import { View, Text , Image } from 'react-native'
import React from 'react'
import Card from '../Card/Card'
import styles from './styles'
import Price from '../Price'

const Order = ({order}) => {
  // const firstItem = order.cartItems[0]
  return (
    <Card style={styles.container}>
      <Image source={{uri: order.image}} 
        style={styles.image}
      />
      <View style={styles.wrapper}>
        <Text> {order.title} </Text>
        <Price price={order.price}  />
        <View style={styles.status}>
        {/* <Text style={styles.text}> {order.status} </Text> */}
        </View>
      </View>
    </Card>
  )
}

export default Order