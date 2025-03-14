import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListScreen from "./screens/ListScreen";
import AddScreen from "./screens/AddScreen";
import MapScreen from "./screens/MapScreen";
import "@expo/metro-runtime";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Locations">
        <Stack.Screen
          name="Locations"
          component={ListScreen}
          options={{ path: "locations" }}
        />
        <Stack.Screen
          name="Add location"
          component={AddScreen}
          options={{ path: "add-location" }}
        />
        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{ path: "Map" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
