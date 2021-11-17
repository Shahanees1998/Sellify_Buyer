import React from 'react'
import { View, Text } from 'react-native'

export default function items_handling() {
    return (
        <View style ={styles.item_container}>
        <Text style ={styles.item_specific_title}>{title}</Text>
        <Image source = {image} style ={{alignSelf : 'center', width : 150, height: 150}}/>
        <Text style={{marginLeft: 82}}>{price}</Text>
        <View style ={{...styles.addcart, width : 100}}>
        <TouchableOpacity onPress={removecart(5)}><Text style = {{fontSize: 10, marginLeft: 12.5, marginBottom: 3,marginTop:3, marginRight:4.5}}>Remove from Cart</Text></TouchableOpacity>
        </View>
        
    </View>
    )
}
