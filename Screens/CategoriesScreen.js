import React from 'react';
import {
    Button, 
    View, 
    Text, 
    StyleSheet, 
    FlatList, 
    TouchableOpacity,
    Platform
} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constatnts/Colors';
import CategoryGridTile from '../coponents/CategoryGridTile';

const CategoriesScreens = props => {
    const renderGridItem = itemData => {
        return <CategoryGridTile 
                    title={itemData.item.title}
                    color = {itemData.item.color}
                    onSelect = {() => {
                        props.navigation.navigate({
                            routeName : 'CategoryMeals', 
                            params : {categoryId : itemData.item.id}
                        });
                    }}
                />;
    };

    return (
        <FlatList 
            KeyExtractor = {(item, index) => item.id}
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

export default CategoriesScreens;