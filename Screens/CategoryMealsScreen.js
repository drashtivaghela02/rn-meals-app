import {React, useLayoutEffect} from 'react';
import {View, Text, StyleSheet, Button, Platform, FlatList} from 'react-native';
import Colors from '../constatnts/Colors';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../coponents/MealItem';
import MealList from '../coponents/MealList';

const CategoryMealsScreen = props => {

    const catId = props.route.params.categoryId;
    // console.log(id);

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    useLayoutEffect(() => {
       props.navigation.setOptions({
            headerTitle: selectedCategory.title
        });
    }, [props.navigation]);

    return <MealList listData={displayedMeals} navigation={props.navigation} />;

};

CategoryMealsScreen.navigationOptions = navigationData => {
    // const catId = navigationData.navigation.getParam('categoryId');
    const catId = navigationData.route.params.categoryId;
  
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  
    return {
      headerTitle: selectedCategory.title,
      
    };
};  

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent: 'center',
        alignItems : 'center',
        padding : 15
    }
});

export default CategoryMealsScreen;