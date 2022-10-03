import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingVertical: '50@vs',
    paddingHorizontal: '20@s'
  },
  text: {
    fontSize: '20@s'
  },
  textWrapper: {
    alignItems:'center'
  },
  inputWrapper: {
    marginTop: '50@s',
    padding: '8@s'
  },
  button: {
    flex: 1,
    paddingHorizontal:14,
    justifyContent:'flex-end'
  }
})

export default styles