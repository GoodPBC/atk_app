import React from 'react'
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Category from '../components/category/Category'
import { SCREEN } from '../constants'

const CategoryScreen = ({navigation}) => {

    return (
        <View style={styles.wrapper}>
            <Text>Category Screen</Text>
            <Category />

            {/* <Button title="GO TO CATEGORY SCREEN" onPress={()=> navigateTo(navigation, SCREEN.CATEGORY_RESULTS)}/> */}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default CategoryScreen