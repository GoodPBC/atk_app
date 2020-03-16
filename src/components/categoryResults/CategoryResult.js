import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CategoryResult = () => {
    return (
        <View style={styles.wrapper}>
            <Text>CategoryResult Component</Text>
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

export default CategoryResult