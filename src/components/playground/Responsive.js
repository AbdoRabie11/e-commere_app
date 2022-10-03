import { View, Text , TextInput, Dimensions  } from 'react-native'
import React from 'react'
// import { rem } from '../../utls/constants'

import { scale } from 'react-native-size-matters';

export const Input = (props) => {
  return (
    <View>
     <TextInput  style={{
       height: scale(40),
       borderWidth:1,
       borderColor:'#eee',
       borderRadius:5,
       marginBottom:10,
       fontSize: scale(14),
       padding: scale(12),
     }} 
     placeholder={props.placeholder}
     />
    </View>
  )
}
const {width} = Dimensions.get('window')
export function SingnUpScreen() {
  return (
    <View style={{
       flex: 1,
      justifyContent:'center',
      paddingHorizontal:50,

    }}>
    <Input placeholder='Email' />

    <View style={width > 500 ? {flexDirection: 'row'} : null}>
    <View style={width > 500 ? {flex: 1}: null}>

    <Input placeholder='password'/>
    </View>

    <View style={width > 500 ? {flex: 1}: null}>
    <Input placeholder="number"/>
    </View>
    </View>

    <View style={{alignItems: 'center'}}>    
    <Text style={{fontSize:24,fontWeight:'bold'}}>sing up </Text>
    </View>
    </View>
  )
}
