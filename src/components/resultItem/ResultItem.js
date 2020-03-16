import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ResultItem = () => {
    return (
        <View style={styles.wrapper}>
            <Text>Result Item Component</Text>
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

export default ResultItem