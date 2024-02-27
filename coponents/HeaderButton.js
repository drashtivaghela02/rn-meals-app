import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { AntDesign } from '@expo/vector-icons';

import Colors from '../constatnts/Colors';

const CustomHeaderButton = props => {
    return (
        <HeaderButton 
            {...props} 
            IconComponent = {AntDesign} 
            color={ Platform.OS === 'android' ? 'white' : Colors.primaryColor } 
        />
    );
};

export default CustomHeaderButton;