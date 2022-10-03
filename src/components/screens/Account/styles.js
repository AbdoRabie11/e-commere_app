import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  infoSection: {
    flexDirection: 'row',
    padding: '5@s',
    justifyContent: 'space-around',
  },
  container: {
    flex: 1,
    padding: '10@s',
  },
  horizontal: {
    height: 2,
    backgroundColor: '#bbb',
    marginTop: 3,
  },
  detailSec: {
    fontSize: '19@s',
    paddingVertical: '22@s',
  },
  wapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {},
  hitInfoColor: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    padding: 4
  },
});

export default styles;
