import React, { useContext, useState, useMemo } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { MealContext } from "../context/MealContext";
import childrenData from "../mock-data/children.json";
import { getSuggestedMeals } from "../utils/mealSuggestions";
import MealCard from "../components/MealCard";
import ChildSelector from "../components/ChildSelector";

const MealMenuScreen = () => {
  const { meals } = useContext(MealContext);
  const [selectedChild, setSelectedChild] = useState(childrenData[0]);

  const suggestedMeals = useMemo(() => {
    return getSuggestedMeals(meals, selectedChild);
  }, [meals, selectedChild]);

  const activeMeals = meals.filter(meal => meal.isActive);

  return (
    <View style={styles.container}>
      <ChildSelector
        childrenList={childrenData}
        selectedChild={selectedChild}
        onSelect={setSelectedChild}
      />

      <Text style={styles.heading}>
        Suggested For You ({suggestedMeals.length})
      </Text>

  {suggestedMeals.length === 0 ? (
  <Text>No safe meals available</Text>
) : (
  suggestedMeals.map(meal => (
    <MealCard key={meal.id} meal={meal} small />  
  ))
)}

      <Text style={styles.heading}>
        All Meals ({activeMeals.length})
      </Text>

      <FlatList
        data={activeMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MealCard meal={item} />}
      />
    </View>
  );
};

export default MealMenuScreen;



const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    backgroundColor: "#f9f9f9" 
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 12,
    textAlign: "center",
    color: "#333",
  },
});


