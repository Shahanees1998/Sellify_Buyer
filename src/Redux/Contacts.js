{/*{/* import React , {useState} from 'react'
import { View, Text } from 'react-native'
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import Second from './Second'
//import { createStore} from 'react-redux'
export default function First() {
    const [val, setval] = useState(0)
const inittialval =10
    const reducer = (state=inittialval) => {
         return state
    }
    
    const store = createStore(reducer)
    return (
        <View>
            <Provider store={store}> 
            <Second />
            </Provider>
        </View>
    )
}
{}
*/}
{/*import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
export default function Contacts(props) {
    return (
        <View>
            <Text>conatct screen</Text>
        </View>
    )
}
const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({});
const connectComponent = connect(mapStateToProps, mapDispatchToProps)
export default connect()(Contacts)*/}