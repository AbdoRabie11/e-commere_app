// any reducer should return new state

import { CONFIRM_FALURE, CONFIRM_START, CONFIRM_SUCCESS, SIGNIN_FALURE, SIGNIN_START, SIGNIN_SUCCESS } from "./Actions/ActionsTypes";

const iniatialState = {
  token: '',
  user: null,
  isSinging: false,
  signInSuccs: null,
  singInFailure: null,

  isConfirming: false,
  confirmCodeSuccess: null,
  confirmCodeFailure: null
}

function authReducer(state = iniatialState , action) {
 switch(action.type) {
   case 'SET_TOKEN': 
   return {
     ...state,
     token: action.payload.token
   };
   case 'SET_USER' :
     return {
       ...state,
       user: action.payload.user,
     }
     case SIGNIN_START :
       return {
        ...state,
        isSinging: true
       }
       case SIGNIN_SUCCESS :
       return {
        ...state,
        isSinging: false,
        signInSuccs: {}
       }
       case SIGNIN_FALURE :
       return {
        ...state,
        isSinging: false,
        singInFailure: {}
       }

       

       case CONFIRM_START : 
       return {
         ...state,
        isConfirming: true
       }
       case CONFIRM_SUCCESS: 
       return {
         ...state,
        isSinging: false,
        confirmCodeSuccess: {}
       }
       case CONFIRM_FALURE: 
       return {
         ...state,
         isSinging: false,
         confirmCodeFailure: {}
       }

     default:
     return state
 }
}

export default authReducer