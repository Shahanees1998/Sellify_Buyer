import React, { useState, useEffect, useCallback } from 'react'
import { View, Text,Dimensions, FlatList, Image, ScrollView, TouchableOpacity, TextInput, SafeAreaView, Button } from 'react-native'
//icons imported
import { Icon, withBadge } from 'react-native-elements'
import Colours from './components/Colours'
import ic_search from './assets/images/Searchbar/ic_search.png'
import Allitems from './products/Allitems'
import Shoes from './products/Shoes'
import viewmoreicon from './assets/images/icons/viewmoreicon.png'
import Veges from './products/Veges'
import Kboard from './products/Kboard'
import { useFocusEffect } from '@react-navigation/native';
import { NavigationEvents } from 'react-navigation'
//header file
import Header from './header/Header'
//import Searchbar from './components/Search_bar'
import Search_bar from './components/Search_bar'
import styles from './components/Styles'
import Shocomplete from './components/letsee/Shocomplete'
import Vegcomplete from './components/letsee/Vegcomplete'
import Kboradcomplete from './components/letsee/Kboradcomplete'
/////////////////////////////////////////////////////main function/////////////////////

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export default function Homescreen({ route, navigation }) {
  

    const [user, setUser] = useState(null);
    const [quantity, setquantity] = useState(1)
    const [item, setdeleteitem] = useState(0)
    const [quantity1, setquantity1] = useState([{ iD: 0, qun: 0 }])
    let array = Allitems
    let filteredarray = array;
    const [heartpres1, setheartpres1] = useState(false)

    const [ittem, setittem] = useState(array)
    const [A, B] = useState(true)
    const [An, Bn] = useState(1)
    const [filtered, setfilter] = useState(ittem)
    const [cartnum, setcartnum] = useState(0)
    const [itemsid, setitemsid] = useState([null])
    const [query, setQuery] = useState(null);
    const [i_d, setid] = useState([null])
    //const [A,B]=useState()
    useEffect(() => {
        
        if(quantity1.length<2)
        {
            setitemsid([null])
            setid([null])
        }

        const unsubscribe = navigation.addListener('focus', () => {
            // The screen is focused
            // Call any action
            
            if(A==true)
            {
                B(false)
            }
            else {
                B(true)
            }
            


        });

        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, [navigation]);
    const goview = (A, B) => {

        navigation.navigate(A, {
            catag: B
        })

    }

    //<Header setnum={(num) => setcartnum(cartnum + num)} reset = {(val)=>B(A+val)} crtnum = {(item) => setcartnum([null])} itemid = {(item) => setid([null])} data0={(iten) => setquantity1([{iD:0,qun:0}])} data={cartnum} data2={itemsid} data3 ={quantity1} changequantity = {(item) => deleteitem(item)}/>
const [update, setupdate] =useState(0)
    const gotodes = (A, B) => {

        navigation.navigate(A, {
            reset : (sett) => setheartpres1(sett),
            seet: heartpres1,
            itemm: B,
            up: (num) => setupdate(update+num),
            i_dd: i_d,
            setnumm: (num) => {setcartnum(num);if(heartpres1==true)
                {
                    setheartpres1(false)
                }
                else{setheartpres1(true)} },

            numm: cartnum,
            dellall: (nm) => {setitemsid([null]);setid([null])},
            itemsidd: itemsid,
            quantity11: quantity1,
            setitemsidd: (nmid) => {setitemsid(nmid);if(heartpres1==true)
                {
                    setheartpres1(false)
                }
                else{setheartpres1(true)}},
            setidd: (nm) => {setid(nm);if(heartpres1==true)
                {
                    setheartpres1(false)
                }
                else{setheartpres1(true)}},
            setquantity11: (ne) =>{setquantity1(ne); if(heartpres1==true)
                {
                    setheartpres1(false)
                }
                else{setheartpres1(true)} },
            deletee: (id) => del(id)

        })

    }
    const addnewitem = (nmi_d, qunt) => {
        if(qunt> 0)
        {
             setquantity1([...quantity1, { iD: nmi_d, qun: qunt }])
        }
    }
    const gotoview = (A, B) => {

        navigation.navigate(A, {
            reset : (sett) => setheartpres1(sett),
            seet: heartpres1,
            catag: B,
            dellall: (nm) => {setitemsid([null]);setid([null])},

            up: (num) => setupdate(update+num),
            i_dd: i_d,
            setnumm: (num) => {setcartnum(num);if(heartpres1==true)
                {
                    setheartpres1(false)
                }
                else{setheartpres1(true)} },
/////////////////////////////////////////////////////////
            numm: cartnum,
            itemsidd: itemsid,
            quantity11: quantity1,
            setitemsidd: (nmid) => setitemsid(nmid),
            setidd: (nm) => setid(nm),
            setquantity11: (ne) =>{setquantity1(ne); if(heartpres1==true)
                {
                    setheartpres1(false)
                }
                else{setheartpres1(true)} },
            deletee: (id) => del(id)

        })

       

    }
    const funcomb = () => {
        setfilter(ittem);
        setQuery(null);
    }

    const negupdatequantity = (id) => {
        quantity1.map((item) => {
            if (item.iD == id) {
                item.qun = item.qun - 1
                if(item.qun==0)
                {
                    
                    del(item.iD)

                }
            }
        })
    }


    
    const deleteitem = (id) => {
        quantity1.map((item) => {
            if (item.iD == id) {

                item.qun = item.qun - item.qun
                B(A + 1)
            }
        })
    }
    const del = (id) => {
        const newitemid=itemsid.filter((it) => {
            return(it !=id)
        })
        setitemsid(newitemid)
        const newdata =i_d.filter(item=> {
            
            return(item!=id)
        
        })
        setid(newdata)

        const newquantity = quantity1.filter((item) => {
            return(item.iD !=id)
            
        })
        setquantity1(newquantity)
    }
    const posupdatequantity = (id) => {
        quantity1.map((item) => {
            if (item.iD == id) {
                item.qun = item.qun + 1
            }
        })
    }
    const printqunn = (id) => {
        let val = -5

        val = quantity1.map((item) => {
            if (item.iD == id) {

                return item.qun
            }

        })

        return val
    }
    const checkaddornot = (id) => {
        const val = quantity1.map((item) => {
            if (item.iD == id) {
                item.qun = item.qun + 1
                return true
            }
        })
        if (val == true) {
            return
        }
        else {
            
            setquantity1([...quantity1, { iD: id, qun: 1 }])
        }
    }
    const checkid = (id) => {
        // const {id}=props
        // alert(acha)
        // alert(i_d[2])
        for (let i = 0; i < 100; i++) {

            if (i_d[i] == id) {
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

    }
    const c = (id, qun) => {
        for (let i = 0; i < quantity1.length; i++) {
            if (quantity1[i].iD == id) {
                quantity1[i].qun = qun

                return

            }
        }
        setquantity1([...quantity1, { iD: id, qun: 1 }])

    }
    ////////////////////////////////////       items render function          //////////////
    const renderItems = ({ item }) => {
        const { id, title, price, image } = item
        

        return (
            <View style={styles.item_container}>
                <Text style={{ ...styles.item_specific_title }}>{title}</Text>
                <TouchableOpacity onPress={() => gotodes('productdes', item)}>
                    <Image source={image} style={{ alignSelf: 'center', width: 150, height: 150 }} />
                </TouchableOpacity>
                <Text style={{ marginLeft: 82, marginBottom: 10, marginTop: 5 }}>RS.{price}</Text>
                <View style={styles.addcart}>
                    
                            {checkid(id) == false ? <TouchableOpacity onPress={() => { c(id, 1); setcartnum(cartnum + 1); setitemsid([...itemsid, id]); setid([...i_d, id]); if(heartpres1==true)
                {
                    setheartpres1(false)
                }
                else{setheartpres1(true)} }}>
                                <Text style={{ fontSize: 10 }}>Add to cart</Text></TouchableOpacity>
                                :
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ marginLeft: 9, marginTop: 2 }}>
                                        <TouchableOpacity onPress={() => { negupdatequantity(id); setcartnum(cartnum - 1); if(heartpres1==true)
                {
                    setheartpres1(false)
                }
                else{setheartpres1(true)} }}>
                                            <Icon
                                                name="trash"
                                                type="entypo"
                                                size={16}

                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ marginLeft: 4, backgroundColor: Colours.yellow, borderRadius: 10 }}>
                                        <Text style={{ marginLeft: 9, marginRight: 9 }}>{printqunn(id)}</Text>
                                    </View>

                                    <View style={{ marginLeft: 4 }}>
                                        <TouchableOpacity onPress={() => { posupdatequantity(id); setcartnum(cartnum + 1);if(heartpres1==true)
                {
                    setheartpres1(false)
                }
                else{setheartpres1(true)}  }}>
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

    }
    ////////////////////      search function         /////////////////////
    const searchitem = (search) => {
        if (search) {
            const newdata = ittem.filter((item) => {
                const itemdata = item.title ? item.title.toUpperCase()
                    : ''.toUpperCase();
                const textdata = search.toUpperCase();
                return itemdata.indexOf(textdata) > -1;

            });
            setfilter(newdata)
            setQuery(search)
        }
        else {
            setfilter(ittem)
        }
    }
    //////////////////   Query check condtion         //////////////
    if (query == null) {
        
        return home()
    }
    else {

        return serch()
    }
    ////////////////////     all items rendered          //////////////// 
    function home() {
        return (
            <View style={{ marginTop: 51, flex: 1 }}>
               
                <View>

                    <Header setidd={(nm) => setid([...i_d, nm])} quantity11={quantity1}
                        itemsidd={itemsid} set={(item) => Bn(An + 1)}
                        setquantity11={(nmi_d) => setquantity1([...quantity1, { iD: nmi_d, qun: 1 }])}
                        i_dd={i_d} setitemsidd={(nmid) => setitemsid([...itemsid, nmid])}
                        setidd={(nm) => setid([...i_d, nm])}
                        setnum={(num) => setcartnum(cartnum + num)}
                        crtnum={(item) => setcartnum([null])} itemid={(item) => setid([null])}
                        data0={(iten) => {setcartnum(0);setquantity1([{ iD: 0, qun: 0 }]);setitemsid([null]);setid([null]);if(heartpres1==true)
                        {
                            setheartpres1(false)
                        }
                        else{setheartpres1(true)} }} data={cartnum} data2={itemsid}
                        data3={quantity1} changequantity={(item) => deleteitem(item)}
                        setquant= {(item) => setquantity1(item)}
                        setcurtnum={(num) => setcartnum(num)}
                        setid= {(item) => setitemsid(item)}
                        ied={i_d}
                        setied={(id) => setid(id)}
                      //  dellall={(nm) => {setitemsid([null]);setid([null]);alert(itemsid.length)}}


                        reset = {(sett) => setheartpres1(sett)}
                        seet= {heartpres1}
                      //  catag= {B}
                        dellall= {(nm) => {setitemsid([null]);setid([null])}}
                        up= {(num) => setupdate(update+num)}
                      //  i_dd= {i_d}
                        setnummm= {(num) => {setcartnum(num);if(heartpres1==true)
                            {
                                setheartpres1(false)
                            }
                            else{setheartpres1(true)} }}
                        numm= {cartnum}
                      //  itemsidd= {itemsid}
                      //  quantity11= {quantity1}
                        setitemsiddd= {(nmid) => setitemsid(nmid)}
                        setiddd= {(nm) => setid(nm)}
                        setquantity111= {(ne) =>{setquantity1(ne); if(heartpres1==true)
                            {
                                setheartpres1(false)
                            }
                            else{setheartpres1(true)} }}
                        deletee= {(id) => del(id)}
                        />

                </View>
                {/* Homescreen main title */}
                <View>
                    <Text style={styles.hometitle}>Danial Store</Text>
                    <View style={styles.container}>
                        <View style={styles.searchContainer}>
                            <View style={styles.vwSearch}>
                                <Image
                                    style={styles.icSearch}
                                    source={ic_search} />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <TextInput
                                    value={query}
                                    placeholder='search item'
                                    //

                                    onChangeText={
                                        (text) => {
                                            var letters = /^$|^[a-zA-Z._\b ]+$/;
                                            if (text.length > 12)
                                                alert("Query too long.")
                                            else (text.match(letters))
                                            {
                                                searchitem(text)
                                            }
                                        }}

                                /></View>
                            {
                                query ?
                                    <TouchableOpacity
                                        onPress={() => funcomb()}

                                        style={styles.vwClear}>
                                        <View style={{ justifyContent: 'flex-end', marginLeft: 20 }}>
                                            <Icon
                                                name="close"
                                                type="antdesign"
                                                color={Colours.barcolour}
                                                size={22}

                                            />
                                        </View>
                                    </TouchableOpacity>
                                    : <View style={styles.vwClear} />
                            }

                        </View>

                    </View>
                </View>
                {/* /////////////////////////////////scrol view/////////////////////////////////////////// */}
                <ScrollView style={{ flexGrow: 1 }} showsVerticalScrollIndicator={false} contentInsetAdjustmentBehavior='automatic' bounces={false}>
                    { /* /////////////////////// */}



                    <View nativeID='shoes' >
                        <View style={{ marginTop: 20, ...styles.subtit_viewmore }}>
                            <View style={styles.subtitleview}>
                                <Text style={styles.subtitletext}>Shoes</Text>
                            </View>
                            <TouchableOpacity onPress={() => gotoview('viewmore', 'Shoes')}>
                                <View style={{ flexDirection: 'row', marginTop: 4 }}>

                                    <View style={{ marginRight: 6 }}><Text style={{ color: '#50AAFD', fontSize: 14 }}>View more</Text></View>
                                    <View style={{ marginRight: 31, width: 10, height: 10, marginTop: 6 }}>{/*<AntDesign name="caretright" size={10} color = '#50AAFD'/>*/}
                                        <Image source={viewmoreicon} />
                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>
                        {/* shoes rendering FlatList */}
                        <View style={{  marginLeft: WIDTH/15.5 }}>
                            <FlatList
                                data={Shoes}
                                numColumns={2}
                                renderItem={renderItems}
                                keyExtractor={item => item.id}
                                // horizontal = {true}
                                showsHorizontalScrollIndicator={false}
                            />

                        </View>

                    </View>




                    { /* /////////////////////// */}
                    <View nativeID='vegetables'>
                        <View style={styles.subtit_viewmore}>
                            <View style={styles.subtitleview}>
                                <Text style={styles.subtitletext}>Vegatables</Text>
                            </View>

                            <TouchableOpacity onPress={() => gotoview('viewmore', 'Veges')}>
                                <View style={{ flexDirection: 'row', marginTop: 4 }}>

                                    <View style={{ marginRight: 6 }}><Text style={{ color: '#50AAFD', fontSize: 14 }}>View more</Text></View>
                                    <View style={{ marginRight: 31, width: 10, height: 10, marginTop: 6 }}>{/*<AntDesign name="caretright" size={10} color = '#50AAFD'/>*/}
                                        <Image source={viewmoreicon} />
                                    </View>

                                </View>
                            </TouchableOpacity>

                        </View>
                        {/* veges rendering FlatList */}
                        <View style={{ marginLeft: WIDTH/15.5 }}>
                            <FlatList
                                data={Veges}
                                renderItem={renderItems}
                                numColumns={2}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View></View>



                    { /* ////////////////// */}


                    <View nativeID='computers and gaming' style={{ marginTop: 10 }}>
                        <View style={styles.subtit_viewmore}>
                            <View style={styles.subtitleview}>
                                <Text style={styles.subtitletext}>Computers and Gaming</Text>
                            </View>

                            <TouchableOpacity onPress={() => gotoview('viewmore', 'Computers')}>
                                <View style={{ flexDirection: 'row', marginTop: 4 }}>

                                    <View style={{ marginRight: 6 }}><Text style={{ color: '#50AAFD', fontSize: 14 }}>View more</Text></View>
                                    <View style={{ marginRight: 31, width: 10, height: 10, marginTop: 6 }}>{/*<AntDesign name="caretright" size={10} color = '#50AAFD'/>*/}
                                        <Image source={viewmoreicon} />
                                    </View>

                                </View>
                            </TouchableOpacity>

                        </View>
                        {/* keyboard rendering FlatList */}
                        <View style={{ marginLeft: WIDTH/15.5}}>
                            <FlatList
                                data={Kboard}
                                renderItem={renderItems}
                                keyExtractor={item => item.id}
                                // horizontal = {true}
                                numColumns={2}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View></View>








                    { /* ////////////////// */}
                </ScrollView>
              

            </View>
        )

        /////////////////////////   render searched items //////////////////////////
    }
    function serch() {
        return (
            <View style={{ marginTop: 51, flex: 1 }}>

                <View>

                <Header setidd={(nm) => setid([...i_d, nm])} quantity11={quantity1}
                        itemsidd={itemsid} set={(item) => Bn(An + 1)}
                        setquantity11={(nmi_d) => setquantity1([...quantity1, { iD: nmi_d, qun: 1 }])}
                        i_dd={i_d} setitemsidd={(nmid) => setitemsid([...itemsid, nmid])}
                        setidd={(nm) => setid([...i_d, nm])}
                        setnum={(num) => setcartnum(cartnum + num)} reset={(val) => B(A + val)}
                        crtnum={(item) => setcartnum([null])} itemid={(item) => setid([null])}
                        data0={(iten) => setquantity1([{ iD: 0, qun: 0 }])} data={cartnum} data2={itemsid}
                        data3={quantity1} changequantity={(item) => deleteitem(item)}
                        setquant= {(item) => setquantity1(item)}
                        setcurtnum={(num) => setcartnum(num)}
                        setid= {(item) => setitemsid(item)}
                        ied={i_d}
                        setied={(id) => setid(id)}
                        dellall={(nm) => {setitemsid([null]);setid([null])}}
                        />
                </View>
                {/* Homescreen main title */}
                <View>
                    <Text style={styles.hometitle}>Danial Store</Text>

                    <View style={styles.container}>
                        <View style={styles.searchContainer}>
                            <View style={styles.vwSearch}>
                                <Image
                                    style={styles.icSearch}
                                    source={ic_search} />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <TextInput
                                    value={query}
                                    placeholder='search item'
                                    //

                                    onChangeText={
                                        (text) => {
                                            var letters = /^$|^[a-zA-Z._\b ]+$/;
                                            if (text.length == 0)
                                                setQuery(null)
                                            else if (text.match(letters)) {
                                                if (text.length > 8) {
                                                    alert('query to long')
                                                }
                                                else {
                                                    searchitem(text)
                                                }
                                            }
                                            else if (text.length == 0) {
                                               

                                            }
                                        }}

                                /></View>
                            {
                                query ?
                                    <TouchableOpacity
                                        onPress={() => funcomb()}

                                        style={styles.vwClear}>
                                        <View style={{ justifyContent: 'flex-end', marginLeft: 20 }}>
                                            <Icon
                                                name="close"
                                                type="antdesign"
                                                color={Colours.barcolour}
                                                size={22}

                                            />
                                        </View>
                                    </TouchableOpacity>
                                    : <View style={styles.vwClear} />
                            }

                        </View>

                    </View>
                </View>
                <View style={{ marginLeft: 25, flex: 1 }}>
                    <FlatList
                        data={filtered}
                        numColumns={2}
                        renderItem={renderItems}
                        keyExtractor={item => item.id}
                        // horizontal = {true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            
            </View>
        )
    }
}
