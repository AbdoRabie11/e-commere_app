

import {SET_TOKEN, SIGNIN_FALURE, SIGNIN_START, SIGNIN_SUCCESS , CONFIRM_START , CONFIRM_SUCCESS , CONFIRM_FALURE, CLEAR_REDUX} from './ActionsTypes';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// token
export const setToken = token => ({
  type: SET_TOKEN,
  payload: {token},
});

export const setUser = user => ({
  type: SET_TOKEN,
  payload: {user},
});

export const clearReduxData = () => ({type: CLEAR_REDUX})

const signInStart = () => ({type: SIGNIN_START})

const singInSucess = () => ({type: SIGNIN_SUCCESS})

const signInFaliure = () => ({type: SIGNIN_FALURE})


const confirmInStart = () => ({type: CONFIRM_START})

const confirmSucess = () => ({type: CONFIRM_SUCCESS})

const confirmFaliure = () => ({type: CONFIRM_FALURE})



export const signIn = (mobile) => {
  return (dispatch, getState) => {
    dispatch(signInStart())
    axios
      .post('http://99.80.90.164/mwsla4/public/api/sendmobile',{mobile})
      .then(res => {
        dispatch(singInSucess())
        console.log(res.data);
      })
      .catch(err => {
        dispatch(signInFaliure())
        console.log(err);
      });
  };
};


export const confirmCode = (passcode) => {
  return (dispatch, getState) => {
    dispatch(confirmSucess())
    axios
    .post('http://99.80.90.164/mwsla4/public/api/sendpasscode',{passcode})
    .then(res => {
      dispatch(confirmInStart())
      console.log(res.data);
      const {token} = res.data;
     dispatch(setToken(token));
      AsyncStorage.setItem('TOEKN_KEY', token)
    })
    .catch(err => {
      dispatch(confirmFaliure())
      console.log(err);
    });
  }
}

export const logout = () => {
  return (dispatch, getState) => {
    // clear async storage
    AsyncStorage.clear()
    // re cofigure redux data
    dispatch(clearReduxData())
  }
}



// export const getOrders = () => {
//   axios.get('https://fakestoreapi.com/products')
 
// }