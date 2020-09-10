import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import Splash from './components/Splash';
import StartingPage from './components/StartingPage';
import SeniorSignup from './components/SeniorSignup';
import SeniorDash from './components/SeniorDash';
import JuniorSignup from './components/JuniorSignup';
import JuniorDash from './components/JuniorDash';
import LoginPage from './components/LoginPage';
import NewTicket from './components/NewTicket';
import NewTicketDesc from './components/NewTicketDesc';



const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

const Stack = createStackNavigator();

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
          <Stack.Screen name="JuniorDash" component={JuniorDash} />
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="NewTicket" component={NewTicket} />
          <Stack.Screen name="NewTicketDesc" component={NewTicketDesc} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
