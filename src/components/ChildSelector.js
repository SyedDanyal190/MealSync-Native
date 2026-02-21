import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ChildSelector = ({ childrenList, selectedChild, onSelect }) => {
  return (
    <View style={styles.container}>
      {childrenList.map(child => {
        const isSelected = child.id === selectedChild.id;

        return (
          <TouchableOpacity
            key={child.id}
            style={[styles.button, isSelected && styles.selected]}
            onPress={() => onSelect(child)}
          >
            <Text style={styles.text}>{child.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ChildSelector;

const styles = StyleSheet.create({
  container: {
       borderWidth: 2,         
    borderColor: "red",      
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  button: {
    padding: 8,
    backgroundColor: "#ddd",
    borderRadius: 6,
  },
  selected: {
    backgroundColor: "#4caf50",
  },
  text: {
    fontWeight: "bold",
  },
});