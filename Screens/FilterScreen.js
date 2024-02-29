import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { HeaderButtons } from 'react-navigation-header-buttons';
import HeaderButton from '../coponents/HeaderButton';
import { Ionicons } from '@expo/vector-icons';

const FilterScreen = props => {
    
    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerTitle : 'Filter Meals!',
            headerLeft : () => {
                return (
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Ionicons name="menu" size={24} onPress={()=> props.navigation.toggleDrawer()} />
                    </HeaderButtons>
                );
            }
        });
    },[props.navigation]);

    return (
        <View style = {styles.screen} >
            <Text>The filter screen !!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex :1,
        alignItems : 'center',
        justifyContent: 'center'
    }
});

export default FilterScreen;