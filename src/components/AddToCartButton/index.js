import { View, Text } from 'react-native'
import React , {useState} from 'react'
import { AddButton } from '../AddButton'
import styles from './styles'
const AddToCartButton = () => {
  const [number, setNumber] = useState(0)
  renderInitalButton = () => {
    return <AddButton 
    onPress={() => increaseHnadler()}
    title="ADD TO CART" />
  }

  const increaseHnadler = () => {
    setNumber(number + 1)
  }
  const dereaseHnadler = () => {
    if(number !== 0) {
      setNumber(number - 1)
    } else {
      return
    }
  }

  renderIncreaseButton = () => {
    return (
      <View style={[styles.increaseDecreaseContainer ,styles.button]}>
        <Text style={styles.plusOrMinus} onPress={() => dereaseHnadler() }>-</Text>
        <Text>{number}</Text>
        <Text style={styles.plusOrMinus} onPress={() => increaseHnadler()}>+</Text>
      </View>
    )
  }

  return (
    <View style={styles.wrapper}>
    {number ? renderIncreaseButton() : renderInitalButton()}
    </View>
  )
}

export default AddToCartButton