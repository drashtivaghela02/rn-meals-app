import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'

import CategoriesScreens from '../Screens/CategoriesScreen';
import CategoryMealsScreen from '../Screens/CategoryMealsScreen';
import MealDetailsScreen from '../Screens/MealDetailsScreen';
import FavoritesScreens from '../Screens/FavoritesScreens';
import Colors from '../constatnts/Colors';

import { Ionicons } from '@expo/vector-icons';

const MealsNavigator = createStackNavigator({
    Categories: {
        screen : CategoriesScreens,
        navigationOptions : {
            headerTitle : 'Meal Categories !!!'
        }
    },
    CategoryMeals: {
        screen : CategoryMealsScreen
    },
    MealDetail : MealDetailsScreen 
}, 
{  mode: 'modal',
    defaultNavigationOptions: {    
        headerStyle: {backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'},
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
});

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcons : (tabInfo) => {
                return (
                    <Ionicons name="restaurant" size={25} color={tabInfo.tintColor} />
                );
            }
        }
    },
    Favorites: {
        screen: FavoritesScreens,
        navigationOptions: {
            tabBarIcons : (tabInfo) => {
                return (
                    <AntDesign name="staro" size={25} color={tabInfo.tintColor} />
                );
            }
        }
    }
},{
    tabBarOptions:{
        activeTintColor: Colors.accentColor
    }
});

export default createAppContainer(MealsFavTabNavigator);