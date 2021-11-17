import React from 'react'
import Colours from '../components/Colours'
import { Icon,withBadge } from 'react-native-elements'
import AntDesign from 'react-native-vector-icons/AntDesign'
import styles from '../components/Styles'
import Vector from '../assets/images/icons/Vector.png'
import Rectangle from '../assets/images/icons/Rectangle.png'
import Entypo from 'react-native-vector-icons/Entypo'
import Addres from './Addres'
import { View, Text, Dimensions, TouchableOpacity, TextInput, Image } from 'react-native'
import { color } from 'react-native-elements/dist/helpers'
import Finalcart from './Finalcart'
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

export default function Verifynum({route,navigation}) {
  const {selectedvalue,num,quanids, data0,crtnum,itemid} =route.params
 
  
    const jao=(Screen) => {
        
        navigation.navigate(Screen, {selectedvalue,num,quanids, data0:data0,crtnum:crtnum, itemid: itemid})
    
}
    return (
        <View style={{flex: 1}}>
<View style={{backgroundColor: Colours.yellow}}>
<View style={{alignItems : 'flex-end', marginRight: 30, marginTop: 55}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
                  name="close"
                  type="antdesign"
                  color={Colours.barcolour}
                  size={22}
                 
                />
                </TouchableOpacity>
        </View>
    
</View>
            <View style={{ width: SCREEN_WIDTH,height : SCREEN_HEIGHT/2.5, backgroundColor: Colours.yellow,alignItems:'center'}}>
               {/* main backgroundd end here */}
               
               <View style={{marginTop: 10, marginLeft: 20}}>
               <View style={{marginLeft: 22,marginRight: 40,width: 4.5, height: 4.5, borderColor: 'white', borderWidth: 2, borderRadius: 21}}></View>
                   <View style={{ flexDirection: 'row'}}>
                   <View style={{marginTop: 10,marginRight: 40,width: 8, height: 8, borderColor: 'white', borderWidth: 2, borderRadius: 21}}></View>
                   <View style={{marginTop: 10,width: 6.5, height: 6.5, borderColor: 'white', borderWidth: 2, borderRadius: 21}}></View>

                   </View>
               </View>
            


              {/* mobile with msg icon */}

            <View style={{marginTop: 30}}>
                <View>
              <Icon
                  name="mobile1"
                  type="antdesign"
                  color={Colours.barcolour}
                  size={62}
                 
                />
                </View>
                
                  <View
                    style={{
                     
                      position: 'absolute',
                      flexDirection: 'row',
                      width: 16,
                      height: 16,
                      borderRadius: 15 / 2,
                      right: -10,
                      top: -10,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                   <Image source={Vector}/>
                   <View style={{flexDirection: 'column'}}>
                   <View style={{marginBottom: 20,marginLeft: 5,width: 8, height: 8, borderColor: 'white', borderWidth: 2, borderRadius: 21}}></View>
                   <View style={{marginLeft: 20,width: 9, height: 9, borderColor: 'white', borderWidth: 2, borderRadius: 21}}></View>

                   </View>
                  </View>
                  </View>


                {/*/////// */}
                <View style={{alignItems: 'center'}}>
                <Image source={Rectangle}/>
                </View>



                
                </View>
                <View style ={{height: 240,
backgroundColor: 'white',
bottom: 80,
marginLeft: 30,
marginRight: 30,
borderRadius: 30
}}>
                <View style={{marginLeft: 34, marginTop: 80}}>
                    <Text style={{fontFamily: 'Medium', fontSize: 14, color: 'black'}}>Enter Verification Code</Text>
                    </View>
                    <View style ={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 44}}>
                        <View style={{alignItems: 'center',justifyContent: 'center',borderRadius: 10, backgroundColor: '#E8DFDF', width: 56,height: 50}}><Text>S</Text></View>
                        <View style={{alignItems: 'center',justifyContent: 'center',borderRadius: 10, backgroundColor: '#E8DFDF', width: 56,height: 50}}><Text>S</Text></View>
                        <View style={{alignItems: 'center',justifyContent: 'center',borderRadius: 10, backgroundColor: '#E8DFDF', width: 56,height: 50}}><Text>S</Text></View>
                        <View style={{alignItems: 'center',justifyContent: 'center',borderRadius: 10, backgroundColor: '#E8DFDF', width: 56,height: 50}}><Text>S</Text></View>
                        
                    </View>
                </View>
                <View style={{alignItems: 'center',backgroundColor: Colours.yellow,borderColor: Colours.yellow, borderRadius: 30, borderWidth: 1, marginLeft: 30, marginRight: 30}}>
                    <TouchableOpacity onPress = {() => jao('addres')}>
                    <Text style={{fontSize: 24,fontFamily: 'Medium', color: 'white'}}>NEXT</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}
