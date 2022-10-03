import { View, Text , Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import Card from '../../Card/Card'
import Price from '../../Price'
import Product from '../../Product'
import axios from 'axios'


const CategoryScreen = ({route}) => {
  // const {category} = props
  const {categoryId} = route.params
  const [prodcut, setProduct] = useState([])


  useEffect(() => {

  const getSingleCate = (id) => {
      axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((data) => {
        console.log(data.data);
        setProduct(data.data)
      })
    }
    getSingleCate(categoryId)
  },[])

  return (
    <View style={styles.container}>
    <Card>
    <Image source={{uri: prodcut.image}} style={styles.image}/>
  </Card>
  <Price price={prodcut.price} discount={prodcut.discount} />
  <Text style>{prodcut.title}</Text>

  {/* <Product product={dummyProduct1}/> */}
  </View>
  )
}

export default CategoryScreen