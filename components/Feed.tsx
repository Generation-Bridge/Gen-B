import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SeniorTicket from './SeniorTicket'


const Feed = () => {
  return (
    <View style={styles.container}>
        <SeniorTicket/>
        <SeniorTicket/>
        <SeniorTicket/>
      </View>
  )
}

export default Feed

const styles = StyleSheet.create({
  container: {
    width: '80%'
  }
})

