import {View, Text, Image, Button, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import Price from '../../Price';
import styles from './styles';
import AddToCartButton from '../../AddToCartButton';
import axios from 'axios';

// function getProduct(productId) {
//   console.log(productId);
//   return dummyProduct6;
// }

const ProductScreen = ({route}) => {
  const [prodcut, setProduct] = useState([]);
  const {productId} = route.params;

  useEffect(() => {
    const getSingleCate = id => {
      axios.get(`https://fakestoreapi.com/products/${id}`).then(data => {
        console.log(data.data);
        setProduct(data.data);
      });
    };
    getSingleCate(productId);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Image source={{uri: prodcut.image}} style={styles.image} />
      <View style={styles.titleWrapper}>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>{prodcut.title}</Text>
        </View>
      </View>
      <Price price={prodcut.price} discount={prodcut.discount} />
      <View style={styles.wrapper}>
        <Text>Description : </Text>
        <Text>{prodcut.description}</Text>
        <View style={styles.buttonWrapper}>
          <AddToCartButton
            productId={productId} 
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductScreen;
