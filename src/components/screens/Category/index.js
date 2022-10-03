import { View, Text , Image } from 'react-native'
import React from 'react'
import styles from './styles'
import Card from '../../Card/Card'
import { useNavigation } from '@react-navigation/native'
import { PlatformToubale } from '../../playground/PlatformToubale'
const Category = ({category}) => {
  const navigation = useNavigation()
 
  return (
    <PlatformToubale style={styles.container} onPress={() => navigation.navigate('Category', {
      categoryId:category.id
    }) }>
    <Card>
      <Image source={{uri: category.image}} style={styles.image}/>
    </Card>
      <Text style={styles.title}>{category.title.slice(0,4)}</Text>
      <Text style={styles.title}>{category.category}</Text>
    </PlatformToubale>
  )
}

export default Category