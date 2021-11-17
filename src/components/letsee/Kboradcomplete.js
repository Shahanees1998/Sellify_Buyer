import React, {useState} from 'react'
import { View, Text, FlatList, Image,TouchableOpacity } from 'react-native'
import Shoes from '../../products/Shoes'
import styles from '../Styles'
import { Icon,withBadge } from 'react-native-elements'
import viewmoreicon from '../../assets/images/icons/viewmoreicon.png'

import AntDesign from 'react-native-vector-icons/AntDesign'
import Colours from '../Colours'
import Kboard from '../../products/Kboard'
export default function Kboradcomplete(props) {
    const {changenum , setnum, itemsid} = props
 
    const [quantity, setquantity] = useState(1)
    const [i_d, setid] = useState([null])
    
    const checkid= (id) => {
       // const {id}=props
       // alert(acha)
      // alert(i_d[2])
      for (let i=0; i<5; i++){
     
          if (i_d[i] == id)
        {
            return true
        }
      }
      return false
        
        } 
    const renderkeyboardItem = ({item})=> {
        
const {id,title, price, image} = item

        return(
            <View style ={styles.item_container}>
                <Text style ={styles.item_specific_title}>{title}</Text>
                <Image source = {image} style ={styles.image}/>
                <Text style={styles.price}>Rs.{price}</Text>
                <View style ={styles.addcart}>
                {checkid(id) == false ?    <TouchableOpacity onPress={() => { props.changenum(1); props.setnum(id); setid([...i_d, id]); }}>
                       <Text style = {{fontSize: 10}}>Add to cart</Text></TouchableOpacity>
                : 
                <View style={{flexDirection : 'row'}}>
                    <View style = {{marginLeft : 9, marginTop: 2}}>
                    <TouchableOpacity onPress ={() =>{setquantity(quantity-1);props.changenum(1); props.setnum(id);}}>
                    <Icon
                  name="trash"
                  type="entypo"
                  size={16}
                 
                />
                </TouchableOpacity>
                    </View>
                    <View style ={{marginLeft : 4, backgroundColor: Colours.yellow, borderRadius: 10}}>
                        <Text style = {{marginLeft: 9, marginRight: 9}}>{quantity}</Text>
                    </View>
                    
                    <View style ={{marginLeft: 4}}> 
                    <TouchableOpacity onPress ={() =>{setquantity(quantity+1);props.changenum(1); props.setnum(id);}}>
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
        )
    //}
       // else {
         //   return null
        //}
    }
    return (
        <View nativeID = 'computers and gaming' style ={{marginTop: 10}}>
            <View style={styles.subtit_viewmore}>
               <View style ={styles.subtitleview}>
                    <Text style = {styles.subtitletext}>Computers and Gaming</Text>
               </View>
             
               <View style ={{flexDirection : 'row', marginTop: 4}}>
                   <View style = {{marginRight: 6}}><Text style ={{color : '#50AAFD', fontSize : 14}}>View more</Text></View>
                   <View style = {{marginRight: 31, width : 10, height : 10, marginTop: 6}}><Image source={viewmoreicon}/></View>
                </View>

            </View>
            {/* keyboard rendering FlatList */ }
            <View style ={{marginLeft : 31}}>
              <FlatList
              data={Kboard}
              renderItem={renderkeyboardItem}
              keyExtractor={item => item.id}
             // horizontal = {true}
              numColumns = {2}
              showsHorizontalScrollIndicator = {false}
      />
            </View></View>
    )
}
