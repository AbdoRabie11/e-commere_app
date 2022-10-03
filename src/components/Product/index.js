import {View, Text, Image} from 'react-native';
import React from 'react';
import Card from '../Card/Card';
import styles from './styles';
import {PlatformToubale} from '../playground/PlatformToubale';
import Price from '../Price';
import {useNavigation} from '@react-navigation/native';

const Product = ({product}) => {
  const navigation = useNavigation();

  
  return (
    <PlatformToubale
      style={styles.container}
      onPress={() => navigation.navigate('Product', {productId: product.id})}>
      <Card>
        <Image source={{uri: product.image}} style={styles.image} />
      </Card>
      <Price price={product.price} discount={product.discount} />
      <Text style>{product.title.slice(0,5)}</Text>
    </PlatformToubale>
  );
};

export default Product;
