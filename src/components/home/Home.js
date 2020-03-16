import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Home = props => {
    console.log("HOME COMPONENT")
    return (
        <View style={styles.wrapper}>
            <Text log={()=> {console.log("HOME COMPONENT RENDER")}}>Home Component</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    }    
})

export default Home