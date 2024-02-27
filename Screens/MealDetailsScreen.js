import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';
import HeaderButton from '../coponents/HeaderButton';

import { AntDesign } from '@expo/vector-icons';

const MealDetailsScreen = props => {

    const mealId = props.navigation.getParam('mealId');
    const selectedMeals = MEALS.find(meal => meal.id === mealId)

    return (
        <View style={styles.screen}>
            <Text>{selectedMeals.title}</Text>
            <Button
                title="Go Back to Categories"
                onPress={() => {
                    props.navigation.popToTop();
                }}
            />
      </View>
    );
};

MealDetailsScreen.navigationOptions = navigationData => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeals = MEALS.find(meal => meal.id === mealId);

    return{
        headerTitle: selectedMeals.title,
        headerRight: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <AntDesign name="staro" size={24} onPress={()=> {
                console.log("Mark as Favorite!!");
            }} />
        </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent: 'center',
        alignItems : 'center'
    }
});

export default MealDetailsScreen;