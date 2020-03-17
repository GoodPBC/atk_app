import React from 'react'
import { FlatList, Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native'

const CategoryResult = props => {
    return (
        <View style={styles.wrapper}>
            <Text>{props.title}</Text>
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