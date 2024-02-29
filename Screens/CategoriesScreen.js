import React, { useLayoutEffect } from 'react';
import {
    Button, 
    View, 
    Text, 
    StyleSheet, 
    FlatList, 
    TouchableOpacity,
    Platform
} from 'react-native';
import { HeaderButtons } from 'react-navigation-header-buttons';

import { CATEGORIES } from '../data/dummy-data';
import HeaderButton from '../coponents/HeaderButton';
import Colors from '../constatnts/Colors';
import CategoryGridTile from '../coponents/CategoryGridTile';
import { Ionicons } from '@expo/vector-icons';

const CategoriesScreen = props => {
    const renderGridItem = itemData => {
        return <CategoryGridTile 
                    title={itemData.item.title}
                    color = {itemData.item.color}
                    onSelect = {() => {
                        props.navigation.navigate('CategoryMeals', { categoryId: itemData.item.id });
                    }}
                />;
    };

    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerTitle : 'Meal Categories',
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
        <FlatList 
            keyExtractor = {(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2} 
        />
    );
};


const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent: 'center',
        alignItems : 'center'
    }   
});

export default CategoriesScreen;