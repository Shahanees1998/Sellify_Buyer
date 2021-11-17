import React, { useState } from 'react'
import Colours from '../components/Colours'
import { Icon, withBadge } from 'react-native-elements'
import AntDesign from 'react-native-vector-icons/AntDesign'
import styles from '../components/Styles'
import Vector from '../assets/images/icons/Vector.png'
import Rectangle from '../assets/images/icons/Rectangle.png'
import Entypo from 'react-native-vector-icons/Entypo'
import Addres from './Addres'
import heart from '../assets/images/icons/heart.png'
import { View, Text, Dimensions, TouchableOpacity, TextInput, Image } from 'react-native'

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

export default function Productdes({ route, navigation }) {
    const [number, setnumber] = useState(0)
    const [heartpres, setheartpres] = useState(false)
    const [heartpres1, setheartpres1] = useState(false)
    const { dellall,numm,seet,reset,quantity11,setquantity11,i_dd, setidd,itemsidd, setitemsidd,itemm, setnumm,deletee, set, up } = route.params
    const [identity, setidentity] = useState([...i_dd])
    const [quantity1, setquantity1] = useState([...quantity11])
    const [ied, setied] = useState(i_dd)
    const [itemied, setitemied] = useState(itemsidd)
    const [sett, setsett] = useState(1)
    const [A, setA] = useState(false)
    const[num, setnum] =useState(numm)
    const setkr = (id) => {
        for (let i=0; i<quantity11.length; i++)
        {if(quantity1.length==quantity11.length){
            if(quantity11[i].iD==id)
            {
                quantity11[i].qun = quantity1[i].qun
                if(seet == true)
                {
                    reset(false)
                }
                else{reset(true)}
                return null
            }
        }}
        setquantity11(quantity1) 
        setidd(ied)
        setitemsidd(itemied)
     
    }
    const negupdatequantity = (id) => {

        quantity1.map((it) => {
            if (it.iD == id) {
                it.qun = it.qun - 1
                alert(it.qun)
                if(heartpres1==true)
                {
                    setheartpres1(false)
                }
                else{setheartpres1(true)}
                if(it.qun<1)
                {
                    del(id)
                }
              

            }

        })
    }
    const del = (id) => {
const newied = ied.filter((item) => 
{return (item != id)}
)
setied(newied)
const newitemied = itemied.filter((item) => 
{return (item != id)}
)
setitemied(newitemied)
        const newquantity = quantity1.filter((item) => {
            return(item.iD !=id)
            
        })
        if(heartpres1==true)
                {
                    setheartpres1(false)
                }
                else{setheartpres1(true)}
        setquantity1(newquantity)
        setquantity11(quantity1) 
    }
    const posupdatequantity = (id) => {
        quantity1.map((it) => {
            if (it.iD == id) {
                // alert('pos')
                //  it.qun=item.qun + 1
                it.qun = it.qun + 1
                if(heartpres1==true)
                {
                    setheartpres1(false)
                }
                else{setheartpres1(true)}



            }
        })
        setsett(set+1)
    }
    const printqunn = (id) => {
        const val = quantity1.map((it) => {

            if (it.iD == id) {
                return it.qun
            }
        })
        return val
    }
    const checkid = (id) => {
        // const {id}=props
        // alert(acha)
        // alert(i_d[2])
        for (let i = 0; i < quantity1.length; i++) {

            if (quantity1[i].iD == id) {
                return true
            }
        }
        return false

    }
    const checkquan = (id) => {
        for (let i = 0; i < quantity1.length; i++) {
            if (quantity1[i].iD == id) {
                if (quantity1[i].qun == 0) {
                    return 0
                }

            }
        }
        return 5

    }




    const jao = (Screen) => {

        navigation.navigate(Screen)

    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: Colours.yellow }}>
                <View style={{ alignItems: 'flex-start', marginLeft: 30, marginTop: 47 }}>
                    <TouchableOpacity onPress={() => { navigation.goBack();setkr(itemm.id);setnumm(num);
                    if(quantity1.length<2)
                    {
                        dellall(1)
                    }
                    }}>
                        <Icon
                            name="arrowleft"
                            type="antdesign"
                            color={Colours.barcolour}
                            size={22}

                        />
                    </TouchableOpacity>
                </View>

            </View>
            <View style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT / 2.5, backgroundColor: Colours.yellow, alignItems: 'center' }}>
                {/* main backgroundd end here */}






                {/* mobile with msg icon */}

                <View style={{ marginBottom: 60 }}>
                    <View>
                        <Image style={{ width: 150, height: 150 }} source={itemm.image} />
                    </View>


                </View>




            </View>
            <View style={{
                height: 400,
                backgroundColor: 'white',
                bottom: 80,

                borderRadius: 30
            }}>
                <View style={{ marginRight: 30, marginLeft: 30 }}>
                    <View>
                        <Text style={{ fontFamily: 'Medium', fontSize: 24, marginTop: 30, color: '#000000' }}>{itemm.title}</Text>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={{ fontFamily: 'Medium', fontSize: 20, color: Colours.barcolour }}>RS.{itemm.price}</Text>
                    </View>
                    <View style={{ marginTop: 55 }}>
                        <Text style={{ fontFamily: 'Medium', color: '#000000' }}>Product description</Text>
                    </View>
                    <View style={{ marginTop: 6 }}>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus pretium adipiscing ut convallis aliquet sagittis, lectus non id.
                        </Text>
                    </View>
                    <View style={{ justifyContent: 'space-between', marginTop: 33, flexDirection: 'row' }}>

                        {heartpres == false ?
                            <TouchableOpacity onPress={() => setheartpres(true)}>
                                <Icon
                                    name="heart-outlined"
                                    type="entypo"
                                    color={Colours.barcolour}
                                    size={30}

                                />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => setheartpres(false)}>
                                <Icon
                                    name="heart"
                                    type="entypo"
                                    color={'red'}
                                    size={30}

                                />

                            </TouchableOpacity>}
                            <View style={styles.addcart}>

                                {checkid(itemm.id) == false ? <TouchableOpacity onPress={() => { setnum(num+1);setied([...ied, itemm.id]);setitemied([...itemied, itemm.id]);setsett(set+1);setquantity1([...quantity1, {iD: itemm.id, qun: 1}])}}>
                                    <Text style={{ fontSize: 10 }}>Add to cart</Text></TouchableOpacity>
                                    :
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ marginLeft: 9, marginTop: 2 }}>
                                            <TouchableOpacity onPress={() => { setnum(num-1);setsett(set+1);negupdatequantity(itemm.id)}}>
                                                <Icon
                                                    name="trash"
                                                    type="entypo"
                                                    size={16}

                                                />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ marginLeft: 4, backgroundColor: Colours.yellow, borderRadius: 10 }}>
                                            <Text style={{ marginLeft: 9, marginRight: 9 }}>{printqunn(itemm.id)}</Text>
                                        </View>

                                        <View style={{ marginLeft: 4 }}>
                                            <TouchableOpacity onPress={() => {setnum(num+1); posupdatequantity(itemm.id);setsett(1)}}>
                                                <Icon
                                                    name="plus"
                                                    type="antdesign"
                                                    size={16}
                                                />
                                                
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                }
                         </View>
                    </View>

                </View>

            </View>

        </View>
    )
}
