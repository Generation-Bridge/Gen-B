import React, {useState, createContext} from 'react';
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
// export const AuthContext = createContext({});
export default function App() {
  // global state for whoever's ID
  const [authID, setAuthID] = useState(1);
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        {/* <AuthContext.Provider value={{authID, setAuthID}}> */}
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="StartingPage" component={StartingPage} />
          {/* <Stack.Screen name="SeniorSignup" component={SeniorSignup} /> */}
          <Stack.Screen name="SeniorSignup">
            {props => (
              <SeniorSignup {...props} authID={authID} setAuthID={setAuthID} />
            )}
          </Stack.Screen>
          <Stack.Screen name="SeniorDash" component={SeniorDash} />
          <Stack.Screen name="JuniorSignup">
            {props => (
              <JuniorSignup {...props} authID={authID} setAuthID={setAuthID} />
            )}
          </Stack.Screen>
          <Stack.Screen name="JuniorDash">
            {props => (
              <JuniorDash {...props} authID={authID} setAuthID={setAuthID} />
            )}
          </Stack.Screen>
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="NewTicket" component={NewTicket} />
          <Stack.Screen name="NewTicketDesc" component={NewTicketDesc} />
        </Stack.Navigator>
        {/* </AuthContext.Provider> */}
      </NavigationContainer>
    </ApolloProvider>
  );
}
