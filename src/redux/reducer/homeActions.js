import axios from 'axios';

export function setProducts(products) {
  return {type: 'GET_PRODUCTS', payload: products};
}

// export function fetchHomeCategories() {
//   return (dispatch, getState) => {
//     axios.get('https://fakestoreapi.com/products').then(item => {
//       const {data} = item
//       dispatch(fetchHomeData(data));
//     });
//   };
// }
