import React from 'react'
import { View, Text } from 'react-native'
//components imported
import styles from './src/components/Styles'
import Homescreen from './src/Homescreen'
//colours imported
import Colours from './src/components/Colours'
//header import
import Header from './src/header/Header'
// navigation libraries import
import MobileNum from './src/Screens/MobileNum'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Shocomplete from './src/components/letsee/Shocomplete'
import Vegcomplete from './src/components/letsee/Vegcomplete'
import Kboradcomplete from './src/components/letsee/Kboradcomplete'
import Verifynum from './src/Screens/Verifynum'
import Finalcart from './src/Screens/Finalcart'
import Addres from './src/Screens/Addres'
import Orderplaced from './src/Screens/Orderplaced'
import Paymentmethod from './src/Screens/Paymentmethod.js'
import Cartscreen from './src/Cartscreen'
import options from './src/Screens/Option'
import Viewmore from './src/Screens/Viewmore'
import Info from './src/Screens/Info'
import Contactus from './src/Screens/Contactus'
import Productdes from './src/Screens/Productdes'
const Stack = createNativeStackNavigator();
//main function start here
export default function App() {
  return (
    <View style ={{flex: 1}}>
      <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={Homescreen} options = {{headerShown : false}}/>
        <Stack.Screen name="Cartscreen" component={Cartscreen} options = {{headerShown : false}}/>
        <Stack.Screen name="mobilenum" component={MobileNum} options = {{headerShown : false}}/>
        <Stack.Screen name="verifynum" component={Verifynum} options = {{headerShown : false}} />
        <Stack.Screen name="addres" component={Addres} options = {{headerShown : false}}/>
        <Stack.Screen name="finalcart" component={Finalcart} options = {{headerShown : false}} />
        <Stack.Screen name="paymentmethod" component={Paymentmethod} options = {{headerShown : false}} />
        <Stack.Screen name="orderplaced" component={Orderplaced} options = {{headerShown : false}} />
        <Stack.Screen name="options" component={options} options = {{headerShown : false}} />
        <Stack.Screen name="viewmore" component={Viewmore} options = {{headerShown : false}} />
        <Stack.Screen name="info" component={Info} options = {{headerShown : false}} />
        <Stack.Screen name="productdes" component={Productdes} options = {{headerShown : false}} />
        <Stack.Screen name="contactus" component={Contactus} options = {{headerShown : false}} />



        







      </Stack.Navigator>
    </NavigationContainer>
    </View>
  )
}
