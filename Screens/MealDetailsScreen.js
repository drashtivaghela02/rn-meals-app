import React, { useLayoutEffect } from 'react';
import {View, Text, StyleSheet, Button, ScrollView, Image} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';

import HeaderButton from '../coponents/HeaderButton';
import { toggleFavorite } from '../store/actions/meals';

const ListItem = props => {
    return <View style= {styles.listItem} >
        <Text>{props.children}</Text>
    </View>
};

const MealDetailsScreen = props => {

    const mealId = props.route.params.mealId;
    const availableMeals = useSelector(state => state.meals.meals);
    const isFavorite = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealId))
    const selectedMeals = availableMeals.find(meal => meal.id === mealId);

    const dispatch = useDispatch();

    const toggleFavoriteHandler = () => {
        dispatch(toggleFavorite(mealId));
    };
    // console.log(isFavorite);
    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerTitle : selectedMeals.title,
            headerRight : () => {
                return (
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        {isFavorite ? <AntDesign name="star" size={24} color='white' onPress={toggleFavoriteHandler} /> : <AntDesign name="staro" size={24} color='white'                                                                                       onPress={toggleFavoriteHandler} />}
                    </HeaderButtons>
                );
            }
        });
    },[props.navigation, isFavorite]);

    return (
        <ScrollView>
            <Image source={{uri : selectedMeals.imageUrl}} style = {styles.image} />
            <View style={styles.detail}>
                    <Text> {selectedMeals.duration}  MIN</Text>
                    <Text style={styles.textStyle}>{selectedMeals.complexity}</Text>
                    <Text style={styles.textStyle}>{selectedMeals.afordability}</Text>
            </View>
            <Text style = {styles.title}>Ingredients</Text>
            {selectedMeals.ingredients.map(ingredient => (
                <ListItem key = {ingredient}>{ingredient}</ListItem>
            ))}
            <Text style={styles.title}>Steps</Text>
            {selectedMeals.steps.map(step => (
                <ListItem key = {step}>{step}</ListItem>
            ))}
      </ScrollView>
    );
};

const styles = StyleSheet.create({
    listItem: {
        marginVertical: 10 ,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    detail: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    textStyle: {
        textTransform : 'uppercase'
    }
});

export default MealDetailsScreen;