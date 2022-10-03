import { FlatList } from 'react-native'
import React from 'react'
import Product from '../Product'


function renderProductItem({item}) {
  return <Product product={item}/>
}

const PrdouctList = (props) => {
  return (
    <FlatList {...props}  renderItem={renderProductItem} numColumns={2}/>
  )
}

export default PrdouctList