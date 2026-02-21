import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import meals from "./src/mock-data/meals.json";
import { getSuggestedMeals } from "./src/utils/mealSuggestions";

export default function App() {

  const child = {
    name: "Ali",
    allergens: ["gluten"],
    dietaryPreference: "vegetarian"
  };

  const suggestions = getSuggestedMeals(meals, child);

  console.log("Suggested Meals:!!!!!!!!!!!!1", suggestions);

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});