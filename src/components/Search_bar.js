import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput, Image
} from 'react-native';
import { Icon,withBadge } from 'react-native-elements'
import ic_search from '../assets/images/Searchbar/ic_search.png'
import Colours from './Colours';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Searchbr from './Searchbr';
export default function Search_bar(props) {
    const {onChange} = props
    const [query, setQuery] = useState();
    const [error, setError] = useState()
    const [value, setValue] = useState()
    onChange(query)
    function updateSearch(value) {
        //do your search logic or anything
     
    }
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <View style={styles.vwSearch}>
                    <Image
                        style={styles.icSearch}
                        source={ic_search} />
                </View>
                 <View style ={{ flex: 1}}>
                <TextInput
                    value={query}
                    placeholder="Search"
                    style={styles.textInput}
                   onChangeText={ 
                    (text) => {
                        var letters = /^$|^[a-zA-Z._\b ]+$/;
                        if (text.length > 12)
                            setError("Query too long.")
                        else if (text.match(letters)) {
                            setQuery(text)
                            updateSearch(text)
                            if (error)
                                setError(false)
                        }
                        else setError("Please only enter alphabets")
                    }
                }/></View>
                {
                    query ?
                        <TouchableOpacity
                            onPress={() => setQuery('')}
                            style={styles.vwClear}>
                             <View>
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
            {
                error &&
                <Text style={styles.txtError}>
                    {error}
                </Text>
            }
        </View >
    )
}
const styles = StyleSheet.create({
    txtError: {
        marginTop: '2%',
        width: '89%',
        color: 'white',

    },
    vwClear: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        
        flex: 1,
    },

    vwSearch: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        // width: 40,
    },
    icSearch: {
        height: 18, width: 18
    },
    searchContainer:
    {
        borderRadius : 15,
        backgroundColor: `${Colours.searchbar}73`,
        flex: 1,
        //${colors.black}80
        width: '90%',
        height: 40,
        flexDirection: 'row',
        width : 315,
        height : 63,
        //opacity : 600

    },
    container: {
        marginTop: 11,
        height: 63,
        alignItems: 'center',
        justifyContent: 'center'
        // height: '100%', width: '100%' 
    },
});