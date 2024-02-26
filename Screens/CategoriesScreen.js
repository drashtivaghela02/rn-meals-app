import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

const CategoriesScreens = props => {
    console.log(props);
    return (
        <View style = {styles.screen} >
            <Text>The Category Meal Screen!</Text>
            <Button title="Go to Meals!" onPress= {() => {
                props.navigation.navigate({routeName : 'CategoryMeals'});
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent: 'center',
        alignItems : 'center'
    }
});

export default CategoriesScreens;