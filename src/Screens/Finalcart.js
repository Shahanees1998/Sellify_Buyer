import React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Allitems from '../products/Allitems'
import Colours from '../components/Colours';
import MobileNum from './MobileNum';
import Orderplaced from './Orderplaced'
import { Icon, withBadge } from 'react-native-elements'
import { color } from 'react-native-elements/dist/helpers';
import { assertCatchClause } from '@babel/types';
export default function Finalcart({ route, navigation }) {
    const { payment,name, addres, city, state, zip, country, num, quanids, data0, crtnum, itemid } = route.params
    const [ruk, setruk] = useState(false)
    const jao = (Screen) => {
data0(1 )
        navigation.navigate(Screen, { data0: data0, crtnum: crtnum, itemid: itemid })

    }

    const chl = (id) => {
        for (let i = 0; i < quanids.length; i++) {
            if (quanids[i].iD == id) {
                return true
            }
        }
    }
    const checkquan = (id) => {
        for (let i = 0; i < quanids.length; i++) {
            if (quanids[i].iD == id) {
                return quanids[i].qun
            }
        }

    }
    const renderdata = ({ item }) => {

        const { id, title, price, image } = item
        if (chl(id) == true && checkquan(id) > 0) {
            return (

                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: 112, height: 89, borderRadius: 10, backgroundColor: Colours.yellow, marginLeft: 30, marginTop: 18, marginBottom: 23 }}>
                        <Image source={image} style={{ width: 112, height: 112 }} />
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 35 }}>
                        <Text style={{ marginTop: 18, fontFamily: 'Medium', fontSize: 19, color: '#000000' }}>
                            Shoes</Text>
                        <Text>{title}</Text>
                        <Text style={{ marginTop: 18 }}>{price}</Text>
                    </View>
                    <View style={{ marginTop: 47, marginLeft: 76 }}>
                        <Text>{checkquan(id)}</Text>
                    </View>
                </View>

            )
            {
                setruk(false)
            }
        }
        else {
            return null
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ alignItems: 'flex-start', marginLeft: 30, marginTop: 15 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon
                        name="arrowleft"
                        type="antdesign"
                        color={Colours.barcolour}
                        size={22}

                    />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 50, marginTop: 15 }}>

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
                <View style={{ borderColor: Colours.yellow, borderWidth: 1, width: 92, height: 0, marginTop: 15 }}></View>
                <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 30, width: 30, height: 30 }}><Text>3</Text></View>

            </View>
            <View>
                <Text style={{
                    fontFamily: 'Medium',
                    fontSize: 19,
                    marginTop: 20,
                    paddingLeft: 122,
                    color: '#000000'
                }}>Order Summary</Text>
            </View>

                <View>
                    <Text style={{
                        fontFamily: 'Medium',
                        fontSize: 19,
                        marginTop: 20,
                        paddingLeft: 29,
                        color: '#000000'
                    }}>Cart</Text>

                </View>

               
                <View style={{ borderWidth: 1, borderColor: Colours.barcolour, marginTop: 5, flexDirection: 'row' }}>
                <ScrollView style={{ height: 150}} showsVerticalScrollIndicator={false}  bounces={false}>

                    <FlatList
                        data={Allitems}
                        numColumns={1}
                        renderItem={renderdata}
                        keyExtractor={item => item.id}
                        // horizontal = {true}
                        showsHorizontalScrollIndicator={false}
                    />
                                    </ScrollView>

                </View>
                <View style={{ marginLeft: 29, marginTop: 5}}><Text style={{ fontFamily: 'Medium', fontSize: 19, color: '#000000' }}>Delivery Addres</Text></View>

                <View style={{ borderWidth: 1, borderColor: Colours.barcolour, flexDirection: 'row' }}>
                    <View style={{ marginLeft: 29, marginTop: 5 }}>
                        <Text style={{ fontFamily: 'Medium', fontWeight: 'bold', fontSize: 12.5, color: '#000000' }}>{name}</Text>
                        <Text>{num}</Text>
                        <Text style={{ fontFamily: 'Medium', fontSize: 12.5 }}>{addres}</Text>
                        <Text style={{ marginBottom: 5, fontFamily: 'Medium', fontSize: 12.5 }}>{city}</Text>
                    </View>
                </View>


                <View style={{ marginLeft: 30, marginTop: 5 }}><Text style={{ fontFamily: 'Medium', fontSize: 19, color: '#000000' }}>Payement Method</Text></View>

                <View style={{ borderWidth: 1, borderColor: Colours.barcolour, flexDirection: 'row' }}>
                    <View style={{ marginLeft: 29,  width: 375, height: 30, marginBottom: 10 }}>
                        <Text style={{ marginTop: 8, marginLeft: 66 }}>{payment}</Text>

                    </View>
                </View>
                <View style={{marginTop: 20, alignItems: 'center', justifyContent: 'center', marginLeft: 25, width: 315, height: 57, borderRadius: 30, backgroundColor: Colours.yellow, borderWidth: 1, borderColor: Colours.yellow }}>
                    <TouchableOpacity onPress={() => {jao('orderplaced'); data0(1)}}>
                        <Text style={{ fontSize: 19, color: 'white', fontFamily: 'Medium' }}>Check out Now</Text>
                    </TouchableOpacity>
                </View>
        </View>)
}