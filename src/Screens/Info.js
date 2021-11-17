import React, { useState, useEffect } from 'react'
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

export default function Info({ route, navigation }) {
    const { catag } = route.params
    const [ret, setret] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat magna et ornare risus. Duis adipiscing mauris congue non vel proin. Donec nam ultrices massa tellus habitant. Tempor mi enim faucibus tempor lobortis morbi enim. Molestie non amet quis pretium libero. Nisl, quis vel nisl, laoreet sed est, dolor, tristique. Eget purus nec, pellentesque nunc nulla ullamcorper nulla scelerisque. Malesuada aliquet in sit velit tincidunt eu. Dictumst adipiscing elementum, penatibus purus. Varius nunc, vehicula elementum tincidunt sed nunc, quis pellentesque varius. Pellentesque convallis quam tempor, tincidunt iaculis quis volutpat. Pellentesque eu posuere sed vel gravida. Nisi vitae morbi ultricies urna pretium at vitae. Euismod mauris lobortis a, vulputate odio.')
    const [pri, setpri] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat magna et ornare risus. Duis adipiscing mauris congue non vel proin. Donec nam ultrices massa tellus habitant. Tempor mi enim faucibus tempor lobortis morbi enim. Molestie non amet quis pretium libero. Nisl, quis vel nisl, laoreet sed est, dolor, tristique. Eget purus nec, pellentesque nunc nulla ullamcorper nulla scelerisque. Malesuada aliquet in sit velit tincidunt eu. Dictumst adipiscing elementum, penatibus purus. Varius nunc, vehicula elementum tincidunt sed nunc, quis pellentesque varius. Pellentesque convallis quam tempor, tincidunt iaculis quis volutpat. Pellentesque eu posuere sed vel gravida. Nisi vitae morbi ultricies urna pretium at vitae. Euismod mauris lobortis a, vulputate odio.')
    const [terms, setterms] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat magna et ornare risus. Duis adipiscing mauris congue non vel proin. Donec nam ultrices massa tellus habitant. Tempor mi enim faucibus tempor lobortis morbi enim. Molestie non amet quis pretium libero. Nisl, quis vel nisl, laoreet sed est, dolor, tristique. Eget purus nec, pellentesque nunc nulla ullamcorper nulla scelerisque. Malesuada aliquet in sit velit tincidunt eu. Dictumst adipiscing elementum, penatibus purus. Varius nunc, vehicula elementum tincidunt sed nunc, quis pellentesque varius. Pellentesque convallis quam tempor, tincidunt iaculis quis volutpat. Pellentesque eu posuere sed vel gravida. Nisi vitae morbi ultricies urna pretium at vitae. Euismod mauris lobortis a, vulputate odio.')
    const [dik, setdikh] = useState()
    useEffect(() => {
        if (catag == 'Returns and Refunds') {
            setdikh(ret)
        }
        else if (catag == 'Privacy Policy') {
            setdikh(pri)
        }
        else {
            setdikh(terms)
        }
    });
    const jao = (Screen) => {

        navigation.navigate(Screen)

    }
    return (
        <View style={{ flex: 1, backgroundColor: Colours.yellow }}>
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
                <View style={{ alignItems: 'center', marginTop: 15 }}>
                    <Text style={{ fontFamily: 'Medium', fontSize: 20 }}>{catag}</Text>
                </View>
                <View style={{ marginLeft: 30, marginRight: 30, marginTop: 40 }}>
                    <Text style={{ fontFamily: 'Medium', fontSize: 14 }}>
                        {dik}
                    </Text>
                </View>

            </View>

        </View>
    )
}
