import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Ionicons, AntDesign } from "@expo/vector-icons";

import CategoriesScreen from '../Screens/CategoriesScreen';
import CategoryMealsScreen from '../Screens/CategoryMealsScreen';
import MealDetailsScreen from '../Screens/MealDetailsScreen';
import FavoritesScreens from '../Screens/FavoritesScreens';
import Colors from '../constatnts/Colors';

const Stack = createStackNavigator();
const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator() ;
const MealsNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{headerTitle: 'Meal Categories !!!' }}
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

// const MealsNavigator = createStackNavigator({
//     Categories: {
//         screen : CategoriesScreen,
//         navigationOptions : {
//             headerTitle : 'Meal Categories !!!'
//         }
//     },
//     CategoryMeals: {
//         screen : CategoryMealsScreen
//     },
//     MealDetail : MealDetailsScreen 
// }, 
// {  mode: 'modal',
//     defaultNavigationOptions: {    
//         headerStyle: {backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'},
//         headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
//     }
// });

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
                        tabBarColor: 'red',
                        headerShown: false, 
                        
                    }}
                    shifting={true}
                />
                <Tab.Screen
                    name="Favorites"
                    component={FavoritesScreens}
                    options={{
                        tabBarLabel: 'Favorites!',
                        tabBarIcon: ({ color }) => (
                            <AntDesign name="staro" size={25} color={color} />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default MealsFavTabNavigator;
