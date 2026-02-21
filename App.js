import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { MealProvider } from "./src/context/MealContext";
import MealMenuScreen from "./src/screens/MealMenuScreen"; 

export default function App() {
  return (
    <MealProvider>
      <View style={styles.container}>
        <MealMenuScreen /> 
        <StatusBar style="auto" />
      </View>
    </MealProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});