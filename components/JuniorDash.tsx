import React from 'react';
import {StyleSheet} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import JuniorFeed from './JuniorFeed';
import JuniorTickets from './JuniorTickets';
import JuniorProfile from './JuniorProfile';

const Tab = createBottomTabNavigator();

export default function JuniorDash() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Feed') {
            iconName = 'feed';
            color = focused ? 'red' : 'black';
          } else if (route.name === 'JuniorTickets') {
            iconName = 'ticket';
            color = focused ? 'red' : 'black';
          } else if (route.name === 'JuniorProfile') {
            iconName = 'user';
            color = focused ? 'red' : 'black';
          }

          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}>
      <Tab.Screen name="Feed" component={JuniorFeed} />
      <Tab.Screen name="JuniorTickets" component={JuniorTickets} />
      <Tab.Screen name="JuniorProfile" component={JuniorProfile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  submit: {
    width: '80%',
    backgroundColor: 'lightgreen',
  },
  tabs: {
    flex: 1,
    alignSelf: 'flex-end',
    width: '40%',
    backgroundColor: 'red',
    height: 20,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
