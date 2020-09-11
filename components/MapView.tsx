import React from 'react';
import MapView from 'react-native-maps';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

function Map() {
  const availableLocations = [
    {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    {
      latitude: 34.04544,
      longitude: -118.445848,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    {
      latitude: 34.136254,
      longitude: -118.026447,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    {
      latitude: 40.682294,
      longitude: -73.978018,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    {
      latitude: 42.35052,
      longitude: -71.058802,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    {
      latitude: 47.610903,
      longitude: -122.336229,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    {
      latitude: 34.419007,
      longitude: -119.709215,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        initialRegion={
          availableLocations[
            Math.floor(Math.random() * availableLocations.length)
          ]
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Map;
