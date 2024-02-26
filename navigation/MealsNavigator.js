import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreens from '../Screens/CategoriesScreen';
import CategoryMealsScreen from '../Screens/CategoryMealsScreen';
import MealDetailsScreen from '../Screens/MealDetailsScreen';

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreens,
    CategoryMeals: {
        screen : CategoryMealsScreen
    },
    MealDetail : MealDetailsScreen
});

export default createAppContainer(MealsNavigator);