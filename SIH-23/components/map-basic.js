import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';

const Map_basic = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
            latitude: 11.019601, // Approximate center of India
            longitude: 76.923701, // Approximate center of India
            latitudeDelta: 0.002, // Zoom level for latitude (adjust as needed)
            longitudeDelta: 0.002,
        }}
      />
    </View>
  );
};

export default Map_basic;
