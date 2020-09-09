import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const StartingPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Are you over 65 years old?</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SeniorSignup')}>
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
    paddingBottom: 15,
  },

  button: {
    borderStyle: 'solid',
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    borderWidth: 5,
    borderColor: 'black',
    marginBottom: 10,
    paddingHorizontal: 20,
  },

  buttonText: {
    fontSize: 15,
  },
});

export default StartingPage;
