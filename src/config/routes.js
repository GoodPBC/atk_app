//navigation 
import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

//screen imports
import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import CategoryResultsScreen from '../screens/CategoryResultsScreen';
import CategoryResultItemScreen from '../screens/CategoryResultItemScreen';
import FilterScreen from '../screens/FilterScreen';
import FavoriteScreen from '../screens/FavoriteScreen'
import { COLOR } from '../constants/colors';
import { SCREEN } from '../constants/screens';
import {ScanSvg, HomeSvg, HomeWhiteSvg, CollectionSvg, ProfileSvg, ProfileWhiteSvg,
    CollectionWhiteSvg, ScheduleSvg, ScheduleWhiteSvg, ScanWhiteSvg} from "../components/Svg";





const Home_Stack = createStackNavigator({
    [SCREEN.HOME]:HomeScreen,
}, {
    initialRouteName: 'ATK APP',
    headerMode: 'none',

});

const APP_TABS =  createBottomTabNavigator(
    {
        [SCREEN.HOME]: {
            screen: Home_Stack,
            navigationOptions: {
                tabBarIcon: ({focused}) => (
                    focused ? <HomeWhiteSvg/>: <HomeSvg/>
                    ),
                    tabBarLabel: 'Home',
                    
                },
        },
        [SCREEN.SCREEN_CATEGORY]: {
            screen: CategoryScreen,
            navigationOptions: {
                tabBarIcon: ({focused, tintColor}) => {
                    return (
                        focused ? <CollectionWhiteSvg/> : <CollectionSvg/>
                )},
                tabBarLabel: 'Category',

            },
        },
        [SCREEN.FILTER]: {
            screen: FilterScreen,
            navigationOptions: {
                tabBarIcon: ({focused}) => (
                    focused ? <ScheduleWhiteSvg/> :
                    <ScheduleSvg/>
                ),
                tabBarLabel: 'Filter',

            },
        },
        [SCREEN.FAVORITE]: {
            screen: FavoriteScreen,
            navigationOptions: {
                tabBarIcon: ({focused}) => (
                    focused ? <ScheduleWhiteSvg/> :
                    <ScheduleSvg/>
                ),
                tabBarLabel: 'Favorite',

            },
        },
    },
    {
        tabBarOptions: {
            activeTintColor: COLOR.white,
            activeBackgroundColor: COLOR.active_icon_bg,
            inactiveBackgroundColor: COLOR.dark_grey,
            inactiveTintColor: COLOR.dark_grey,
            style: {
                height: 60,
                borderTopColor: COLOR.active_icon_bg,
                borderTopWidth: 1,
            },
        },
    }
);



const AppNavigator =  createStackNavigator({
    [SCREEN.CATEGORY]: CategoryScreen,
    [SCREEN.CATEGORY_RESULTS]: CategoryResultsScreen,
    [SCREEN.CATEGORY_RESULT_ITEM]: CategoryResultItemScreen,
    [SCREEN.FAVORITE]: FavoriteScreen,
    [SCREEN.FILTER] : FilterScreen,
    [SCREEN.HOME]: APP_TABS,
}, {
    initialRouteName: SCREEN.HOME,
    headerMode: 'screen',
});

export default createAppContainer(AppNavigator)
