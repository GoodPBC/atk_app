import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Filter from '../components/filter/Filter'

const FilterScreen = () => {
    return (
        <View style={styles.wrapper}>
            <Text>Filter Screen</Text>
            <Filter />
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

export default FilterScreen