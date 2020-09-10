import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { gql, useMutation } from '@apollo/client'
import { ScrollView } from 'react-native-gesture-handler'


const ADD_TASK = gql`
  mutation addTask(
    $id: Int!
    $typeid: Int
    $description: String
    ) {
    addTask(
      senior: $id
      typeid: $typeid
      description: $description
      ) {
      id
    }
  }
`

const NewTicketDesc = ({navigation, route}) => {
  const [value, onChangeText] = React.useState('');
  const [addTask, { data, error }] = useMutation(ADD_TASK);
  
  const handleSubmit = async () => {
    try {
      const mutation = await addTask({
        variables: {
          id: 3,
          typeid: route.params.typeid,
          description: value
        },
      });
      navigation.navigate('SeniorDash');
    } catch (e) {
      console.log('error in addTask', e)
    }

  }
  console.log('params', route.params)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Please describe your request.</Text>
      <TextInput
      multiline
      autoFocus={true}
      style={styles.textBox}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
    <TouchableOpacity 
        style={styles.submit}
        onPress={handleSubmit}
        >
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NewTicketDesc

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    fontSize: 27
  },
  textBox: {
    height: '45%',
    width: '82%',
    fontSize: 30,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 5,
    justifyContent: 'flex-start'
  },
  submit: {
    width: '82%',
    backgroundColor: 'lightgreen',
    borderStyle: 'solid',
    padding: 10,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: 'black',
    display: 'flex',
    alignItems: 'center',
  },
})
