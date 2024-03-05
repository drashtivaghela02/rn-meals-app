import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MealsNavigator from './navigation/MealsNavigator';
import mealsReducer from './store/reducers/meals';
import { useScreen } from 'react-native-screens';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// useScreen();

const rootReducer = combineReducers({
  meals : mealsReducer
});

const store = createStore(rootReducer);

// import * as Font from 'expo-status-bar';
// import { AppLoading } from 'expo';

// const fetchFonts = () => {
//   Font.loadAsync({
//     'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf')
//   });
// };

export default function App() {

  // const [fontLoaded, setFontLoaded] = useState(false);
  // if(!fontLoaded){
  //   return (<AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(True)} />);
  // }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
