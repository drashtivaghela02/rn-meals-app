import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import MealList from '../coponents/MealList';
import { MEALS } from '../data/dummy-data';

const FavoritesScreens = props => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    return <MealList listData={favMeals} navigation = {props.navigation} />;
};

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent: 'center',
        alignItems : 'center'
    }
});

export default FavoritesScreens;