import {StyleSheet} from "react-native";
//colours imported
import Colours from "./Colours";

const styles = StyleSheet.create(
    {

activity : {
    fontFamily : 'Medium',
    backgroundColor: Colours.barcolour
           },
home_header : {
    flexDirection: 'row',
    justifyContent: 'flex-end', 
    //backgroundColor : 'pink',
   // marginTop: 51
},
hometitle : {
    fontFamily : 'Medium',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 36,
    paddingLeft: 28,
    color : '#000000'
},
subtitletext : {
    fontFamily : 'Medium',
    fontWeight: 'bold',
    fontSize: 18,
    color : '#000000'

},
subtitleview : {
    marginLeft : 28, 
    paddingBottom : 35,
},
item_container :{
    backgroundColor : Colours.yellow, marginRight: 13, borderRadius : 20, marginBottom : 19
},
subtit_viewmore : {
    flexDirection : 'row',justifyContent : 'space-between', marginTop : 12
},
item_specific_title :{
    marginTop : 10, marginBottom: 30, marginLeft: 18
},
addcart : {
    justifyContent: 'center',alignItems : 'center',marginBottom: 10,marginLeft : 35, width: 84, height: 21,backgroundColor : 'white', borderRadius: 10, justifyContent : 'center'
},
Screens : {
    flex:1
          },
          price : {
            marginLeft: 82, marginBottom: 10
          },
          image : {alignSelf : 'center', width : 150, height: 150,marginBottom: 10},

log_sign_click : {
       borderWidth:1,
       borderColor:'white',
       alignItems:'center',
       justifyContent:'center',
      // backgroundColor:'red',
       justifyContent: 'flex-end',
       height: 50,
       justifyContent: 'center',
                 },

input : {
    //backgroundColor : 'pink',
    alignItems: 'center',
    justifyContent: "center",
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 2,
    margin: 2
       },
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

mobup : {
height: 240,
backgroundColor: 'white',
bottom: 80,
marginLeft: 30,
marginRight: 30,
borderRadius: 30,


},
infoand : {
    borderColor: Colours.barcolour,justifyContent: 'space-between',flexDirection: 'row',alignItems:'center',borderBottomWidth: 2,height :75
}

,
    
    });
export default styles