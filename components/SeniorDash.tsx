import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
// import Feed from './Feed'
import {useQuery, gql} from '@apollo/client';

export default function SeniorDash() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.submit}>
        <Text>New Ticket</Text>
      </TouchableOpacity>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.tabs}>
          <Text>Open</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabs}>
          <Text>Closed</Text>
        </TouchableOpacity>
      </View>
      {/* <Feed/> */}
    </View>
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
    width: '40%',
    backgroundColor: 'red',
    height: 20,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
