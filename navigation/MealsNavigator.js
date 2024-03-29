import React from 'react';
import { Platform, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Ionicons, AntDesign } from "@expo/vector-icons";

import CategoriesScreen from '../Screens/CategoriesScreen';
import CategoryMealsScreen from '../Screens/CategoryMealsScreen';
import MealDetailsScreen from '../Screens/MealDetailsScreen';
import FavoritesScreens from '../Screens/FavoritesScreens';
import FilterScreen from '../Screens/FilterScreen'
import Colors from '../constatnts/Colors';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator() ;
const Drawer = createDrawerNavigator();

const MealsNavigator = () => {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerStyle: { backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white', },
                headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
                headerTitleStyle: { fontWeight: 'bold', },
            }}    
        >
            <Stack.Screen
                name="Categories"
                component={CategoriesScreen}
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

const FavNavigator = () => {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerStyle: { backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white', },
                headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
                headerTitleStyle: { fontWeight: 'bold', },
            }}    
        >
            <Stack.Screen
                name='Favorite'
                component={FavoritesScreens}
                options={{
                    headerTitle: 'Your Favorites!!'
                }}
            />
            <Stack.Screen
                name='MealDetail'
                component={MealDetailsScreen}
            />
        </Stack.Navigator>
    );
};

const MealsFavTabNavigator = () => {
    return (
            <Tab.Navigator 
                shifting={true}
                barStyle={{ backgroundColor: Colors.primaryColor }}
                activeColor = {Colors.accentColor}
                inactiveColor = 'white'
                tabBarOptions={{
                    activeTintColor: 'white',
                    barStyles: {
                        backgroundColor: Colors.primaryColor, // Background color for tabs
                    },
                }} 
            >
                <Tab.Screen
                    name="Meals"
                    component={MealsNavigator}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="fast-food-outline" size={25} color={color} />
                        ),
                        headerShown: false, 
                        
                    }}
                />
                <Tab.Screen
                    name="Favorites"
                    component={FavNavigator}
                    options={{
                        tabBarLabel: 'Favorites!',
                        tabBarIcon: ({ color }) => (
                            <AntDesign name="staro" size={25} color={color} />
                        )
                    }}
                />
            </Tab.Navigator>
    );
};

const FiltersNavigator = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white', },
                headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
                headerTitleStyle: { fontWeight: 'bold', },
            }}    
        >
            <Stack.Screen name='Filter' component={FilterScreen} />
        </Stack.Navigator>
    );
};

const MainNavigator = () => {
    return(
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    drawerActiveTintColor: Colors.accentColor,
                    drawerLabelStyle : {
                        fontWeight: 'bold'
                    },
                  }}
            >
                <Drawer.Screen name='MealsFavs' component={MealsFavTabNavigator} options={{headerShown : false}} />
                <Drawer.Screen name='Filters' component={FiltersNavigator} options={{headerShown : false}} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigator;