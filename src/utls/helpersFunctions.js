import axios from "axios";
import { config } from "api-request-biolerplate-actions";
import store from "../redux/store";
import { BASE_URL } from "./constants";
export const formatTimer = (totalSeconds) => {
  
  const seconds = totalSeconds % 60;
  const minuntes = (totalSeconds - seconds) / 60

  return minuntes + ':' + seconds
}

 export const getActualPrice = (price, discount) => {
  if(discount) {
    return price - price * discount
  }
  return price
}

export const configureAxios = () => {
  axios.defaults.baseURL = 'http://www.rncourseproject.com/app';
}

export const configuraApiRequest = () => {
config(store.dispatch, BASE_URL)
}

export const cutLongName = (name, maxChars = 12) => {
  if (name.length > maxChars) {
    return name.slice(0, maxChars - 3) + '...';
  }

  return name;
};

export function getTotal(items) {

  const total = items.reduce((acc, item) => {
    return acc + getActualPrice(item.price, item.discount)
  }, 0)

  return total
}