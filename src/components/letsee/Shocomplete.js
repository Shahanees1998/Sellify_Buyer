import React, {useState} from 'react'
import { View, Text, FlatList,TouchableOpacity , Image} from 'react-native'
import Shoes from '../../products/Shoes'
import { Icon,withBadge } from 'react-native-elements'

import styles from '../Styles'
import Entypo from 'react-native-vector-icons/AntDesign'
import Colours from '../Colours'
import viewmoreicon from '../../assets/images/icons/viewmoreicon.png'
export default function Shocomplete (props) {
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
    const rendershoesItem = ({item})=> {
        
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
        <View nativeID = 'shoes' >
            <View style={{marginTop : 20,...styles.subtit_viewmore}}>
               <View style ={styles.subtitleview}>
                    <Text style = {styles.subtitletext}>Shoes</Text>
               </View>
             
               <View style ={{flexDirection : 'row', marginTop: 4}}>
                   <View style = {{marginRight: 6}}><Text style ={{color : '#50AAFD', fontSize : 14}}>View more</Text></View>
                   <View style = {{marginRight: 31, width : 10, height : 10, marginTop: 6}}>{/*<AntDesign name="caretright" size={10} color = '#50AAFD'/>*/}
                         <Image source={viewmoreicon}/>
                   </View>
                </View>

            </View>
            {/* shoes rendering FlatList */ }
            <View style = {{marginLeft: 31}}>
              <FlatList
              data={Shoes}
              numColumns ={2}
              renderItem={rendershoesItem}
              keyExtractor={item => item.id}
             // horizontal = {true}
              showsHorizontalScrollIndicator = {false}
              />
              
            </View>
          
            </View>
    )
}
