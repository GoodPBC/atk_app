import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import CategoryResult from '../components/categoryResults/CategoryResult'
import { SCREEN } from '../constants'
import {navigateTo} from '../helpers/Navigation';

const CategoryResultsScreen = ({navigation}) => {
    return (
        <View style={styles.wrapper}>
            <Text>Category Results Screen</Text>
            <CategoryResult />
            <Button title="Category Result Screen Button" onPress={()=> navigateTo(navigation, SCREEN.CATEGORY_RESULT_ITEM)}/>
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

export default CategoryResultsScreen