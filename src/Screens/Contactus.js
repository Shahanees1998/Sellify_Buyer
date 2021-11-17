import React from 'react'
import Colours from '../components/Colours'
import { Icon, withBadge } from 'react-native-elements'
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

export default function Contactus({ route, navigation }) {


    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: Colours.yellow }}>
                <View style={{ alignItems: 'flex-end', marginRight: 30, marginTop: 55 }}>
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
            <View style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT / 2.5, backgroundColor: Colours.yellow }}>
                {/* main backgroundd end here */}

                <View style={{ marginLeft: 30, marginTop: 109 }}>
                    <Text style={{ fontFamily: 'Medium', fontSize: 19 }}>Contact Information</Text>
                </View>



                {/* mobile with msg icon */}







            </View>
            <View style={{
                height: 200,
                backgroundColor: 'white',
                bottom: 50,
                marginLeft: 30,
                marginRight: 30,
                borderRadius: 30
            }}>
                <View>
                    <View>
                        <Text style={{ marginLeft: 21, marginTop: 50 }}>0302-9279825</Text>
                        <View style={{ marginTop: 20, width: 300, height: 0, borderWidth: 0.3, borderColor: Colours.barcolour }}></View>
                    </View>
                    <View>
                        <Text style={{ marginLeft: 21, marginTop: 34 }}>malikdanial016@gmail.com</Text>
                        <View style={{ marginTop: 20, width: 300, height: 0, borderWidth: 0.3, borderColor: Colours.barcolour }}></View>
                    </View>
                    <View></View>
                </View>

            </View>

        </View>
    )
}
