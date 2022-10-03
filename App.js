import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import AppContainer from './src/navigation';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {setToken} from './src/redux/reducer/Actions/authACtions';

const App = () => {
  const dispatch = useDispatch();

  // const setToken = token => dispatch({type: 'SET_TOKEN', payload: {token}})
  // const setUser = user => dispatch({type: 'SET_USER', payload: {user}})

  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    AsyncStorage.getItem('TOEKN_KEY').then(val => {
      dispatch(setToken(val));
    });
  }, []);
  return <AppContainer isAuthenticated={!!token} />;
};
export default App;

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    marginTop: 100,
    paddingHorizontal: 24,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
});
