import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

interface signUpState {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  zipCode: string;
  password: string;
}

const SeniorSignup: React.FC = () => {
  // inital state for the forms
  const initialState: signUpState = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    zipCode: '',
    password: '',
  };

  // state for the forms
  const [form, setForm] = useState<signUpState>(initialState);
  // console.log('state change', form);

  // handle submit when submit button is clicked
  const handleSubmit = (): void => {};

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.Text}>Sign Up</Text>
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
          onChangeText={text => setForm({...form, firstName: text})}
          value={form.firstName}
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

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SeniorSignup;

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

  Text: {
    fontSize: 40,
    marginVertical: 20,
  },
});
