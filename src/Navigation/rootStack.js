import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import Registration from '../Screens/Registration';
import Home from '../Screens/Home';
import Details from '../Screens/Details';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default RootStack;
