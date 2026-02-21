// MealCard.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MealCard = ({ meal, small }) => {
  return (
    <View style={[styles.card, small && styles.cardSmall]}>
      <Text style={[styles.name, small && styles.nameSmall]}>{meal.name}</Text>
      <Text style={[styles.price, small && styles.priceSmall]}>
        ${meal.price.toFixed(2)} CAD
      </Text>
      <Text style={[styles.tag, small && styles.tagSmall]}>Cuisine: {meal.cuisineTag}</Text>
      <Text style={[styles.tag, small && styles.tagSmall]}>
        Allergens: {meal.allergens.length ? meal.allergens.join(", ") : "None"}
      </Text>
    </View>
  );
};

export default MealCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardSmall: {
    padding: 8,
    marginVertical: 4,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
  nameSmall: {
    fontSize: 14,
    marginBottom: 2,
  },
  price: {
    fontSize: 16,
    marginBottom: 4,
  },
  priceSmall: {
    fontSize: 12,
    marginBottom: 2,
  },
  tag: {
    fontSize: 14,
    color: "#555",
    marginBottom: 2,
  },
  tagSmall: {
    fontSize: 12,
    marginBottom: 1,
  },
});