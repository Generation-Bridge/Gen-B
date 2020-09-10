import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {gql, useMutation} from '@apollo/client';

const ADD_HELPER_TO_TASK = gql`
  mutation addHelperToTask($helperid: Int!, $taskid: Int!) {
    addHelperToTask(helperid: $helperid, taskid: $taskid) {
      id
    }
  }
`;

const Ticket = props => {
  const [claimed, setClaimed] = useState(false);
  const [addHelperToTask, {data, error}] = useMutation(ADD_HELPER_TO_TASK);

  // destucturing the props
  const {task, authID} = props;
  const {seniorname, type, description, id} = task;
  // handle claim submit button
  const handleClaim = async () => {
    // id is taskID and authID is userID
    console.log('authID in Ticket', authID);
    console.log('taskID in Ticket', id);

    try {
      const {data} = await addHelperToTask({
        variables: {
          helperid: authID,
          taskid: id,
        },
      });
      setClaimed(true);
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Who: {seniorname}</Text>
      <Text style={styles.text}>Type: {type}</Text>
      <Text style={styles.text}>Description: {description}</Text>

      <TouchableOpacity style={styles.button} onPress={handleClaim}>
        <Text style={styles.buttonText}>Claim</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '96%',
    backgroundColor: 'lightblue',
    margin: 5,
  },

  text: {
    fontSize: 25,
  },

  button: {
    alignSelf: 'center',
    backgroundColor: 'dodgerblue',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },

  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});

export default Ticket;
