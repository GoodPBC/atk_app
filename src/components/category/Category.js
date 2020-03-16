import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Category = () => {
    return (
        <View style={styles.wrapper}>
            <Text>Category Component</Text>
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

export default Category