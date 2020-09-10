import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import Ticket from './Ticket';
import {useQuery, gql, useApolloClient} from '@apollo/client';

const GET_TASKS = gql`
  query {
    tasks {
      id
      seniorname
      description
      type
    }
  }
`;
const JuniorFeed = () => {
  const {loading, error, data} = useQuery(GET_TASKS);
  if (loading) return <Text>Loading...</Text>;
  if (error) {
    console.log('error', error);
    return <Text>Error :( </Text>;
  }
  // console.log('data', data);

  // const tickets = data.helpers[0].map( task => <SeniorTicket task={task}/>)
  const tickets = data.tasks.map(task => <Ticket task={task} key={task.id} />);
  // console.log('tickets', tickets)
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>CLAIM YOUR TICKETS</Text>
      {tickets}
      {/* <SeniorTicket/>
        <SeniorTicket/>
        <SeniorTicket/> */}
    </ScrollView>
  );
};

export default JuniorFeed;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  text: {
    marginVertical: 10,
    fontSize: 25,
    alignSelf: 'center',
  },
});
