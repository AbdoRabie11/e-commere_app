import { View, Text , TextInput , Image} from 'react-native'
import React from 'react'

export const Input = (props) => {
  const {underLined,
      borderd,
       borderColor,
       style, 
       wrapperSty , 
       borderRadius,
       borderWidth,
       placeholderPositon ,
       stacked,
       placeholder,
       showValidFeedback,
       isValid,
        ...rest   
        }  = props
  return (
    <View style={[borderd && {borderWidth: borderWidth || 1, borderColor: borderColor|| '#bbbbb', padding:7 , borderRadius: 4}, wrapperSty]}>
  {
    stacked && <Text style={{color: '#bbb'}}>{placeholder}</Text>
  }
    <TextInput 
    {...rest} 
    
    placeholder={stacked ? '': placeholder}
      style={
        [
        {textAlign: placeholderPositon || 'left'},
        style
        ]
        }
    />
    {showValidFeedback && isValid && (
      <Image source={require('../../assets/correct.png')} style={{width:19, position: 'absolute', top: 80, right: 20}}/>
    )}
    {(underLined || stacked) && <View style={{height:2, backgroundColor: '#eeee'}} /> 
    }
    </View>

  )
}

