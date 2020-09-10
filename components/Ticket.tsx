import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Ticket = props => {
  // console.log('props', props);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Who: {props.task.seniorname}</Text>
      <Text style={styles.text}>Type: {props.task.type}</Text>
      <Text style={styles.text}>Description: {props.task.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'dodgerblue',
    margin: 5,
  },
  text: {
    fontSize: 25,
  },
});

export default Ticket;
