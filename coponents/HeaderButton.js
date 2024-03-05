import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { AntDesign } from '@expo/vector-icons';

import Colors from '../constatnts/Colors';

const CustomHeaderButton = props => {
    return (
        <HeaderButton 
            {...props} 
            IconComponent = {AntDesign} 
            color = { Platform.OS === 'android' ? 'white' : Colors.primaryColor } 
            style = {styles.button}
        />
    );
};
const styles = StyleSheet.create({
    button : {
        marginLeft : 10
    }
});
export default CustomHeaderButton;