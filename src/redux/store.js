import { legacy_createStore , combineReducers , applyMiddleware } from "redux";
import authReducer from "./reducer/authReducer";
import thunk from 'redux-thunk'
import { CLEAR_REDUX } from "./reducer/Actions/ActionsTypes";
import homeReducer from "./reducer/homeReducer";


const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer
})

const appReducer = (state, action) => {
  if(action.type === CLEAR_REDUX) {
    return rootReducer(undefined, action)
  }
  return rootReducer(state, action)
}

export const store = legacy_createStore(appReducer , applyMiddleware(thunk))

export default store