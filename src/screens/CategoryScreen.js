import React from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import Category from '../components/category/Category'
import { SCREEN } from '../constants'
import {navigateTo} from '../helpers/Navigation';

const CategoryScreen = ({navigation}) => {

    const categoryList = [
        {category: "Category 1", difficulty: 'novice'},
        {category: "Category 2", difficulty: 'beginner'},
        {category: "Category 3", difficulty: 'intermediate'},
        {category: "Category 4", difficulty: 'hard'},
        {category: "Category 5", difficulty: 'expert'},
        {category: "Category 6", difficulty: 'professional'}
    ];
    return (
        <View style={styles.wrapper}>
            <Text>Category Screen</Text>
            <Category/>
            <FlatList 
                showsHorizontalScrollIndicator={false}
                keyExtractor={categoryList => categoryList.category}
                data={categoryList} 
                renderItem={( {item} ) => {
                    return <View>
                        <Text style={styles.listtext}>{item.category} - {item.difficulty}</Text>
                    </View>
                }}            
            />
            <Button title="Category Screen Button" onPress={()=> navigateTo(navigation, SCREEN.CATEGORY_RESULTS)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    listtext: {
        backgroundColor: 'rgba(255,255,255, .5)',
        borderColor: 'blue',
        borderWidth: 3,
        color: 'black',
        fontFamily: 'helvetica',
        alignContent: 'center',
        // marginHorizontal: 40,
        marginTop: 25,
        minHeight: 40,  
    },
})

export default CategoryScreen