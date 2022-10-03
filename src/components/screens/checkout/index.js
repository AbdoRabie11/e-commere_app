import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import { AddButton } from '../../AddButton'
import { getTotal } from '../../../utls/helpersFunctions'



function renderAddress() {
  return (
    <View style={styles.addresSection}>
      <Text style={styles.shipText}>Ship To</Text>
      <Text>lorem from the other side and </Text>

      <View style={styles.updateWrapper}>
      <Text style={styles.update}>Update</Text>
      </View>
    </View>
  )
}

function renderCoastBro(key, value) {
  return (
    <View style={styles.coast}>
      <Text style={styles.key}> {key} </Text>
      <Text style={styles.value}> {value} </Text>
    </View>
  )
}

function renderCoast() {

  return <View>
    {renderCoastBro('subtotal', '150')}
    {renderCoastBro('shipping', 'free')}
      <View  style={styles.horizontal}/>
    {renderCoastBro('Total', '150')}
  </View>
}

function renderButton() {
  return <View>
    <AddButton title='BUY' />
  </View>
}

const CheckOut = () => {
  return (
    <View style={styles.container}>
      {renderAddress()}
      {renderCoast()}
      {renderButton()}
    </View>
  )
}

export default CheckOut