/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './pages/Home';
import {Provider} from 'react-redux';
import store from './redux/store';
import {setData} from './redux/actions/RickAndMortyData';
import {getNasaData} from './services/NasaAPI';

const Stack = createStackNavigator();

Stack.Navigator.defaultProps = {
  headerMode: 'none',
};

/* const fetchData = async () => {
  return await getNasaData();
}; */

/* const data = getNasaData();
console.log(data);
store.dispatch(setData(data));
 */

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      const result = await getNasaData();
      console.log(result);
      store.dispatch(setData(result));
    };
    fetchData();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

/* const styles = StyleSheet.create({

}); */

export default App;
