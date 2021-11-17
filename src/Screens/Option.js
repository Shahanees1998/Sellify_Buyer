import React, { useState } from 'react'
import Colours from '../components/Colours'
import { Icon, withBadge } from 'react-native-elements'
import AntDesign from 'react-native-vector-icons/AntDesign'
import styles from '../components/Styles'
import Vector from '../assets/images/icons/Vector.png'
import Rectangle from '../assets/images/icons/Rectangle.png'
import Entypo from 'react-native-vector-icons/Entypo'
import Addres from './Addres'
import home from '../assets/images/icons/home.png'
import categ1 from '../assets/images/icons/categ1.png'
import crt from '../assets/images/icons/crt.png'
import profile from '../assets/images/icons/profile.png'
import contact from '../assets/images/icons/contact.png'
import foot from '../assets/images/icons/foot.png'
import Cartscreen from '../Cartscreen'
import info from '../assets/images/icons/info.png'
import { View, Text, Dimensions, TouchableOpacity, TextInput, Image, Modal } from 'react-native'
import { color } from 'react-native-elements/dist/helpers'
import Finalcart from './Finalcart'
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

export default function options({ route, navigation }) {
    const { seet,up,setnummm,numm,setitemsiddd,setiddd,deletee,setquantity111,data,dellall,setied,setquant,setid,ied,setcurtnum,setnumm, itemsidd, setidd, setitemsidd, setquantity11, quantity11, i_dd, set,itemIds,
        quanids,
        res,
        data0,
        setnum,
        crtnum,
        serdel 
 } = route.params
    const gotocart = (screen) => {
        navigation.navigate(screen, {
        itemIds,
        quanids,
        setied,
        res,
        data0,
        dellall,
        setnum,
        crtnum,
        serdel ,
        setquant,setid,ied,setcurtnum
    })
    }
    const goview = (A, B) => {

        navigation.navigate(A, {
            catag: B,
            set: seet,
            i_dd: ied,
            setnumm: setnummm,
            itemsidd: itemsidd,
            quantity11: quantity11,
            setitemsidd: setitemsiddd,
            setidd: setiddd,
            dellall,
            
            setquantity11: setquantity111,
            numm: numm

        })

    }
    const goinfo = (A, B) => {

        navigation.navigate(A, {
            catag: B
        })

    }
    const jao = (Screen) => {

        navigation.navigate(Screen)

    }
    const [presedinfo, setpresedino] = useState(false)
    const [presedcatag, setpresedcatag] = useState(false)

    return (
        <View style={{ flex: 1 }}>
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

            </View>
            <View style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT, backgroundColor: Colours.yellow, alignItems: 'center' }}>

                {/* main backgroundd end here */}
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={{ ...styles.infoand, width: SCREEN_WIDTH }}>

                        <View style={{ flexDirection: 'row' }}>
                            <Image style={{ marginLeft: 28 }} source={home} />
                            <Text style={{ marginTop: 5, fontFamily: 'Medium', fontSize: 19, marginLeft: 22 }}>Home</Text>
                        </View>

                    </View>
                </TouchableOpacity>



                <View style={{ ...styles.infoand, width: SCREEN_WIDTH }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ marginLeft: 28, width: 30, height: 40 }} source={categ1} />
                        <Text style={{ marginTop: 5, fontFamily: 'Medium', fontSize: 19, marginLeft: 25 }}>Categoriese</Text>
                    </View>
                    <View style={{ marginRight: 21 }}>
                        {presedcatag == false ?
                            <TouchableOpacity onPress={() => { setpresedcatag(true); setpresedino(false) }}>
                                <Icon
                                    name="chevron-down"
                                    type="entypo"
                                    color='white'
                                    size={30}
                                    style={{ marginTop: 18, marginRight: 5, marginBottom: 17.91 }}


                                />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => setpresedcatag(false)}>
                                <Icon
                                    name="chevron-down"
                                    type="entypo"
                                    color='white'
                                    size={30}
                                    style={{ marginTop: 18, marginRight: 5, marginBottom: 17.91 }}


                                />
                            </TouchableOpacity>}
                    </View>
                </View>
                {presedcatag == true ?
                    <View style={{ width: SCREEN_WIDTH, backgroundColor: 'white' }}>
                        <View>

                            <TouchableOpacity onPress={() => goview('viewmore', 'Shoes')}>
                                <Text style={{ marginTop: 7, marginBottom: 3, marginLeft: 23, fontFamily: 'Medium' }}>Shoes</Text>
                            </TouchableOpacity>
                            <View style={{ borderColor: Colours.barcolour, borderBottomWidth: 1, height: 0, width: SCREEN_WIDTH }}></View>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => goview('viewmore', 'Veges')}>
                                <Text style={{ marginTop: 7, marginBottom: 3, marginLeft: 23, fontFamily: 'Medium' }}>vegetables</Text>
                            </TouchableOpacity>
                            <View style={{ borderColor: Colours.barcolour, borderBottomWidth: 1, height: 0, width: SCREEN_WIDTH }}></View>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => goview('viewmore', 'Computers')}>
                                <Text style={{ marginTop: 7, marginBottom: 3, marginLeft: 23, fontFamily: 'Medium' }}>Computers and Gamings</Text>
                            </TouchableOpacity>
                            <View style={{ borderColor: Colours.barcolour, borderBottomWidth: 1, height: 0, width: SCREEN_WIDTH }}></View>
                        </View>
                    </View>
                    :
                    null
                }




                <TouchableOpacity onPress={() => gotocart('Cartscreen')}>
                    <View style={{ ...styles.infoand, width: SCREEN_WIDTH }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={{ marginLeft: 28 }} source={crt} />
                            <Text style={{ marginTop: 5, fontFamily: 'Medium', fontSize: 19, marginLeft: 22 }}>Cart</Text>
                        </View>

                    </View>
                </TouchableOpacity>



                <View style={{ ...styles.infoand, width: SCREEN_WIDTH }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ marginLeft: 28 }} source={profile} />
                        <Text style={{ marginTop: 5, fontFamily: 'Medium', fontSize: 19, marginLeft: 22 }}>Profile</Text>
                    </View>

                </View>



                <View style={{ ...styles.infoand, width: SCREEN_WIDTH }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ marginLeft: 21 }} source={info} />
                        <Text style={{ marginTop: 5, fontFamily: 'Medium', fontSize: 19, marginLeft: 22 }}>Shopping info</Text>
                    </View>
                    <View style={{ marginRight: 21 }}>
                        {presedinfo == false ?
                            <TouchableOpacity onPress={() => { setpresedino(true); setpresedcatag(false) }}>

                                <Icon
                                    name="chevron-down"
                                    type="entypo"
                                    color='white'
                                    size={30}
                                    style={{ marginTop: 18, marginRight: 5, marginBottom: 17.91 }}


                                />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => setpresedino(false)}>
                                <Icon
                                    name="chevron-up"
                                    type="entypo"
                                    color='white'
                                    size={30}
                                    style={{ marginTop: 18, marginRight: 5, marginBottom: 17.91 }}


                                />
                            </TouchableOpacity>
                        }

                    </View>
                </View>
                {presedinfo == true ?
                    <View style={{ width: SCREEN_WIDTH, backgroundColor: 'white' }}>
                        <View>
                            <TouchableOpacity onPress={() => goinfo('info', 'Returns and Refunds')}>
                                <Text style={{ marginTop: 7, marginBottom: 3, marginLeft: 23, fontFamily: 'Medium' }}>Returns and Refunds</Text>
                            </TouchableOpacity>
                            <View style={{ borderColor: Colours.barcolour, borderBottomWidth: 1, height: 0, width: SCREEN_WIDTH }}></View>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => goinfo('info', 'Privacy Policy')}>
                                <Text style={{ marginTop: 7, marginBottom: 3, marginLeft: 23, fontFamily: 'Medium' }}>Privacy Policy</Text>
                            </TouchableOpacity>
                            <View style={{ borderColor: Colours.barcolour, borderBottomWidth: 1, height: 0, width: SCREEN_WIDTH }}></View>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => goinfo('info', 'Terms and Conditions')}>
                                <Text style={{ marginTop: 7, marginBottom: 3, marginLeft: 23, fontFamily: 'Medium' }}>Terms and Conditions</Text>
                            </TouchableOpacity>
                            <View style={{ borderColor: Colours.barcolour, borderBottomWidth: 1, height: 0, width: SCREEN_WIDTH }}></View>
                        </View>
                    </View>
                    :
                    null
                }


                <TouchableOpacity onPress={() => jao('contactus')}>
                    <View style={{ ...styles.infoand, width: SCREEN_WIDTH }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={{ marginLeft: 24, width: 35 }} source={contact} />
                            <Text style={{ marginTop: 5, fontFamily: 'Medium', fontSize: 19, marginLeft: 22 }}>Contact us</Text>
                        </View>

                    </View>
                </TouchableOpacity>

                <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 10 }}>
                    <Image source={foot} />
                    <Text style={{ fontSize: 10, fontFamily: 'Medium' }}>2021 Danial.All Rights Reversed</Text>
                </View>
            </View>

        </View>
    )
}
