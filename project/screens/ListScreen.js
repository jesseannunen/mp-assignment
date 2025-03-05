import React from "react";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button } from "react-native";

const locations = [
  { id: 1, name: "Oulu", description: "Cold but nice", rating: 1 },
  { id: 2, name: "Kempele", description: "Metropol", rating: 5 },
];

const Item = ({ name, description, rating }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
    <Text>{description}</Text>
    <Text>⭐ {rating} / 5</Text>
  </View>
);

const ListScreen = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <FlatList
            data={locations}
            renderItem={({ item }) => (
              <Item
                name={item.name}
                description={item.description}
                rating={item.rating}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
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
