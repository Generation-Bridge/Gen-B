import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import Splash from './components/Splash';
import StartingPage from './components/StartingPage';
import SeniorSignup from './components/SeniorSignup';
import SeniorDash from './components/SeniorDash';
import JuniorSignup from './components/JuniorSignup';


const client = new ApolloClient({
  uri: 'https://localhost:3000/graphql',
  cache: new InMemoryCache()
})


export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="StartingPage" component={StartingPage} />
          <Stack.Screen name="SeniorSignup" component={SeniorSignup} />
          <Stack.Screen name="SeniorDash" component={SeniorDash} />
          <Stack.Screen name="JuniorSignup" component={JuniorSignup} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
const Stack = createStackNavigator();
