import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// TODO: get ID of whoever is logged in so that we can query the tasks assigned to specific id

const JuniorTickets = () => {
  return (
    <View>
      <Text style={styles.text}>My Tickets</Text>
    </View>
  );
};

export default JuniorTickets;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});
