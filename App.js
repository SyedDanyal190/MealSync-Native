import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { MealProvider } from "./src/context/MealContext";
import MealMenuScreen from "./src/screens/MealMenuScreen";
import AdminScreen from "./src/screens/AdminScreen";

export default function App() {
  const [screen, setScreen] = useState("menu");

  return (
    <MealProvider>
      <View style={styles.container}>
        <View style={styles.nav}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => setScreen("menu")}
          >
            <Text style={styles.navText}>Menu</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navButton}
            onPress={() => setScreen("admin")}
          >
            <Text style={styles.navText}>Admin</Text>
          </TouchableOpacity>
        </View>

        {screen === "menu" ? <MealMenuScreen /> : <AdminScreen />}
      </View>
    </MealProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "red",
  },
  navButton: {
    padding: 8,
    backgroundColor: "#4caf50",
    borderRadius: 6,
  },
  navText: {
    color: "#fff",
    fontWeight: "bold",
  },
});