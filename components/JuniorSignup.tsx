import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {gql, useMutation} from '@apollo/client';

// TODO: change occupation to zip code when Andy modifies DB
const ADD_HELPER = gql`
  mutation addHelper(
    $name: String!
    $email: String!
    $phone: String!
    $password: String!
    $occupation: String
  ) {
    addHelper(
      name: $name
      email: $email
      phone: $phone
      password: $password
      occupation: $occupation
    ) {
      id
    }
  }
`;

const JuniorSignup = ({navigation}) => {
  const initialState = {
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    zipCode: '',
  };

  // state for the forms
  const [form, setForm] = useState(initialState);

  // mutation hook to send form data to backend
  const [addHelper, {data, error}] = useMutation(ADD_HELPER);

  const handleSubmit = async () => {
    console.log('form before being sent', form);
    const {name, email, phoneNumber, password, zipCode} = form;
    console.log('name', name);
    console.log('email', email);
    console.log('phone', phoneNumber);
    console.log('password', password);
    console.log('zipCode', zipCode);
    // TODO : need some sort of validation for the forms before we send to DB
    try {
      const {data} = await addHelper({
        variables: {
          name,
          email,
          phone: phoneNumber,
          password,
          occupation: zipCode,
        },
      });
      console.log('data from mutate', data);
      setForm(initialState);
      navigation.navigate('JuniorDash');
    } catch (error) {
      console.log('error', error);
    }

    // TODO: once id returns, need to set it to global auth state (maybe use onCompleted for useMutation?)
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.labels}>Name</Text>
        <TextInput
          style={styles.inputFields}
          placeholder="Name"
          onChangeText={text => setForm({...form, name: text})}
          value={form.name}
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

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default JuniorSignup;

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
