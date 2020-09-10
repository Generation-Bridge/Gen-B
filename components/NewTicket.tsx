import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Picker } from 'react-native'

const NewTicket = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.choiceText}>What do you need help with?</Text>
      <TouchableOpacity 
        style={styles.choices}
        onPress={() => navigation.navigate('NewTicketDesc', {type: 'Food'})}
        >
        <Text style={styles.choiceText}>Food / Groceries</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.choices}
        onPress={() => navigation.navigate('NewTicketDesc', {type: 'Connection'})}
        >
        <Text style={styles.choiceText}>Connection</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.choices}
        onPress={() => navigation.navigate('NewTicketDesc', {type: 'Errands'})}
        >
        <Text style={styles.choiceText}>Errands</Text>
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
