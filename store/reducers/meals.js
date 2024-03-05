import { MEALS } from "../../data/dummy-data";
import { SET_FILTERS, TOGGLE_FAVORITE } from "../actions/meals";

const initialState = {
    meals : MEALS,
    FilteredMeals : MEALS,
    favoriteMeals : []
};

const mealsReducer = (state = initialState, action) => {
    switch( action.type ){
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
            if( existingIndex >= 0) {
                const updatedFavMeals = [ ...state.favoriteMeals ];
                updatedFavMeals.splice(existingIndex, 1);
                return { ...state, favoriteMeals : updatedFavMeals }
            } else {
                const meal = state.meals.find(meal => meal.id === action.mealId )
                return { ...state, favoriteMeals : state.favoriteMeals.concat(meal)}
            }
        
        case SET_FILTERS:
            const appliedFilter = action.filters;
            const updatedFilteredMeals = state.meals.filter(meal => {
                if(appliedFilter.glutenFree && !meal.isGlutenFree){
                    return false;
                }
                if(appliedFilter.lactoseFree && !meal.isLactoseFree){
                    return false;
                }
                if(appliedFilter.vegeterian && !meal.isVegeterian){
                    return false;
                }
                if(appliedFilter.vegan && !meal.isVegan){
                    return false;
                }
                return true;
            });
            return { ...state, FilteredMeals : updatedFilteredMeals}


        default: 
            return state;
    }
}

export default mealsReducer;