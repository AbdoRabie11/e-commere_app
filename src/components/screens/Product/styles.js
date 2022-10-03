import { ScaledSheet } from 'react-native-size-matters';

import {  Dimensions  } from 'react-native'
const {width} = Dimensions.get('window')

const imageDim = width

const styles = ScaledSheet.create({
  container: {
  },
  image: {
    width: imageDim,
    height: imageDim
  },
  button: {
    paddingHorizontal:14,
    justifyContent:'flex-end',
  },
  titleWrapper: {
    position: 'absolute',
    top: 50,
    flexDirection: 'row',
 
  },
  text: {
    color: 'white',
    fontSize: '18@s'
  },
  textWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:'40@s'
  },
  buttonWrapper: {
    justifyContent: 'flex-end',
    marginTop:'100@s'
  },
  wrapper: {
    padding: '10@s'
  }
})

export default styles