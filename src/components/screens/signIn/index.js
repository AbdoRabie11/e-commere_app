import {View, Text} from 'react-native';
import React, {useState , useEffect} from 'react';
import styles from './style';
import {Input} from '../../Input';
import {AddButton} from '../../AddButton';
import axios from 'axios';
import { useInput } from '../../../utls/useInput';
import { useDispatch , useSelector } from 'react-redux';
import { signIn } from '../../../redux/reducer/Actions/authACtions';
import { useRef } from 'react';
const SingIn = ({navigation}) => {
  const [number, setNumber] = useInput('', [{key: 'isPhone'}])

  const isLoading = useSelector((state) => state.auth.isSinging)
  const success = useSelector((state) => state.auth.signInSuccs)
  const dispatch = useDispatch()
   const isInatialMount = useRef(true) 


   useEffect(() => {
     if(isInatialMount.current) {
       isInatialMount.current = false;
     } else {
       navigation.navigate('ConfirmationCodeScreen')
     }
     
  },[success])

  const submitHandler = () => {
    if (number.isValid) {
     
      dispatch(signIn(number.value))
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Enter your phone number</Text>
      </View>
      <Input
        underLined
        placeholder="phone"
        onChangeText={setNumber}
        style={styles.inputWrapper}
        keyboardType="numeric"
      />

      <View style={styles.button}>
        <AddButton
          title="DONE"
          onPress={submitHandler}
          disabled={!number.isValid}
        />
      </View>
    </View>
  );
};

export default SingIn;
