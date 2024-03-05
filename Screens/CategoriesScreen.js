import React, { useLayoutEffect } from 'react';
import { Text, FlatList } from 'react-native';
import { HeaderButtons } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import { CATEGORIES } from '../data/dummy-data';
import HeaderButton from '../coponents/HeaderButton';
import CategoryGridTile from '../coponents/CategoryGridTile';

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
                        <Ionicons name="menu" size={24} color='white' style = {{marginLeft: 15}} onPress={()=> props.navigation.toggleDrawer()} />
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

export default CategoriesScreen;