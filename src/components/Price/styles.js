import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
      flexDirection: 'row'
  },
  oldPrice: {
    fontSize: '16@s',
    color: 'blue',
    paddingHorizontal: '5@s'
  },
  price: {
    color: '#bbb'
  }
})
export default styles