import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SCREEN } from '../../constants'
import { navigateTo } from '../../helpers/Navigation'
import { withNavigation } from 'react-navigation'
import { categories } from '../../data/categories'




const Category = ({navigation}) => {
    return (
        <View style={styles.wrapper}>


            <FlatList
                numColumns={2}
                showsHorizontalScrollIndicator={false}
                keyExtractor={categories => categories.category}
                data={categories} 
                renderItem={( {item} ) => {
                    console.log("ITEM: ", item.category);
                    return <View>
                            <TouchableOpacity onPress={()=> {navigation.navigate(SCREEN.CATEGORY_RESULTS)}}>
                                <Text style={styles.listtext}>{item.category} - {item.difficulty}</Text>
                            </TouchableOpacity>
                    </View>
                }}            
            />
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
        flex: 1,
        backgroundColor: 'rgba(255,255,255, .5)',
        borderColor: 'blue',
        borderWidth: 3,
        color: 'black',
        fontFamily: 'helvetica',
        alignContent: 'center',
        marginHorizontal: 10,
        marginTop: 25,
        minHeight: 40,  
    },          
});

export default withNavigation(Category)