import { View, Text , FlatList} from 'react-native'
import React , {useState , useEffect} from 'react'
import Order from '../../Order'
import { dummyOrderss } from '../../../utls/dummy_Categories'
import styles from './styles'
import { getOrders } from '../../../redux/reducer/Actions/authACtions'
import { useDispatch } from 'react-redux'
import axios from 'axios'

function renderSingleOrder({item}) {
  <Order order={item}/>
}

function renderOrders(product) {
  return <FlatList data={product}  renderItem={renderSingleOrder} />
}

const OrderScreen = () => {
  const [product, setProduct ] = useState([])

  useEffect(() => {
    const getProduct = () => {
      axios.get('https://fakestoreapi.com/products')
      .then(res => {
      const data = res.data
      setProduct(data)
      console.log(product);
      })
      .catch(err => {
        console.log(err);
      })
    }
    getProduct()
  }, [])
 return (
   <View style={styles.container}>
   {renderOrders(product)}
   </View>
 )

}

export default OrderScreen