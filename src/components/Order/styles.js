import { ScaledSheet } from 'react-native-size-matters';


const styles = ScaledSheet.create({
  image: {
    width: 100,
    height:100,
    marginEnd: '10@s'
  },
  container: {
    flexDirection: 'row',
    marginTop: 40,
    backgroundColor: 'white',
    padding: '10@s'
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-between'
  },
  status: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  text: {
    fontWeight:'bold',
    fontSize: '16@s',
    color: 'blue',
  }

})

export default styles