import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Home from '../components/home/Home'

const HomeScreen = () => {
    return (
        
        <View style={styles.wrapper}>
            <Text>HOME SCREEN</Text>
            <Home />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
    }
})

export default HomeScreen
