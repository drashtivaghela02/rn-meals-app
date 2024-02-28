import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from '../Screens/CategoriesScreen';
import CategoryMealsScreen from '../Screens/CategoryMealsScreen';
import MealDetailsScreen from '../Screens/MealDetailsScreen';
import FavoritesScreens from '../Screens/FavoritesScreens';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MealsNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{ headerTitle: 'Meal Categories !!!' }}
            />
            <Stack.Screen
                name="CategoryMeals"
                component={CategoryMealsScreen}
            />
            <Stack.Screen
                name="MealDetail"
                component={MealDetailsScreen}
            />
        </Stack.Navigator>
    );
};

const MealsFavTabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Meals"
                    component={MealsNavigator}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="fast-food-outline" size={25} color={color} />
                        ),
                        tabBarColor: 'red'
                    }}
                />
                <Tab.Screen
                    name="Favorites"
                    component={FavoritesScreen}
                    options={{
                        tabBarLabel: 'Favorites!',
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="staro" size={25} color={color} />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default MealsFavTabNavigator;







































import React from 'react';
import { Platform } from 'react-native';
// import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from 'react-navigation-tabs';

import CategoriesScreens from '../Screens/CategoriesScreen';
import CategoryMealsScreen from '../Screens/CategoryMealsScreen';
import MealDetailsScreen from '../Screens/MealDetailsScreen';
import FavoritesScreens from '../Screens/FavoritesScreens';
import Colors from '../constatnts/Colors';

// import { Ionicons } from '@expo/vector-icons';

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


//Parth code : 
const tabBarScreenConfig={
    Meals:
    {
        screen:MealsNavigator,
        navigationOptions:
        {
            tabBarIcon:(tabInfo)=>{
             return(<Ionicons name="fast-food-outline" size={25} color={tabInfo.tintColor}/>);
                  },
                tabBarColor:'red'
        }
    },
    Favorites:
    {
        screen:FavoritesScreens,
        navigationOptions:
            {
                tabBarLabel:'Favorites!',
                tabBarIcon:(tabInfo)=>{
                return(
                <AntDesign name="staro" size={25} color={tabInfo.tintColor} />);
                  },
              }
            }
    }
// Parth code over























    // my code
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

export default NavigationContainer(MealsFavTabNavigator);