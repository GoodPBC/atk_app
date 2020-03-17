import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import CategoryResult from '../components/categoryResults/CategoryResult'
import { SCREEN } from '../constants'
import {navigateTo} from '../helpers/Navigation';

const CategoryResultsScreen = ({navigation}) => {
    
    const currentCategory = navigation.getParam('categoryName')
    
    console.log(`CURRENT CATEGORY SCREEN: ${currentCategory}`);
    console.log(`$curl https://api.edamam.com/search?q=chicken&app_id=45875a4b&app_key=d8babbfadb933db33efb3d454940ce0`);
    return (
        <View style={styles.wrapper}>
            <Text>Category Results Screen</Text>
            <CategoryResult />
            <Button title="GO TO RESULT DETAIL SCREEN" onPress={()=> navigateTo(navigation, SCREEN.CATEGORY_RESULT_ITEM)}/>
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