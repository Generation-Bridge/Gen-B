import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const Ticket = props => {
  // destucturing the props
  const {task} = props;
  const {seniorname, type, description, id} = task;
  // handle claim submit button
  const handleClaim = () => {};
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Who: {seniorname}</Text>
      <Text style={styles.text}>Type: {type}</Text>
      <Text style={styles.text}>Description: {description}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Claim</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '96%',
    backgroundColor: 'lightblue',
    margin: 5,
  },

  text: {
    fontSize: 25,
  },

  button: {
    alignSelf: 'center',
    backgroundColor: 'dodgerblue',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },

  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});

export default Ticket;
