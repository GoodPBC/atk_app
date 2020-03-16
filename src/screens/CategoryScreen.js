import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Category from '../components/category/Category'

const CategoryScreen = () => {
    return (
        <View style={styles.wrapper}>
            <Text>Category Screen</Text>
            <Category/>
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

export default CategoryScreen