import React , {useState, useEffect} from 'react'
 import { View, Text , StyleSheet } from 'react-native'
 import { formatTimer } from '../../utls/helpersFunctions'


 const Timer = ({maxSec , descending }) => {
   const [second, setSecond] = useState(
    descending ? maxSec : 0
   )


   let interval;

  useEffect(() => {
     interval = setTimeout(() => {
      setSecond(pervSecond => descending ? pervSecond - 1
      : pervSecond + 1 
      )

    }, 1000)
  }, [second])

  useEffect(() => {
    const deadLine = descending ? 0 : maxSec
    if(second === deadLine) {
      clearTimeout(interval)
    }
  }, [second])


   return (
     <View style={styles.container}>
       <Text> {formatTimer(second)} </Text>
     </View>
   )
 }
 
 export default Timer

 const styles = StyleSheet.create({
   container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
   }
 })