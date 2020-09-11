import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Picker } from 'react-native'

const NewTicket = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.choiceText}>What do you need help with?</Text>
      <TouchableOpacity 
        style={styles.choices}
        onPress={() => navigation.navigate('NewTicketDesc', {typeid: 100})}
        >
        <Text style={styles.choiceText}>Errands</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.choices}
        onPress={() => navigation.navigate('NewTicketDesc', {typeid: 200})}
        >
        <Text style={styles.choiceText}>Conversation</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.choices}
        onPress={() => navigation.navigate('NewTicketDesc', {typeid: 300})}
        >
        <Text style={styles.choiceText}>Household Chores</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NewTicket

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  choices: {
    width: '82%',
    backgroundColor: 'dodgerblue',
    borderStyle: 'solid',
    padding: 10,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: 'black',
    display: 'flex',
    alignItems: 'center',
    margin: 10
  },
  choiceText: {
    fontSize: 30,
  },
})
