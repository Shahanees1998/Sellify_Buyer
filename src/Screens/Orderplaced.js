import React, { useState } from 'react'
import Colours from '../components/Colours'
import { Icon, withBadge } from 'react-native-elements'
import AntDesign from 'react-native-vector-icons/AntDesign'
import styles from '../components/Styles'
import Vector from '../assets/images/icons/Vector.png'
import Rectangle from '../assets/images/icons/Rectangle.png'
import Entypo from 'react-native-vector-icons/Entypo'
import { View, Text, Dimensions, TouchableOpacity, TextInput, Image } from 'react-native'
import { color } from 'react-native-elements/dist/helpers'
import Finalcart from './Finalcart'
import Paymentmethod from './Paymentmethod.js'
import check from '../assets/images/icons/check.png'
import Homescreen from '../Homescreen'
import { NavigationActions, StackActions } from 'react-navigation';
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

export default function Orderplaced({ route, navigation }) {
    const { data0, crtnum, itemid } = route.params
    const[pres,setpres] = useState(true)
    let reset = true
    const jao = (Screen) => {
if(pres==true)
{
    setpres(false)
}
else{setpres(true)}
        data0(1)
        
        navigation.navigate(Screen, { reset: 'reset' })

    }

    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <View>
                <View style={{ alignItems: 'flex-end', marginRight: 30, marginTop: 30 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon
                            name="close"
                            type="antdesign"
                            color={Colours.barcolour}
                            size={22}

                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 50, marginTop: 57.68 }}>

                    <View style={{ borderColor: Colours.barcolour, alignItems: 'center', justifyContent: 'center', backgroundColor: Colours.yellow, borderRadius: 30, width: 30, height: 30 }}>
                        <Icon
                            name="check"
                            type="antdesign"
                            color="white"
                            size={18}

                        />
                    </View>
                    <View style={{ borderColor: Colours.yellow, borderWidth: 1, width: 92, height: 0, marginTop: 15 }}></View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: Colours.yellow, borderRadius: 30, width: 30, height: 30 }}>
                        <Icon
                            name="check"
                            type="antdesign"
                            color="white"
                            size={18}

                        />
                    </View>
                    <View style={{ borderColor: Colours.yellow, borderWidth: 1, width: 92, height: 0, marginTop: 15 }}></View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: Colours.yellow, borderRadius: 30, width: 30, height: 30 }}>
                        <Icon
                            name="check"
                            type="antdesign"
                            color="white"
                            size={18}

                        />
                    </View>
                </View>
                <View style={{ marginTop: 63, alignItems: 'center' }}>
                    <Image style={{ width: 146, height: 146 }} source={check} />
                </View>
                <View style={{ alignItems: 'center', marginTop: 65 }}>
                    <Text style={{ fontFamily: 'Medium', fontSize: 22, color: Colours.yellow }}>Your Order Has Been</Text>
                    <Text style={{ fontFamily: 'Medium', fontSize: 22, color: Colours.yellow }}>Placed</Text>
                    <Text style={{ fontFamily: 'Medium', fontSize: 22, color: Colours.yellow }}>Succefully</Text>
                </View>
                <View style={{ marginTop: 30, alignItems: 'center', backgroundColor: Colours.yellow, borderColor: Colours.yellow, borderRadius: 30, borderWidth: 1, marginLeft: 30, marginRight: 30 }}>
                    <TouchableOpacity onPress={() => {jao('Home'); data0(1)}}>
                        <Text style={{ fontSize: 24, fontFamily: 'Medium', color: 'white' }}>Continue shopping</Text>
                    </TouchableOpacity>
                </View>
            </View>





















        </View>
    )
}
