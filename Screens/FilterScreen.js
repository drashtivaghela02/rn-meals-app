import React, { useCallback, useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, Switch, Platform  } from 'react-native';

import { HeaderButtons } from 'react-navigation-header-buttons';
import HeaderButton from '../coponents/HeaderButton';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constatnts/Colors'

const FilterSwitch = props => {
    return(
    <View style = {styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch 
            trackColor={{ true: Colors.primaryColor }}
            thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
            value={props.state} 
            onValueChange={props.onChange} 
        />
    </View>
    );
};

const FilterScreen = props => {
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegeterian, setIsVegeterian] = useState(false);

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree : isGlutenFree,
            lactoseFree : isLactoseFree,
            vegan : isVegan,
            vegeterian : isVegeterian
        };
        console.log(appliedFilters);
    },[ isGlutenFree, isLactoseFree, isVegan, isVegeterian ]);
    
    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerTitle : 'Filter Meals!',
            headerLeft : () => {
                return (
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Ionicons name="menu" size={24} onPress={()=> props.navigation.toggleDrawer()} />
                    </HeaderButtons>
                );
            },
            headerRight : () => {
                return (
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Ionicons name="save" size={24} onPress={saveFilters} />
                    </HeaderButtons>
                );
            }
        });
    },[props.navigation,saveFilters]);

    return (
        <View style = {styles.screen} >
            <Text style = {styles.title}>Available Filters / Restirsction</Text>
            <FilterSwitch 
                label="Gluten-Free" 
                state={isGlutenFree} 
                onChange={newValue => setIsGlutenFree(newValue)} 
            />
            <FilterSwitch 
                label="Lactose-Free" 
                state={isLactoseFree} 
                onChange={newValue => setIsLactoseFree(newValue)} 
            />
            <FilterSwitch 
                label="Vegan" 
                state={isVegan} 
                onChange={newValue => setIsVegan(newValue)} 
            />
            <FilterSwitch 
                label="Vegeterian" 
                state={isVegeterian} 
                onChange={newValue => setIsVegeterian(newValue)} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex :1,
        alignItems : 'center',
        justifyContent: 'flex-start'
    },
    title: {
        fontSize : 22,
        margin: 20, 
        textAlign : 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width : '80%', 
        marginVertical: 10
    }
});

export default FilterScreen;