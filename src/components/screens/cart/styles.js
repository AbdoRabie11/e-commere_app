import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  wrapper: { 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:20,
    },
    text: {
      fontSize:16,
      fontWeight: 'bold'
    }
})

export default styles