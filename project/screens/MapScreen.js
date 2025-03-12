import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const MapScreen = ({ route }) => {
  const { cityName } = route.params;
  const [region, setRegion] = useState(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const geo = await Location.geocodeAsync(cityName);
        if (geo.length > 0) {
          setRegion({
            latitude: geo[0].latitude,
            longitude: geo[0].longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          });
        }
      } catch (error) {
        console.error("Geokoodaus epäonnistui", error);
      }
    };

    fetchCoordinates();
  }, [cityName]);

  return (
    <View style={styles.container}>
      {region ? (
        <MapView style={styles.map} initialRegion={region}>
          <Marker coordinate={region} title={cityName} />
        </MapView>
      ) : (
        <Text>Ladataan sijaintia...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default MapScreen;
