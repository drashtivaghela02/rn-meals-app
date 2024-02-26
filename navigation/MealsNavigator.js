import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreens from '../Screens/CategoriesScreen';
import CategoryMealsScreen from '../Screens/CategoryMealsScreen';
import MealDetailsScreen from '../Screens/MealDetailsScreen';
import Colors from '../constatnts/Colors';

const MealsNavigator = createStackNavigator({
    Categories: {
        screen : CategoriesScreens,
        navigationOptions : {
            headerTitle : 'Meal Categories !!!'
        }
    },
    CategoryMeals: {
        screen : CategoryMealsScreen
    },
    MealDetail : MealDetailsScreen 
}, 
{  mode: 'modal',
    defaultNavigationOptions: {    
        headerStyle: {backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'},
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
});

export default createAppContainer(MealsNavigator);