import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Filter = () => {
    return (
        <View style={styles.wrapper}>
            <Text>Filter Component</Text>
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

export default Filter