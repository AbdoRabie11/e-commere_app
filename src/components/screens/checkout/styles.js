import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  shipText: {
    fontSize: '19@s',
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    padding: '10@s',
    justifyContent: 'space-between'
  },
  addresSection: {
   borderWidth: 1,
  borderColor: 'black',
  borderRadius: 9,
  padding: '13@s',
  },
  updateWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  update: {
    fontWeight: 'bold',
    fontSize: '14@s',
    textDecorationLine: 'underline'
  },
  horizontal: {
    height: 1,
    backgroundColor: '#bbb',
  },
  coast: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '5@s'
  },
  key: {
    fontSize:'16@s',
    color: '#bbb'
  },
  value: {
    fontSize: '15@s'
  }
})
export default styles