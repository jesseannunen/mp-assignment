import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import StarRating from "react-native-star-rating-widget";

const AddScreen = () => {
  const [cityName, setCityName] = React.useState("");
  const [descrption, setDescrption] = React.useState("");
  const [rating, setRating] = React.useState(0);

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
            onChangeText={setDescrption}
            value={descrption}
            placeholder="Description"
          />
          <StarRating rating={rating} onChange={setRating} />
          <Text>Add Screeeen</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default AddScreen;
