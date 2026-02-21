import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MealCard = ({ meal }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{meal.name}</Text>
      <Text style={styles.price}>${meal.price.toFixed(2)} CAD</Text>
      <Text style={styles.tag}>Cuisine: {meal.cuisineTag}</Text>
      <Text style={styles.tag}>
        Allergens: {meal.allergens.length ? meal.allergens.join(", ") : "None"}
      </Text>
    </View>
  );
};

export default MealCard;

const styles = StyleSheet.create({
  card: {
           borderWidth: 2,          // instead of "1px"
    borderColor: "red",      // instead of "solid red"
    backgroundColor: "#f2f2f2",
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
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
  },
});