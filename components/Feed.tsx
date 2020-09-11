import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, RefreshControl } from 'react-native'
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
  // useEffect(() => {
  //   console.log('useeffect')
  // }, [])
  const [refreshing, useRefresh] = useState('false');
  const onRefresh = () => {
    console.log('refreshing');
  }

  //wrapper for useQuery



  const { loading, error, data } = useQuery(GET_TEST);
  if (loading) return <Text>Loading...</Text>;
  if (error) {
    console.log('error', error)
    return <Text>Error :( </Text>;
    }
  let tickets;
  try {
    tickets = data.tasks.map( task => <SeniorTicket key={task.id} task={task}/>).reverse();
  } catch (e) {
    console.log('error in gql feed', e);
  }
  // console.log('tickets', tickets)
  return (
    <ScrollView 
    contentContainerStyle={styles.container}
    refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
        />}
      >
        {tickets}
      </ScrollView>
  )
}

export default Feed

const styles = StyleSheet.create({
  container: {
    width: '100%',
  }
})

