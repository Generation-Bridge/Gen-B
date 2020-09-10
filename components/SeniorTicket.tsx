import React from 'react'
import { Text, View, StyleSheet } from 'react-native'


const SeniorTicket = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Title</Text>
        <Text style={styles.text}>Helpers [array]</Text>
        <Text style={styles.text}>Location</Text>
        <Text style={styles.text}>Type</Text>
        <Text style={styles.text}>Description</Text>
      </View>
    )
  }
  
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'dodgerblue',
    margin: 5,
  },
  text: {
    fontSize: 25
  }
})

export default SeniorTicket