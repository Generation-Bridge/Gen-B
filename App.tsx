import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from './components/Splash';
import StartingPage from './components/StartingPage';
import SeniorSignup from './components/SeniorSignup';
import LoginPage from './components/LoginPage';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="StartingPage" component={StartingPage} />
        <Stack.Screen name="SeniorSignup" component={SeniorSignup} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Stack = createStackNavigator();
