import {React, useLayoutEffect} from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import MealList from '../coponents/MealList';

const CategoryMealsScreen = props => {

    const catId = props.route.params.categoryId;

    const availableMeals = useSelector(state => state.meals.FilteredMeals);

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    if(displayedMeals.length === 0 ){
        return <View style = {styles.screen}>
            <Text>No Meals Found!! Check Filters</Text>
        </View>
    }

    useLayoutEffect(() => {
       props.navigation.setOptions({
            headerTitle: selectedCategory.title
        });
    }, [props.navigation]);

    return <MealList listData={displayedMeals} navigation={props.navigation} />;

};

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent: 'center',
        alignItems : 'center'
    }
});

export default CategoryMealsScreen;