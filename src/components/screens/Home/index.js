import {View, Text, FlatList, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Category from '../Category';

import Product from '../../Product';
import style from './styles';
import PrdouctList from '../../ProductList';
import {setProducts} from '../../../redux/reducer/homeActions';

import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';

function rednerCategoryItem({item}) {
  return <Category category={item} />;
}

function rednerCategory(prodcuts) {
  return (
    <FlatList data={prodcuts} renderItem={rednerCategoryItem} horizontal />
  );
}

const Home = () => {
   const prodcutss = useSelector((state) => state.home.products)
   const dispatch = useDispatch()
   const [product, setProduct] = useState([]);
  // const categories = useSelector(state => state.home.prodcuts);
  // const dispatch = useDispatch();

  // const fetchProducts = async(dispatch, setProducts) => {
  //   const res = await axios
  //   .get("https://fakestoreapi.com/products")
  //   .catch((err) => console.log("ERR : ", err));

  // dispatch(setProducts(res.data));
  // }


  useEffect(() => {
    const getItems = () => {
      axios.get('https://fakestoreapi.com/products').then(data => {
        setProduct(data.data);
         dispatch(setProducts(data.data));
      });
    };


    getItems();
  }, []);

  return (
    <ScrollView style={style.container}>
      <Text style={style.headerText}>Category</Text>
      {rednerCategory(product)}
      <Text>Products</Text>
      <PrdouctList data={product} />
    </ScrollView>
  );
};

export default Home;
