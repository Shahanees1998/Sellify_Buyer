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
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

export default function Addres({ route, navigation }) {

    const { num, quanids, data0, crtnum, itemid } = route.params





    const [colour, setcolour] = useState('white')

    const [name, setname] = useState()
    const [addres, setaddres] = useState()
    const [city, setcity] = useState()
    const [state, setstate] = useState()
    const [zip, setzip] = useState()
    const [country, setcountry] = useState()
    const jao = (Screen) => {

        navigation.navigate(Screen, {
            name, addres, city, state, zip, country, num, quanids, data0: data0, crtnum: crtnum, itemid: itemid
        })

    }
    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <View style={{ backgroundColor: Colours.yellow }}>
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
                <View style={{ flexDirection: 'row', marginLeft: 50, marginTop: 30 }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 30, width: 30, height: 30 }}><Text>1</Text></View>
                    <View style={{ borderColor: '#C4C4C4', borderWidth: 1, width: 92, height: 0, marginTop: 15 }}></View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 30, width: 30, height: 30 }}><Text>2</Text></View>
                    <View style={{ borderColor: '#C4C4C4', borderWidth: 1, width: 92, height: 0, marginTop: 15 }}></View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 30, width: 30, height: 30 }}><Text>3</Text></View>

                </View>

            </View>
            <View style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT / 6, backgroundColor: Colours.yellow, alignItems: 'center' }}>
                {/* main backgroundd end here */}
                <View style={{ marginRight: 120, marginTop: 30 }}>
                    <Text style={{ fontFamily: 'Medium', fontSize: 22 }}>Delivery Addres</Text>
                </View>


            </View>
            <View style={{
                height: 370,
                backgroundColor: '#F6F5ED',
                bottom: 35,
                marginLeft: 30,
                marginRight: 30,
                borderRadius: 30
            }}>

                <View>
                    <View style={{ marginTop: 20, marginLeft: 2, marginRight: 2 }}>
                        <TextInput onChangeText={(text) => setname(text)} placeholder='Name' style={{ backgroundColor: '#FFFFFF', paddingLeft: 35 }} />
                    </View>
                    <View style={{ marginTop: 20, marginLeft: 2, marginRight: 2 }}>
                        <TextInput onChangeText={(text) => setaddres(text)} placeholder='Addres Line' style={{ backgroundColor: '#FFFFFF', paddingLeft: 35 }} />
                    </View>
                    <View style={{ marginTop: 20, marginLeft: 2, marginRight: 2 }}>
                        <TextInput onChangeText={(text) => setcity(text)} placeholder='City' style={{ backgroundColor: '#FFFFFF', paddingLeft: 35 }} />
                    </View>
                    <View style={{ marginTop: 20, marginLeft: 2, marginRight: 2 }}>
                        <TextInput onChangeText={(text) => setstate(text)} placeholder='State/Province/Region' style={{ backgroundColor: '#FFFFFF', paddingLeft: 35 }} />
                    </View>
                    <View style={{ marginTop: 20, flexDirection: 'row', marginLeft: 2, marginRight: 2 }}>
                        <View style={{ flex: 1 }}><TextInput onChangeText={(text) => setzip(text)} placeholder='Zip/Postal Cod' style={{ backgroundColor: '#FFFFFF', paddingLeft: 35 }} /></View>
                        <View style={{ marginLeft: 20, flex: 1 }}><TextInput onChangeText={(text) => setcountry(text)} placeholder='Country' style={{ backgroundColor: '#FFFFFF', paddingLeft: 35 }} /></View>
                    </View>









                </View>









            </View>
            <View style={{ marginBottom: 50, alignItems: 'center', backgroundColor: Colours.yellow, borderColor: Colours.yellow, borderRadius: 30, borderWidth: 1, marginLeft: 30, marginRight: 30 }}>
                <TouchableOpacity onPress={() => jao('paymentmethod')}>
                    <Text style={{ fontSize: 24, fontFamily: 'Medium', color: 'white' }}>NEXT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
