import React from 'react';
import { View, Text , StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

import { CATEGORIES ,MEALS } from '../data/dummy-data';
import Meal from '../models/meal';

const MealItem = props => {
    return (
        <View style = {styles.mealItem}>
        <TouchableOpacity onPress={props.onSelectMeal}>
            <View>
                <View style ={{...styles.mealRow, ...styles.mealHeader}} >
                    <ImageBackground source={{uri : props.image}} style= {styles.bgImage} > 
                        <View style = {styles.titleContainer}>
                            <Text style={styles.title} numberOfLines={1} >{props.title}</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{...styles.mealRow, ...styles.mealDetail}}>
                    <Text>{props.duration}</Text>
                    <Text>{props.complexity.toUpperCase()}</Text>
                    <Text>{props.afordability.toUpperCase()}</Text>
                </View>
            </View>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor : '#ffffff', 
        borderRadius: 15,
        padding: 15, 
        marginVertical:10
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader : {
        height: '85%'
    },
    mealDetail : {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    }, 
    bgImage:{
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal : 12
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white',
        textAlign: 'center'
    }
});

export default MealItem;