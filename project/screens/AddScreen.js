import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import StarRating from "react-native-star-rating-widget";
import { addCity, removeAllCities } from "../firebase/FirestoreController";
import { Button } from "react-native";

const AddScreen = () => {
  const [cityName, setCityName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [rating, setRating] = React.useState(0);

  const handleSave = async () => {
    await addCity(cityName, description, rating);
    alert("City saved!");
  };

  const handleDeleteAll = async () => {
    await removeAllCities();
    alert("All cities deleted!");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={setCityName}
            value={cityName}
            placeholder="City name"
          />

          <TextInput
            style={styles.input}
            onChangeText={setDescription}
            value={description}
            placeholder="Description"
          />
          <StarRating rating={rating} onChange={setRating} />

          <Button title="Save City" onPress={handleSave} />
          <Button
            title="Delete All Cities"
            onPress={handleDeleteAll}
            color="red"
          />

          <Text>Add Screeeen</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default AddScreen;
