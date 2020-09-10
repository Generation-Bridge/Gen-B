import React from 'react'
import { Text, View, StyleSheet } from 'react-native'


const SeniorTicket = (props) => {
  console.log('props',props)
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Title:</Text>
        <Text style={styles.text}>Helpers [array]</Text>
        <Text style={styles.text}>Location</Text>
        <Text style={styles.text}>Type {props.task.taskType}</Text>
        <Text style={styles.text}>Description {props.task.taskDescription}</Text>
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