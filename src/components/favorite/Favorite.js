import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Favorite = () => {
    return (
        <View style={styles.wrapper}>
            <Text> Favorite Component</Text>
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

export default Favorite