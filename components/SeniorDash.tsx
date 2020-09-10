import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Feed from './Feed'
import {useQuery, gql} from '@apollo/client';

export default function SeniorDash({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.submit}
        onPress={() => navigation.navigate('NewTicket')}
        >
        <Text style={styles.submitText}>New Ticket</Text>
      </TouchableOpacity>
      <View
        style={styles.buttonView}
      >
        <TouchableOpacity 
          style={styles.tabOpen}
          >
          <Text style={styles.tabsText}>Open</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.tabClosed}
          >
          <Text
          style={styles.tabsText}
          >Closed</Text>
        </TouchableOpacity>
      </View>
      <Feed/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  submit: {
    width: '82%',
    backgroundColor: 'lightgreen',
    borderStyle: 'solid',
    padding: 10,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: 'black',
    display: 'flex',
    alignItems: 'center',
  },
  submitText: {
    fontSize: 30,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabOpen: {
    margin: 5,
    width: '40%',
    backgroundColor: 'dodgerblue',
    borderStyle: 'solid',
    padding: 10,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: 'black',
    alignItems: 'center'
  },
  tabClosed: {
    margin: 5,
    width: '40%',
    backgroundColor: 'tomato',
    borderStyle: 'solid',
    padding: 10,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: 'black',
    alignItems: 'center'
  },
  tabsText: {
    fontSize: 25
  },
})
