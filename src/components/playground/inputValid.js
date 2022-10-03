import { View, Text , TextInput , Button } from 'react-native'
import React , {useState} from 'react'
import { Input } from '../Input'

function validePhone(entered) {
  if(entered.length !== 11) {
    return false
  } 
  return Array.from(entered).every(char => char >= 0 && char <= 9)
}


const InputValid = () => {
  const [number, setNumber] = useState({value: '', isValid: false })

  const unpdateInput = (inputVal) => {
    setNumber({value: inputVal, isValid: validePhone(inputVal)})
  }


  function submitHandler() {
    if(!number.isValid) {
      alert('you baad')
      return
  }
    alert('you entered' + number.value)
  }

  return (
    <View>
      <Input placeholder='enter your phone' 
        onChangeText={unpdateInput}
        style={{borderWidth:1, borderColor: 'black', marginTop: 90, padding: 10}}
        showValidFeedback
        isValid={number.isValid}
      />
      <Button title='submit' onPress={submitHandler}/>
      <Text> your input is valid  {number.isValid.toString()} </Text>
    </View>
  )
}

export default InputValid