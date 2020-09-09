import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const StartingPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Are you in need of an assistance?</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Yes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>No</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
  },

  button: {
    borderStyle: 'solid',
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    borderWidth: 5,
    borderColor: 'black',
  },

  buttonText: {
    fontSize: 15,
  },
});

export default StartingPage;
