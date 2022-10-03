import { View, Text , Image } from 'react-native'
import React from 'react'
import Card from '../Card/Card'
import styles from './styles'
import Price from '../Price'
import { PlatformToubale } from '../playground/PlatformToubale'
import AddToCartButton from '../AddToCartButton'
import { useNavigation } from '@react-navigation/native'
const CartItem = ({cartItem}) => {
  const navigation = useNavigation()
  return (
    <Card>
    <PlatformToubale style={styles.container} onPress={() => navigation.navigate('Product', {productId: cartItem.id})}>
      <Image source={{uri: cartItem.image}} 
        style={styles.image}
      />
      <View style={styles.wrapper}>
        <Text> {cartItem.title} </Text>
        <Price price={cartItem.price} discount={cartItem.discount} />
       <AddToCartButton />
      </View>
      </PlatformToubale>
    </Card>
  )
}

export default CartItem