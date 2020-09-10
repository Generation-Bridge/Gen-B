import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

interface loginState {
  emailOrPhone: string;
  password: string;
}

const LoginPage: React.FC = () => {
  // initial state for login form
  const initialState: loginState = {
    emailOrPhone: '',
    password: '',
  };

  // state for login form
  const [loginForm, setLoginForm] = useState<loginState>(initialState);

  // handle submit for button
  const handleSubmit = (): void => {};
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.Text}>Log In</Text>
        <Text style={styles.labels}>Email or Phone Number</Text>
        <TextInput
          style={styles.inputFields}
          placeholder="Email or Phone Number"
          onChangeText={text =>
            setLoginForm({...loginForm, emailOrPhone: text})
          }
          value={loginForm.emailOrPhone}
        />
        <Text style={styles.labels}>Password</Text>
        <TextInput
          style={styles.inputFields}
          placeholder="Password"
          onChangeText={text => setLoginForm({...loginForm, password: text})}
          value={loginForm.password}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginPage;

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
    marginTop: 40,
    marginBottom: 30,
  },
});
