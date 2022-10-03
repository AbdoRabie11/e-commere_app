import { ScaledSheet } from 'react-native-size-matters';


const styles = ScaledSheet.create({
  image: {
    width: 100,
    height:100,
    marginEnd: '10@s'
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: '10@s'
  },

  wrapper: {
    flex: 1,
    justifyContent: 'space-between'
  }

})

export default styles