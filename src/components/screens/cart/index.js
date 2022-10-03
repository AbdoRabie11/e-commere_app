import {View, Text, FlatList, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import CartItem from '../../cartItem';
import {AddButton} from '../../AddButton';
import styles from './styles';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { getTotal } from '../../../utls/helpersFunctions';

// import { totalSelector } from '../../../redux/selectors/cartSelector';

function renderCartItem({item}) {
  return <CartItem cartItem={item} />;
}

function renderCartItems(prodcut) {
  return <FlatList data={prodcut} renderItem={renderCartItem} />;
}

const Cart = () => {
  const navigation = useNavigation()
  const [prodcut, setProduct] = useState([])
  // const total = useSelector(totalSelector)

  useEffect(() => {
    const getSingleCate = () => {
      axios.get(`https://fakestoreapi.com/products?limit=1`)
      .then((data) => {
        setProduct(data.data)
      })
    }
    getSingleCate()
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {renderCartItems(prodcut)}
      <View style={styles.wrapper}>
        <Text style={styles.text}>Total = {getTotal(prodcut).toFixed(2)}</Text>
        <AddButton title="check out"  onPress={() => navigation.navigate('CheckOut')}/>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
