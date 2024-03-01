import React, { useLayoutEffect } from 'react';
import {View, Text, StyleSheet, Button, ScrollView, Image} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';
import HeaderButton from '../coponents/HeaderButton';

import { AntDesign } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

const ListItem = props => {
    return <View style= {styles.listItem} >
        <Text>{props.children}</Text>
    </View>
};

const MealDetailsScreen = props => {

    const mealId = props.route.params.mealId;
    const selectedMeals = MEALS.find(meal => meal.id === mealId)

    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerTitle : selectedMeals.title,
            headerRight : () => {
                return (
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <AntDesign name="staro" size={24} onPress={()=> {
                            console.log("Mark as Favorite!!");
                        }} />
                    </HeaderButtons>
                );
            }
        });
    },[props.navigation]);

    return (
        <ScrollView>
            <Image source={{uri : selectedMeals.imageUrl}} style = {styles.image} />
            <View style={styles.detail}>
                    <Text>{selectedMeals.duration}</Text>
                    <Text>{selectedMeals.complexity}</Text>
                    <Text>{selectedMeals.afordability}</Text>
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

MealDetailsScreen.navigationOptions = navigationData => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeals = MEALS.find(meal => meal.id === mealId);

    return{
        headerTitle: selectedMeals.title,
        headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <AntDesign name="staro" size={24} onPress={()=> {
                console.log("Mark as Favorite!!");
            }} />
        </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    listItem :{
        marginVertical: 10 ,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding : 10
    },
    image : {
        width : '100%',
        height: 200
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    detail : {
        flexDirection : 'row',
        padding: 15,
        justifyContent: 'space-around'
    }
});

export default MealDetailsScreen;