import React, { useState } from 'react'
import Colours from '../components/Colours'
import { Icon } from 'react-native-elements'
import ic_search from '../assets/images/Searchbar/ic_search.png'
import styles from '../components/Styles'
import Vector from '../assets/images/icons/Vector.png'
import Rectangle from '../assets/images/icons/Rectangle.png'
import { Code } from '../components/Countrycode'
import { View, Text, Dimensions, TouchableOpacity, TextInput, Image, Modal, ScrollView, FlatList } from 'react-native'
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

export default function MobileNum({ route, navigation }) {
  const { quanids, data0, crtnum, itemid } = route.params

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedvalue, setselectedvalue] = useState('+92')
  const [sel, setsel] = useState()

  const [selectedlabel, setselectedlabel] = useState('(+92) Pakistan')
  const [data, setdata]= useState(Code)
  const [filterdata, setfilterdata] = useState([...data])
  const [selected, setselected] = useState('+92')
  const [num, setnum] = useState('+92')
  const jao = (Screen) => {

    navigation.navigate(Screen, { selectedvalue,num, quanids, data0: data0, crtnum: crtnum, itemid: itemid })

  }
  const [countrycode, setcountrycode] = useState(['+92'])
  const [countrycodepicker, setcountrycodepicker] = useState(false)


  const filterCountries = (search) => {
    if (search) {
      const newdata = data.filter((item) => {
          const itemdata = item.label ? item.label.toUpperCase()
              : ''.toUpperCase();
          const textdata = search.toUpperCase();
          return itemdata.indexOf(textdata) > -1;

      });
      setfilterdata(newdata)
    
  }
  else {
      setfilterdata(data)
  }
  };




  const renderdata = ({ item }) => {
    const { label, value, image } = item
    return (

      <TouchableOpacity onPress={() => { setselectedvalue(value); setselectedlabel(label); setsel(item.value); setModalVisible(false); setselected(value) }}>
        <View style={{ lex: 1, marginTop: 50, marginBottom: 10, marginLeft: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Image style={{ width: 30, height: 30 }} source={image} />
            </View>
            <View style={{ marginLeft: 20, marginTop: 5 }}>
              <Text style={{ fontFamily: 'Medium' }}>{item.label}</Text>
            </View>
          </View>
          {item.value == sel ?
            <View style={{ marginRight: 20 }}>
              <Icon
                name="check"
                type="antdesign"
                color="green"
                size={22}

              />
            </View>
            : null

          }

        </View>
      </TouchableOpacity>

    )
  }





  return (
    <View style={{ flex: 1}}>
      <View style={{ backgroundColor: Colours.yellow }}>
        <View style={{ alignItems: 'flex-start', marginLeft: 30, marginTop: 47 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
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

        <View style={{ marginTop: 10, marginLeft: 20 }}>
          <View style={{ marginLeft: 22, marginRight: 40, width: 4.5, height: 4.5, borderColor: 'white', borderWidth: 2, borderRadius: 21 }}></View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ marginTop: 10, marginRight: 40, width: 8, height: 8, borderColor: 'white', borderWidth: 2, borderRadius: 21 }}></View>
            <View style={{ marginTop: 10, width: 6.5, height: 6.5, borderColor: 'white', borderWidth: 2, borderRadius: 21 }}></View>

          </View>
        </View>



        {/* mobile with msg icon */}

        <View style={{ marginTop: 30 }}>
          <View>
            <Icon
              name="mobile1"
              type="antdesign"
              color={Colours.barcolour}
              size={62}

            />
          </View>

          <View
            style={{

              position: 'absolute',
              flexDirection: 'row',
              width: 16,
              height: 16,
              borderRadius: 15 / 2,
              right: -10,
              top: -10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={Vector} />
            <View style={{ flexDirection: 'column' }}>
              <View style={{ marginBottom: 20, marginLeft: 5, width: 8, height: 8, borderColor: 'white', borderWidth: 2, borderRadius: 21 }}></View>
              <View style={{ marginLeft: 20, width: 9, height: 9, borderColor: 'white', borderWidth: 2, borderRadius: 21 }}></View>

            </View>
          </View>
        </View>


        {/*/////// */}
        <View style={{ alignItems: 'center' }}>
          <Image source={Rectangle} />
        </View>




      </View>
      <View style={styles.mobup}>
        <View style={{ marginLeft: 34, marginTop: 80, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ fontFamily: 'Medium', fontSize: 20, color: 'black' }}>{selectedlabel}</Text>
          </View>
          <View style={{ marginRight: 30 }}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Icon
                name="chevron-down"
                type="entypo"
                color='black'
                size={30}
                style={{ marginRight: 30, marginRight: 5, }}


              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ borderWidth: 0.5, borderColor: Colours.barcolour }}></View>
        <View style={{ marginLeft: 36, marginTop: 20 }}>
          <TextInput onChangeText={(text) => setnum(selected + text)} placeholder='Your Phone Number' />
        </View>
        <View style={{ borderWidth: 0.5, borderColor: Colours.barcolour }}></View>
      </View>
      <View style={{marginBottom: 10,justifyContent: 'flex-end' }}>
        <View style={{ alignItems: 'center', backgroundColor: Colours.yellow, borderColor: Colours.yellow, borderRadius: 30, borderWidth: 1, marginLeft: 30, marginRight: 30 }}>
          <TouchableOpacity onPress={() => jao('verifynum')}>
            <Text style={{ fontSize: 24, fontFamily: 'Medium', color: 'white' }}>NEXT</Text>
          </TouchableOpacity>

        </View>
      </View>
      <ScrollView>
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >

            <View style={{ borderRadius: 10, flex: 1, marginTop: 30, marginBottom: 30, marginLeft: 30, marginRight: 30, backgroundColor: 'white' }}>
              <View style={{ marginRight: 20, marginLeft: 20, marginTop: 30, flexDirection: 'row' }}>
                <View style={{ marginTop: 10 }}>
                  <Image
                    style={{ ...styles.icSearch, width: 30, height: 30 }}
                    source={ic_search} />
                </View>
                <TextInput style={{ marginLeft: 30 }} placeholder={'Select your country code'}
                onChangeText={filterCountries}
                ></TextInput>

              </View>
              <View style={{ marginLeft: 15, marginRight: 15, borderStyle: 'solid', borderWidth: 0.5, marginTop: 20, borderColor: Colours.barcolour }}></View>
              <FlatList
                style={{ flex: 1 }}
                data={filterdata}
                renderItem={renderdata}
              />
            </View>


          </Modal>


        </View>
      </ScrollView>
    </View>
  )
}
