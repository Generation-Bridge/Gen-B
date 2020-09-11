import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {gql, useQuery} from '@apollo/client';

import Ticket from './Ticket';
// TODO: get ID of whoever is logged in so that we can query the tasks assigned to specific id

const GET_TASK_FOR_HELPER = gql`
  query Helper($id: Int!) {
    helper(id: $id) {
      tasks {
        seniorname
        description
        type
      }
    }
  }
`;

const JuniorTickets = ({authID}) => {
  console.log('authID in junior ticketss', authID);
  const {loading, error, data} = useQuery(GET_TASK_FOR_HELPER, {
    // userID hardcoded to 34, we need to figure out why dynamic authID isn't working
    variables: {id: 34},
  });
  if (error) return <Text>`Error! ${error.message}`</Text>;

  console.log('data from query', data);

  const tickets = data.helper.tasks.map(task => (
    <Ticket task={task} key={task.id} />
  ));

  return <View style={styles.container}>{tickets}</View>;
};

export default JuniorTickets;

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
