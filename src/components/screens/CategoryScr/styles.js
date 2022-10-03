import { ScaledSheet } from 'react-native-size-matters';
import {  Dimensions  } from 'react-native'
const {width} = Dimensions.get('window')

const imageWidth = width / 2;
const imageHight = imageWidth * 2


const styles = ScaledSheet.create({
      image: {
        width: imageWidth,
        height: imageHight
   
    },
    title: {
      fontSize: '20@s',
    },
    container: {
      alignItems: 'flex-start',
      marginTop:'40@s'
    }
})


export default styles