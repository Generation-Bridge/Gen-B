import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SeniorTicket from './SeniorTicket'
import { useQuery, gql } from '@apollo/client';
import { ScrollView } from 'react-native-gesture-handler';


const GET_TEST = gql`
query {
  tasks {
    id
    type
    description
    deadline
    completed
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
  let tickets;
  try {
    tickets = data.tasks.map( task => <SeniorTicket key={task.id} task={task}/>)
  } catch (e) {
    console.log('error in gql feed', e);
  }
  // console.log('tickets', tickets)
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
        {tickets}
      </ScrollView>
  )
}

export default Feed

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
  },
  contentContainer: {
    paddingVertical: 20,
    width: '100%'
  },
})

