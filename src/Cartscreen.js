import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import styles from './components/Styles';
import Shoes from './products/Shoes';
import Colours from './components/Colours';
import Veges from './products/Veges';
import Kboard from './products/Kboard';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Icon, withBadge } from 'react-native-elements'
import { color } from 'react-native-elements/dist/helpers';
import { assertCatchClause } from '@babel/types';
import { useNavigation } from '@react-navigation/native';
import elipse from './assets/images/icons/elipse.png'
import Ellipse from './assets/images/icons/Ellipse.png'
import bag from './assets/images/icons/bag.png'
import bagbot from './assets/images/icons/bagbot.png'
import Allitems from './products/Allitems';
import { ProgressBarAndroidComponent } from 'react-native';
export default function Cartscreen({ route, navigation }) {
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const { dellall,setied,ied,setid,setquant,itemIds, quanids, serdel, res, data0, crtnum, itemid, setcurtnum } = route.params;
    const [check, setcheck] = useState(1)

    const [tottal, settottal] = useState(0)
    const [cartnum, setcartnum]=useState(crtnum)
    const [added, setadded] = useState([null])
    const [i_dd, seti_d]= useState([...ied])
    const [quantity, setquantity] = useState([{ id: 0, qun: 1 }])
    const [qunn, setqun] = useState([...quanids])
  //  const [qunn, setqunn] = useState([])
    let [filterlist, setfilterlist] = useState([...itemIds])
    alert(itemid.length)
    const [disab, setdisab] = useState(filterlist.length < 1 ? true : false);
    var i_d = null
    let array = []
    let jma = 0
    let check_presence = [null]
    const [quantity1, setquantity1] = useState([...quanids])
    const negupdatequantity = (id,price) => {

        qunn.map((item) => {
            if (item.iD == id) {
                if(item.qun>1) {
                item.qun = item.qun - 1
                settottal(parseFloat(tottal)-parseFloat(price))
                setcartnum(cartnum-1)
            }
                else
                {
                    setcartnum(cartnum-1)
                    settottal(parseFloat(tottal)-parseFloat(price))
                rem(id,price)
                
                }
            }

        })
    }
    const posupdatequantity = (id) => {
        qunn.map((item) => {
            if (item.iD == id) {
                item.qun = item.qun + 1
                setcartnum(cartnum+1)
              


            }
        })
    }
    const printqunn = (id) => {
        const val = qunn.map((item) => {

            if (item.iD == id) {
                return item.qun
            }
        })
        return val
    }
    const checkquan = (id) => {
        for (let i = 0; i < qunn.length; i++) {
            if (qunn[i].iD == id) {
                if (qunn[i].qun == 0) {
                   // removeitem(id)

                    return 0
                }

            }
        }
        return 5

    }

 
    const jao = (Screen) => {

        navigation.navigate(Screen, {
            quanids,
            data0: data0, crtnum: crtnum, itemid: itemid
        })

    }
    filterlist.map((item) => {

    })
    const setdisable = () => {

        if (filterlist.length < 1) {

            setdisab(true)
        }
    }

    useEffect(() => {
        // Anything in here is fired on component mount.
        let m = 0
        const arr = []
        for (let i = 1; i < quanids.length; i++) {

            Allitems.map((item) => {
                if (item.id == quanids[i].iD) {
                    arr.push(parseFloat(parseFloat(item.price) * parseFloat(quanids[i].qun)))
                    //  settottal(tottal +  parseFloat(item.price * quanids[i].qun))
                }
            })
        }
        for (let j = 0; j < arr.length; j++) {
            m = m + arr[j]

        }

        subtottal(tottal + m)
    }, [])
    const rem = (id,price) => {
       let iied=i_dd.filter((item) =>{
            return(item != id)
        })
        seti_d(iied)
        let newqun = qunn.filter((item) => {
            return (item.iD != id)
        })
        setqun(newqun)

        let filtered = filterlist.filter((item) => {
            return (item != id)
        })

        setfilterlist(filtered)

    }
    ///// remove item///
    const removeitem = (id,price) => {
        qunn.map((item) => {
            if(item.iD==id)
            {
                settottal(tottal - price*item.qun)
               
                setcartnum(cartnum-item.qun)
            }
        })
        let iied=i_dd.filter((item) =>{
            return(item != id)
        })
        seti_d(iied)
        let newqun = qunn.filter((item) => {
            return (item.iD != id)
        })
        setqun(newqun)

        let filtered = filterlist.filter((item) => {
            return (item != id)
        })

        setfilterlist(filtered)
      //  res(1)
      //  serdel(id)
       

    }

    //////// Add prices////
    const subtottal = (price) => {


        settottal(parseFloat(tottal) + parseFloat(price))
    }

    //////////// check whether already in cart
    const checkadd = (id) => {
        for (let j = 1; j < check_presence.length + 2; j++) {
            if (check_presence[j] == id) {
                return true;
            }

        }
        return false
    }
   const checkqu =(id) => {
       for (let i=0; i<qunn.length; i++)
       {
           if(qunn[i].iD==id)
           {return true}
       }
       return false
   }
    const setquan = () => {
        filterlist.map((item) => setquantity([...quantity, { id: item, qun: 1 }]))
    }
    const negtottal = (price) => {

        settottal(tottal - price)

    }
    () => setquan()

    //////////// render Shoes/////////
    const rendershoesItem = ({ item }, props) => {

        const { id, title, price, image } = item


        if (id == props && checkadd(id) == false) {
            { check_presence.push(id) }
            return (

                <View style={{ flexDirection: 'row' }}>

                    <View style={{ width: 150, height: 166, borderRadius: 10, backgroundColor: Colours.yellow, marginLeft: 30, marginTop: 18, marginBottom: 23 }}>
                        <Image source={image} style={{ alignSelf: 'center', width: 150, height: 150 }} />
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 17 }}>
                        <Text style={{ marginTop: 18, fontFamily: 'Medium', fontSize: 19, color: '#000000' }}>
                            {title}</Text>
                        <Text>{title}</Text>
                        <Text style={{ marginTop: 57 }}>{price}</Text>
                        <View style={{ marginTop: 13, borderRadius: 1, borderColor: Colours.barcolour, borderWidth: 1, flexDirection: 'row' }}>
                            <View style={{ borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderBottomWidth: 0 }}>
                                <TouchableOpacity onPress={() => { negupdatequantity(id,price)}}>
                                    <Icon
                                        name="minus"
                                        type="antdesign"
                                        color={Colours.barcolour}
                                        size={15}
                                        style={{ marginLeft: 5, marginRight: 5, marginTop: 3 }}

                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{ borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderBottomWidth: 0 }}><Text style={{ color: 'black', marginLeft: 10, marginRight: 10 }}>{printqunn(id)}</Text></View>
                            <View>
                                <TouchableOpacity onPress={() => { posupdatequantity(id);  subtottal(price) }}>
                                    <Icon
                                        name="plus"
                                        type="antdesign"
                                        color={Colours.barcolour}
                                        size={15}
                                        style={{ marginLeft: 5, marginRight: 5, marginTop: 2 }}

                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                    <View style={{ marginTop: 22, alignItems: 'flex-end' }}>
                        <TouchableOpacity onPress={() => { removeitem(id,price); setdisable() }}>
                            <Text style={{ color: Colours.yellow }}>Remove</Text>
                        </TouchableOpacity>

                        <View></View>
                    </View></View>


            )
        } else { return null }
    }

    //////////// render veges/////////
    const rendervegesItem = ({ item }, props) => {

        const { id, title, price, image } = item

        if (id == props && checkadd(id) == false) {
            { check_presence.push(id) }

            return (
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: 150, height: 166, borderRadius: 10, backgroundColor: Colours.yellow, marginLeft: 30, marginTop: 18, marginBottom: 23 }}>
                        <Image source={image} style={{ alignSelf: 'center', width: 150, height: 150 }} />
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 17 }}>
                        <Text style={{ marginTop: 18, fontFamily: 'Medium', fontSize: 19, color: '#000000' }}>
                            {title}</Text>
                        <Text>{title}</Text>
                        <Text style={{ marginTop: 57 }}>{price}</Text>
                        <View style={{ marginTop: 13, borderRadius: 1, borderColor: Colours.barcolour, borderWidth: 1, flexDirection: 'row' }}>
                            <View style={{ borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderBottomWidth: 0 }}>
                                <TouchableOpacity onPress={() => { negupdatequantity(id,price)}}>
                                    <Icon
                                        name="minus"
                                        type="antdesign"
                                        color={Colours.barcolour}
                                        size={15}
                                        style={{ marginLeft: 5, marginRight: 5, marginTop: 3 }}

                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{ borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderBottomWidth: 0 }}><Text style={{ marginLeft: 10, marginRight: 10 }}>{printqunn(id)}</Text></View>
                            <View><TouchableOpacity onPress={() => { posupdatequantity(id); setcheck(check - 1); subtottal(price) }}>
                                <Icon
                                    name="plus"
                                    type="antdesign"
                                    color={Colours.barcolour}
                                    size={15}
                                    style={{ marginLeft: 5, marginRight: 5, marginTop: 2 }}

                                />
                            </TouchableOpacity></View>
                        </View>
                    </View>
                    <View style={{ marginTop: 70, alignItems: 'flex-end' }}>
                        <TouchableOpacity onPress={() => removeitem(id,price)}>
                            <Text style={{ color: Colours.yellow }}>Remove</Text>
                        </TouchableOpacity>

                    </View></View>
            )
        } else { return null }
    }

    //////////// render keyboard/////////
    const renderkboardItem = ({ item }, props) => {

        const { id, title, price, image } = item

        if (id == props && checkadd(id) == false) {
            { check_presence.push(id) }

            return (
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: 150, height: 166, borderRadius: 10, backgroundColor: Colours.yellow, marginLeft: 30, marginTop: 18, marginBottom: 23 }}>
                        <Image source={image} style={{ alignSelf: 'center', width: 150, height: 150 }} />
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 17 }}>
                        <Text style={{ marginTop: 18, fontFamily: 'Medium', fontSize: 19, color: '#000000' }}>
                            {title}</Text>
                        <Text>{title}</Text>
                        <Text style={{ marginTop: 57 }}>{price}</Text>
                        <View style={{ marginTop: 13, borderRadius: 1, borderColor: Colours.barcolour, borderWidth: 1, flexDirection: 'row' }}>
                            <View style={{ borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderBottomWidth: 0 }}>
                                <TouchableOpacity onPress={() => { negupdatequantity(id,price)}}>
                                    <Icon
                                        name="minus"
                                        type="antdesign"
                                        color={Colours.barcolour}
                                        size={15}
                                        style={{ marginLeft: 5, marginRight: 5, marginTop: 3 }}

                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{ borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderBottomWidth: 0 }}><Text style={{ color: 'black', marginLeft: 10, marginRight: 10 }}>{printqunn(id)}</Text></View>
                            <View><TouchableOpacity onPress={() => { posupdatequantity(id); setcheck(check - 1); subtottal(price) }}>
                                <Icon
                                    name="plus"
                                    type="antdesign"
                                    color={Colours.barcolour}
                                    size={15}
                                    style={{ marginLeft: 5, marginRight: 5, marginTop: 3 }}

                                />
                            </TouchableOpacity></View>
                        </View>

                    </View>
                    <View style={{
                        marginTop: 22









                        , alignItems: 'flex-end'
                    }}>
                        <TouchableOpacity onPress={() => removeitem(id)}>
                            <Text style={{ color: Colours.yellow }}>Remove</Text>
                        </TouchableOpacity>

                    </View></View>
            )
        } else { return null }
    }


    ///////////// //////////// xheck acyualy what the item is like shoes or veges/////////
    const itemfromwhichcatagory = () => {

        return filterlist.map((ids, key) => {
            if (ids < 10) {
                i_d = ids
                return (
                    <FlatList
                        horizontal={true}
                        data={Shoes}
                        renderItem={(item) => rendershoesItem(item, ids)}

                        numColumns={1}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                    />
                )

            }
            else if (ids > 10 && ids < 20) {
                return (
                    <FlatList
                        data={Veges}
                        renderItem={(item) => rendervegesItem(item, ids)}

                        numColumns={1}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                    />
                )
            }
            else if (ids == 0) {
                return
            }
            else (ids > 20)
            {
                return (
                    <FlatList
                        data={Kboard}
                        renderItem={(item) => renderkboardItem(item, ids)}

                        numColumns={1}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                    />
                )
            }
        })
    }


    if (qunn.length > 1) {
       
        return (


            ////////////////////////////////////////////     //
            <View style={{ flex: 1 }}>
                <View style={{ alignItems: 'flex-end', marginRight: 30, marginTop: 71 }}>
                    <TouchableOpacity onPress={() => {setied(i_dd); navigation.goBack();setcurtnum(cartnum);setquant(qunn);setid(filterlist) }}>
                        <Icon
                            name="close"
                            type="antdesign"
                            color={Colours.barcolour}
                            size={22}

                        />
                    </TouchableOpacity>
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
                    <View style={{ borderWidth: 1, borderColor: Colours.barcolour, marginTop: 5 }}>
                        <ScrollView style={{ height: 200 }} showsVerticalScrollIndicator={false} contentInsetAdjustmentBehavior='automatic' bounces={false}>
                            {itemfromwhichcatagory()}
                        </ScrollView>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent:'flex-end' }}>
                        <View>
                            <Text style={{ fontFamily: 'Medium', fontSize: 19, color: '#000000', marginLeft: 30, marginTop: 10 }}>Summary</Text>
                        </View>
                        <View>
                            <Text style={{ marginLeft: 72, marginTop: 50, fontFamily: 'Medium', fontSize: 12 }}>Subtottal</Text>
                            <Text style={{ marginLeft: 72, marginTop: 21, fontFamily: 'Medium', fontSize: 12 }}>Delivery</Text>
                        </View>
                        <View style={{ marginRight: 30, marginBottom: 20 }}>
                            <Text style={{ marginLeft: 45, marginTop: 50, fontFamily: 'Medium', fontSize: 12 }}>{tottal}</Text>
                            <Text style={{ marginLeft: 45, marginTop: 21, fontFamily: 'Medium', fontSize: 12 }}>Free</Text>
                        </View>
                    </View>

                    <View style={{ alignItems: 'flex-end',borderWidth: 1 }}>
                        <View style={{ flexDirection: 'row', marginRight: 30 }}>
                            <Text style={{ marginRight: 50 }}>Tottal</Text>
                            <Text>{tottal}</Text>
                        </View>
                    </View>



