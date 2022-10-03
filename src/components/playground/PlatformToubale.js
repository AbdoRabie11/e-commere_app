import React from 'react'
import { TouchableOpacity , TouchableNativeFeedback , Platform , StyleSheet} from 'react-native'
export  class PlatformToubale extends React.Component {
  render() {
    const Toucable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity
    return (
        <Toucable {...this.props}/>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default styles