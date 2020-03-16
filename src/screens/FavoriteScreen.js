import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Favorite from '../components/favorite/Favorite'

const FavoriteScreen = () => {
    return (
        <View style={styles.wrapper}>
            <Text>Favorite Screen</Text>
            <Favorite />
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

export default FavoriteScreen