<View style={{justifyContent: 'flex-end',flex: 1, marginBottom: 30}}>
                    <View style={{alignItems: 'center', justifyContent: 'center', marginLeft: 25, width: 315, height: 57, borderRadius: 30, backgroundColor: Colours.yellow, borderWidth: 1, borderColor: Colours.yellow }}>
                        <TouchableOpacity disabled={disab} onPress={() => jao('mobilenum')}>
                            {disab == true ? <Text style={{ fontSize: 19, color: Colours.barcolour, fontFamily: 'Medium' }}>Check out Now</Text>
                                :
                                <Text style={{ fontSize: 19, color: 'white', fontFamily: 'Medium' }}>Check out Now</Text>
                            }
                        </TouchableOpacity>
                    </View>
                    </View>
            </View>
            ////////////////////////////////////////




        )
    }
    else {
        { res(1) }
        return (
            <View style={{ flex: 1 }}>
                <View>
                    <View style={{ alignItems: 'flex-end', marginRight: 30, marginTop: 55 }}>
                    <TouchableOpacity onPress={() => {dellall(1),setied(i_dd); navigation.goBack();setcurtnum(cartnum);setquant(qunn);setid(filterlist) }}>
                            <Icon
                                name="close"
                                type="antdesign"
                                color={Colours.barcolour}
                                size={22} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ marginTop: 40 }}>
                            <Image style={{ width: 243, height: 243 }} source={Ellipse} />
                        </View>
                        <View style={{ marginTop: 56 }}>
                            <Text style={{ fontFamily: 'Medium', fontSize: 31 }}>Your Cart is empty!</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 120 }}>               
                 <View style={{ marginBottom: 50, alignItems: 'center', backgroundColor: Colours.yellow, borderColor: Colours.yellow, borderRadius: 30, borderWidth: 1, marginLeft: 30, marginRight: 30 }}>
                    <TouchableOpacity onPress={() => {dellall(1),setied(i_dd); navigation.goBack();setcurtnum(cartnum);setquant(qunn);setid(filterlist) }}>

                        <Text style={{ fontSize: 24, fontFamily: 'Medium', color: 'white' }}>Continue Shopping</Text>

                    </TouchableOpacity>
                </View>
                </View>
            </View>
        )
    }

}





