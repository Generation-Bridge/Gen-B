import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Splash = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('StartingPage')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LoginPage')}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Map')}>
        <Text style={styles.buttonText}>See Location</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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

  button: {
    borderStyle: 'solid',
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    borderWidth: 5,
    borderColor: 'black',
  },

  buttonText: {
    fontSize: 30,
  },
});

export default Splash;
