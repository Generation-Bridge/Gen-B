import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('smart')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

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
