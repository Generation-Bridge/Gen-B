import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SeniorTicket from './SeniorTicket'
import { useQuery, gql } from '@apollo/client';


const GET_TEST = gql`
query {
  helpers {
    tasks {
      taskType
      taskDescription
    }
  }
}`
const Feed = () => {
  const { loading, error, data } = useQuery(GET_TEST);
  if (loading) return <Text>Loading...</Text>;
  if (error) {
    console.log('error', error)
    return <Text>Error :( </Text>;
    }
  console.log('data', data)
  // const tickets = data.helpers[0].map( task => <SeniorTicket task={task}/>)
  const tickets = data.helpers[0].tasks.map( task => <SeniorTicket task={task}/>)
  // console.log('tickets', tickets)
  return (
    <View style={styles.container}>
        {tickets}
        {/* <SeniorTicket/>
        <SeniorTicket/>
        <SeniorTicket/> */}
      </View>
  )
}

export default Feed

const styles = StyleSheet.create({
  container: {
    width: '80%'
  }
})

