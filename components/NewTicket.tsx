import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Picker } from 'react-native'

const NewTicket = (navigation) => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.choiceText}>What do you need help with?</Text>
      <TouchableOpacity 
        style={styles.choices}
        onPress={() => navigation.navigate('NewTicketDesc', {type: 'Food'})}
        >
        <Text style={styles.choiceText}>Food / Groceries</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.choices}
        >
        <Text style={styles.choiceText}>Connection</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.choices}
        >
        <Text style={styles.choiceText}>Errands</Text>
      </TouchableOpacity>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 150, width: 200 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Food / Groceries" value="food" itemStyle={styles.choiceText}/>
        <Picker.Item label="Errands" value="errands" />
        <Picker.Item label="Connection" value="connection" />
      </Picker>
    </View>
  )
}

export default NewTicket

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  choices: {
    width: '82%',
    backgroundColor: 'dodgerblue',
    borderStyle: 'solid',
    padding: 10,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: 'black',
    display: 'flex',
    alignItems: 'center',
    margin: 10
  },
  choiceText: {
    fontSize: 30,
  },
})
