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
            <Text style={[styles.text, isSelected && styles.selectedText]}>
              {child.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ChildSelector;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  selected: {
    backgroundColor: "#4caf50",
    borderColor: "#388e3c",
  },
  text: {
    fontWeight: "bold",
    color: "#333",
  },
  selectedText: {
    color: "#fff",
  },
});