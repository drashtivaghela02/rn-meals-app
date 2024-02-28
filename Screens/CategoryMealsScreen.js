import React from 'react';
import {View, Text, StyleSheet, Button, Platform, FlatList} from 'react-native';
import Colors from '../constatnts/Colors';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../coponents/MealItem';

const CategoryMealsScreen = props => {

    const renderMealItem = itemData => {
        return (<MealItem 
            title={itemData.item.title} 
            image={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            afordability={itemData.item.afordability}
            onSelectMeal={() => {
                props.navigation.navigate('MealDetail', {mealId: itemData.item.id});
            }} 
            />
        );
    };

    const catId = props.route.params.categoryId;
    // console.log(id);

    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    return (
        <View style = {styles.screen} >
            <Text>hello</Text>
            <FlatList 
                data={displayedMeals} 
                keyExtractor={(item, index) => item.id} 
                renderItem={renderMealItem}
                style={{width: '100%'}} />
        </View>
    );
};

CategoryMealsScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
  
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