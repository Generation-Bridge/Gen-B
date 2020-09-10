import React from 'react'
import { Text, View, StyleSheet } from 'react-native'


const SeniorTicket = ({task}) => {
  const date = task.deadline
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Deadline: {task.deadline}  </Text>
        <Text style={styles.text}>Type {task.type}</Text>
        <Text style={styles.text}>Description {task.description}</Text>
      </View>
    )
  }
  
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    margin: 5,
    borderStyle: 'solid',
    borderRadius: 10,
    borderWidth: 5,
    borderColor: 'black',
    display: 'flex',
  },
  text: {
    fontSize: 25
  }
})

export default SeniorTicket