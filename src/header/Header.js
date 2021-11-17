import React, {useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
//Icons imported
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Icon,withBadge } from 'react-native-elements'
import Cartscreen from '../Cartscreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//colours file
import Colours from '../components/Colours'
//header styles imported
import styles from '../components/Styles'
import { useNavigation } from '@react-navigation/native';
import options from '../Screens/Option'


export default function Header(props) {
  const [del, setdel] = useState()
   // const Stack = createNativeStackNavigator(
      // { cart : Cartscreen}
  //  );
  const {dellall,ied,setied,setcurtnum,setquant,setid,data, data2,data3,reset,data0,crtnum,itemid,setnum,itemm, setnummm, itemsidd, setidd,setitemsidd,setquantity11,quantity11,i_dd,set,seet,up,setnumm,numm,setitemsiddd,setiddd,deletee,setquantity111} = props
    const Badgeicon = withBadge(0)(Icon)
    
    const [go , setgo] = useState(false)
    const navigation = useNavigation();
    const jao=(Screen) => {
        
            navigation.navigate(Screen , {
              itemIds: props.data2,
              quanids: props.data3,
              res: reset,
              dellall,
              data0:data0,
              setnum: setnum,
              crtnum:data,
              itemid: itemid,
              serdel : props.changequantity,
              setquant,
              setcurtnum,
              setid:setid,
              ied, setied

            })
        
    }
    const opt=(Screen) => {
        
      navigation.navigate(Screen,{
        seet,up,setnummm,numm,setitemsiddd,setiddd,deletee,setquantity111,

        set: set,
        data,
        i_dd : i_dd,
        setnumm: setnum,
        itemsidd: itemsidd,
        quantity11 :quantity11,
        setitemsidd : setitemsidd,
        setidd: setidd,
        dellall,
        setquantity11: setquantity11,
        setquant,
        setcurtnum,
        itemid: itemid,
        setid:setid,
        ied, 
        setied,
        itemIds: props.data2,
        quanids: props.data3,
        res: reset,
        data0:data0,
        setnum: setnum,
        crtnum:crtnum, itemid: itemid,
        serdel : props.changequantity

    })
  
}

    var cartCount =0;
    return (
        <View style ={styles.home_header}>
            <View style ={{flex: 1 , alignItems : 'flex-end', marginRight: 36}}>
                <TouchableOpacity onPress = {() => jao('Cartscreen')}>
                    <View>
              <Icon
                  name="shoppingcart"
                  type="antdesign"
                  color={Colours.barcolour}
                  size={22}
                 
                />
                </View>
                {props.data > 0 ? (
                  <View
                    style={{
                     
                      position: 'absolute',
                      backgroundColor: Colours.yellow,
                      width: 16,
                      height: 16,
                      borderRadius: 15 / 2,
                      right: 0,
                      top: -10,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        color: "#FFFFFF",
                        fontSize: 8,
                      }}>
                      {props.data}
                    </Text>
                  </View>
                ) : null}
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress ={() => opt('options')}>
            <View style ={{marginRight : 31}}>
            <Feather name="align-justify" size={24} color = {Colours.barcolour}/>
           </View> 
           </TouchableOpacity>
        </View>
    )
}
 