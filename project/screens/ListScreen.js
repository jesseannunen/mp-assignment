import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button } from "react-native";
import { getDocs, collection, onSnapshot } from "firebase/firestore";
import { db, PROJECT_REF } from "../firebase/firebaseConfig";
import { FontAwesome } from "@expo/vector-icons";

const locations = [
  { id: 1, name: "Oulu", description: "Cold but nice", rating: 1 },
  { id: 2, name: "Kempele", description: "Metropol", rating: 5 },
];
const ListScreen = ({ navigation }) => {
  const [cities, setCities] = useState([]);

  const fetchCities = async () => {
    try {
      const citiesCollection = collection(db, PROJECT_REF);
      const citySnapshot = await getDocs(citiesCollection);
      const cityList = citySnapshot.docs.map((doc) => ({
        id: doc.id, // Varmistetaan, että jokaisella kohteella on uniikki ID
        ...doc.data(),
      }));
      setCities(cityList);
    } catch (error) {
      console.error("Virhe tietojen hakemisessa: ", error);
    }
  };

  const Item = ({ name, description, rating }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
      <Text>{description}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("MapScreen", { cityName: name })}
        style={styles.mapButton}
      >
        <FontAwesome name="map-marker" size={24} color="red" />
      </TouchableOpacity>
      <Text>⭐ {rating} / 5</Text>
    </View>
  );

  useEffect(() => {
    fetchCities();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <FlatList
            data={cities}
            renderItem={({ item }) => (
              <Item
                name={item.name}
                description={item.description}
                rating={item.rating}
              />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ flexGrow: 0 }}
          />
          <Button
            title="Add Location"
            onPress={() => navigation.navigate("Add location")}
            contentContainerStyle={{ marginTop: 10 }}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "violet",
  },
});

export default ListScreen;
