{/*import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
 
export default function Home () {
 
  
 
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    var cartCount = params ? params.cartCount : 0;
       return {
         title:  'Home',
         headerStyle: {
             backgroundColor: '#0570E9',
             padding:0
         },
         headerTintColor: '#fff',
         headerTitleStyle: {
             fontWeight: 'bold',
         },
         headerRight: (
          <View style={{alignItems: 'center',  justifyContent:'center'}}>
            <TouchableOpacity
              onPress={params ? params.onCartClick : this.onCartClick}>
              <View style={{flex:1, alignItems: 'center',  justifyContent:'center'}}>
              <Icon
                  name="shoppingcart"
                  type="antdesign"
                  color={"#FFFFFF"}
                  size={22}
                  containerStyle={{marginHorizontal: 15, position: 'relative',}}
                />
                {cartCount > 0 ? (
                  <View
                    style={{
                     
                      position: 'absolute',
                      backgroundColor: 'red',
                      width: 16,
                      height: 16,
                      borderRadius: 15 / 2,
                      right: 10,
                      top: +10,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: "#FFFFFF",
                        fontSize: 8,
                      }}>
                      {cartCount}
                    </Text>
                  </View>
                ) : null}
                <View>
              
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ),
       }
    };
 
 
  componentDidMount() {
   // do API call here
    var count = 10;
    this.props.navigation.setParams({cartCount: count });
  }
 
  render() {
    return (
      <View style={styles.container}>
       <Image
          source={{uri: 'https://www.techup.co.in/wp-content/uploads/2019/02/techup_logo_final_wb.jpg',}}
          //borderRadius props of style will help to make the Round Shape Image
          style={[styles.imageCircleStyle,{ transform: [{ scale: this.state.imageSize }]}]}
        />
       
      </View>
    );
  }
}
 
const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0250a3',
    padding: 10
  },
  imageCircleStyle:{
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    borderWidth: 1,
    borderColor: '#0250a3',   
    marginBottom: 30
  },
  buttonStyle:{
    marginHorizontal: 15,
    borderRadius:5,
    borderWidth:1,
    borderColor: '#0250a3',
   
  }
});