import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, TextInput, Keyboard, TouchableOpacity } from 'react-native'

const JuniorSignup = ({navigation}) => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    zipCode: '',
    password: '',
  };

  // state for the forms
  const [form, setForm] = useState(initialState);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.labels}>First Name</Text>
        <TextInput
          style={styles.inputFields}
          placeholder="First Name"
          onChangeText={text => setForm({...form, firstName: text})}
          value={form.firstName}
        />
        <Text style={styles.labels}>Last Name</Text>
        <TextInput
          style={styles.inputFields}
          placeholder="Last Name"
          onChangeText={text => setForm({...form, lastName: text})}
          value={form.lastName}
        />
        <Text style={styles.labels}>Email</Text>
        <TextInput
          style={styles.inputFields}
          placeholder="name@email.com"
          onChangeText={text => setForm({...form, email: text})}
          value={form.email}
        />
        <Text style={styles.labels}>Phone Number</Text>
        <TextInput
          style={styles.inputFields}
          keyboardType={'phone-pad'}
          placeholder="1234567890"
          onChangeText={text => setForm({...form, phoneNumber: text})}
          value={form.phoneNumber}
        />
        <Text style={styles.labels}>Zip Code</Text>
        <TextInput
          style={styles.inputFields}
          placeholder="Zip Code"
          keyboardType={'numeric'}
          onChangeText={text => setForm({...form, zipCode: text})}
          value={form.zipCode}
        />
        <Text style={styles.labels}>Password</Text>
        <TextInput
          style={styles.inputFields}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={text => setForm({...form, password: text})}
          value={form.password}
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('SeniorDash')}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default JuniorSignup

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  inputFields: {
    width: '70%',
    borderColor: 'lightblue',
    borderStyle: 'solid',
    borderWidth: 1,
    fontSize: 25,
    marginBottom: 10,
  },
  labels: {
    fontSize: 25,
    marginBottom: 5,
  },

  button: {
    backgroundColor: 'lightblue',
    borderColor: 'lightblue',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
  },

  buttonText: {
    fontSize: 20,
  },
});
