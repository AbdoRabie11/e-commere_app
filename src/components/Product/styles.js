import { ScaledSheet } from 'react-native-size-matters';

import {  Dimensions  } from 'react-native'
const {width} = Dimensions.get('window')

const imageWidth = width / 2 - 20;
const imageHight = imageWidth * 2

const styles = ScaledSheet.create({
  image: {
    width: imageWidth,
    height: imageHight
},
container: {
  // marginTop:'20@s'
}
})

export default styles