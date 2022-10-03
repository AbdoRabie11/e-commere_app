import { View, Text , Image} from 'react-native'
import React from 'react'
import styles from './styles'
import { PlatformToubale } from '../../playground/PlatformToubale'
import { useSelector , useDispatch } from 'react-redux'
import { logout } from '../../../redux/reducer/Actions/authACtions'
import { useNavigation } from '@react-navigation/native'

function renderInfoSection(user) {
  const navigation = useNavigation()
  return (
    <View style={styles.infoSection}>
      <Image source={require('../../../assets/per.png')} />
        <View style={{borderRightColor: '#bbb', borderRightWidth: 2}}/>
    <View>
      <Text
      onPress={() => {
        !user.name && navigation.navigate('UpdateAccount')
      }}
       style={[styles.infoText, !user.name && styles.hitInfoColor]}>
      {user.name || 'abdo Rabie'} 
       </Text>
      <Text>0111 89 33 254</Text>
    </View>
   </View>
  )
}



function renderDetailSection(navigation , onDisPatchRedux) {
  return (
    <View style={styles.detailSec}>
    <PlatformToubale style={styles.wapper} onPress={() => navigation.navigate('UpdateAccount')}>
    <Image source={require('../../../assets/Profiles.png')} style={{marginRight:7, marginTop: 4}} />
    <Text>PersonName</Text>
    </PlatformToubale>
    <View style={styles.horizontal} />
    <PlatformToubale onPress={() => navigation.navigate('Address')}>
    <View style={styles.wapper}>
    <Image source={require('../../../assets/location.png')} style={{marginRight:7, marginTop: 4}} />
    <Text>Shiping Address</Text>
    </View>
    </PlatformToubale>
    <View style={styles.horizontal} />
    <PlatformToubale onPress={() => navigation.navigate('OrderScreen')}>
    <View style={styles.wapper}>
    <Image source={require('../../../assets/order.png')} style={{marginRight:7, marginTop: 4}} />
    <Text>Orders</Text>
    </View>
    </PlatformToubale>
    <View style={styles.horizontal} />

     <PlatformToubale style={styles.wapper} onPress={onDisPatchRedux}>
    <Image source={require('../../../assets/logo.png')} style={{marginRight:7 , marginTop: 4}}/>
    <Text>log out</Text>
    </PlatformToubale>
    <View style={styles.horizontal} />
    </View>
  )
}


const Account = ({navigation}) => {
  const dispatch = useDispatch()

  const onDisPatchRedux = () => dispatch(logout())

  return (
    <View style={styles.container}>
     {renderInfoSection( navigation)}
     {renderDetailSection(navigation , onDisPatchRedux)}
    </View>
  )
}

export default Account