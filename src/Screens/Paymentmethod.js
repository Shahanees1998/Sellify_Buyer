import React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Finalcart from './Finalcart'
import Allitems from '../products/Allitems'
import Colours from '../components/Colours';
import MobileNum from './MobileNum';
import { Icon, withBadge } from 'react-native-elements'
import { color } from 'react-native-elements/dist/helpers';
import { assertCatchClause } from '@babel/types';
import cod from '../assets/images/payment/cod.png'
import card from '../assets/images/payment/card.png'

export default function Paymentmethod({ route, navigation }) {
    const { selectedvalue,name, addres, city, state, zip, country, num, quanids, data0, crtnum, itemid } = route.params
    const jao = (Screen,text) => {

        navigation.navigate(Screen, {
            payment:text,selectedvalue,name, addres, city, state, zip, country, num, quanids, data0: data0, crtnum: crtnum, itemid: itemid
        })
    }
    const [presed, setpresed] = useState(false)
    const [Cod, setcod] = useState('COD')
    const[payment, setpayment] =useState()
    const [debit, setdebit] = useState('Debit or Credit card')
    return (
        <View style={{ flex: 1 }}>
            <View style={{ alignItems: 'flex-start', marginLeft: 30, marginTop: 47 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon
                        name="arrowleft"
                        type="antdesign"
                        color={Colours.barcolour}
                        size={22}

                    />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 50, marginTop: 57.68 }}>

                <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: Colours.yellow, borderRadius: 30, width: 30, height: 30 }}>
                    <Icon
                        name="check"
                        type="antdesign"
                        color="white"
                        size={18}

                    />
                </View>
                <View style={{ borderColor: Colours.yellow, borderWidth: 1, width: 92, height: 0, marginTop: 15 }}></View>
                <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 30, width: 30, height: 30 }}><Text>2</Text></View>
                <View style={{ borderColor: '#C4C4C4', borderWidth: 1, width: 92, height: 0, marginTop: 15 }}></View>
                <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 30, width: 30, height: 30 }}><Text>3</Text></View>

            </View>
            <View style={{ marginTop: 52.6, marginLeft: 32 }}><Text style={{ fontFamily: 'Medium', fontSize: 19 }}>Payment Method</Text></View>

            <View style={{ justifyContent: 'space-between', borderColor: Colours.barcolour, flexDirection: 'row', marginLeft: 30, marginRight: 30, marginTop: 57.68, borderWidth: 0.5 }}>
                <Image style={{ marginTop: 12, marginBottom: 12, marginLeft: 9, width: 60, height: 60 }} source={cod} />
                <Text style={{ fontFamily: 'Medium', fontSize: 15, marginTop: 35 }}>{Cod}</Text>
                <TouchableOpacity onPress={() =>jao('finalcart','(COD) Cash on Delivery')  }>
                    <Icon
                        name="chevron-right"
                        type="entypo"
                        color={Colours.yellow}
                        size={30}
                        style={{ marginRight: 35.37, marginTop: 30 }}

                    />
                </TouchableOpacity>
            </View>
            <View style={{ justifyContent: 'space-between', borderColor: Colours.barcolour, flexDirection: 'row', marginLeft: 30, marginRight: 30, marginTop: 31, borderWidth: 0.5 }}>
                <Image style={{ marginTop: 12, marginBottom: 12, marginLeft: 9, width: 60, height: 60 }} source={card} />
                <Text style={{ fontFamily: 'Medium', fontSize: 15, marginTop: 30 }}>{debit}</Text>
                <TouchableOpacity onPress={() =>  jao('finalcart','Debit and Credit card')  }>
                    <Icon
                        name="chevron-right"
                        type="entypo"
                        color={Colours.yellow}
                        size={30}
                        style={{ marginRight: 35.37, marginTop: 24 }}

                    />
                </TouchableOpacity>
            </View>
            <View>
                
            </View>
        </View>)
}