import React, { useCallback, useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, Switch, Platform  } from 'react-native';
import { useDispatch } from 'react-redux';
import { HeaderButtons } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import HeaderButton from '../coponents/HeaderButton';
import Colors from '../constatnts/Colors'
import { setFilters } from '../store/actions/meals';

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

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree : isGlutenFree,
            lactoseFree : isLactoseFree,
            vegan : isVegan,
            vegeterian : isVegeterian
        };
        console.log(appliedFilters);
        dispatch(setFilters(appliedFilters));
    },[ isGlutenFree, isLactoseFree, isVegan, isVegeterian, dispatch ]);
    
    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerTitle : 'Filter Meals!',
            headerLeft : () => {
                return (
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Ionicons name="menu" size={24} color='white' style={styles.button} onPress={()=> props.navigation.toggleDrawer()} />
                    </HeaderButtons>
                );
            },
            headerRight : () => {
                return (
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Ionicons name="save-outline" size={24} color='white' onPress={saveFilters} />
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
    },
    button: {
        marginLeft : 15
    }
});

export default FilterScreen;