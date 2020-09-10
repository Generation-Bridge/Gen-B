import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const NewTicketDesc = () => {
  const [value, onChangeText] = React.useState('Useless Placeholder');
  return (
    <View>
      <Text>Please describe your request.</Text>
      <TextInput
      style={{ height: 50, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
    </View>
  )
}

export default NewTicketDesc

const styles = StyleSheet.create({})
