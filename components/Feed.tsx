import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import SeniorTicket from './SeniorTicket'

export default class Feed extends PureComponent {
  render() {
    return (
      <View>
        <SeniorTicket/>
        <SeniorTicket/>
        <SeniorTicket/>
      </View>
    )
  }
}
