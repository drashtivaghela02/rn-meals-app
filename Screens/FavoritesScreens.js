import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';

import MealList from '../coponents/MealList';

const FavoritesScreens = props => {
    const favMeals = useSelector(state => state.meals.favoriteMeals);
    // const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')

    if( favMeals.length === 0 || !favMeals){
        return <View style = {styles.screen}>
            <Text>No Favorite Records Founded!!</Text>
        </View>
    }

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