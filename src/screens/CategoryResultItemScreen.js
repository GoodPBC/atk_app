import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CategoryResult from '../components/categoryResults/CategoryResult'


const CategoryResultItemScreen = () => {
    return (
        <View style={styles.wrapper}>
            <Text>Category Result Item Screen</Text>
            <CategoryResult/>
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

export default CategoryResultItemScreen