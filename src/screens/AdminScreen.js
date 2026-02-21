import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { MealContext } from "../context/MealContext";

const AdminScreen = () => {
  const { meals, dispatch } = useContext(MealContext);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Admin Dashboard</Text>

      <FlatList
        data={meals}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>${item.price.toFixed(2)} CAD</Text>
              <Text style={styles.tag}>Cuisine: {item.cuisineTag}</Text>
              <Text style={styles.tag}>
                Allergens: {item.allergens.length ? item.allergens.join(", ") : "None"}
              </Text>
            </View>

            <TouchableOpacity
              style={[styles.button, item.isActive ? styles.active : styles.inactive]}
              onPress={() => dispatch({ type: "TOGGLE_MEAL", payload: item.id })}
            >
              <Text style={styles.buttonText}>
                {item.isActive ? "Active" : "Inactive"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default AdminScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f0f0", 
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center", 
    backgroundColor: "#4caf50", 
    color: "#fff",
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  info: {
    flex: 1,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    marginTop: 4,
  },
  tag: {
    fontSize: 13,
    marginTop: 2,
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
  },
  active: {
    backgroundColor: "#4caf50",
  },
  inactive: {
    backgroundColor: "#f44336",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});