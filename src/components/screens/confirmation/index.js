import {View, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {Input} from '../../Input';
import {AddButton} from '../../AddButton';
import {validate} from '../../../utls/validate';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import { confirmCode } from '../../../redux/reducer/Actions/authACtions';
import { useRef } from 'react';

const ConfirmationCode = () => {
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState({value: '', isValid: false});
  
  const dispatch = useDispatch();
  const success = useSelector(state => state.auth.confirmCodeSuccess)
  const failure = useSelector(state => state.auth.confirmCodeFailure)


  const token = useSelector(state => state.auth.token);
  
  // const setToken = token => dispatch({type: 'SET_TOKEN', payload: {token}});
  // const setUser = user => dispatch({type: 'SET_USER', payload: {user}});
  
  const isInatialMount = useRef(true) 



//  useEffect(() => {
//   if(isInatialMount.current) {
//     isInatialMount.current = false;
//   } else {
//     navigation.navigate('ConfirmationCodeScreen')
//   }
  
// },[failure])
 

  const unpdateInput = inputVal => {
    setNumber({
      value: inputVal,
      isValid: validate(inputVal, [{key: 'isConfirmation'}]),
    });
  };

  function submitHandler() {
    if (number.isValid) {
      // setLoading(true);
      // axios
      //   .post('http://99.80.90.164/mwsla4/public/api/sendpasscode', {
      //     passcode: number.value,
      //   })
      //   .then(res => {
      //     console.log(res.data);
      //     const {token} = res.data;
      //     setToken(token);
      //     AsyncStorage.setItem('TOEKN_KEY', token)
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
      // setLoading(false);

      dispatch(confirmCode(number.value))

    }
    console.log(number.value);

    // alert('you entered' + number.value)
  }

  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Enter Confirmation Code</Text>
      </View>
      <Input
        onChangeText={unpdateInput}
        placeholderPositon="center"
        placeholder="_ _ _ _ _"
        style={styles.inputWrapper}
      />

      <View style={styles.button}>
        <AddButton
          title="DONE"
          onPress={submitHandler}
          isLoading={loading}
          disabled={!number.isValid}
        />
      </View>
    </View>
  );
};

export default ConfirmationCode;
