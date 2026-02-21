import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { MealProvider } from "./src/context/MealContext";
import MealMenuScreen from "./src/screens/MealMenuScreen"; 
import AdminScreen from './src/screens/AdminScreen';

export default function App() {
  return (
    <MealProvider>
      <View style={styles.container}>
        <MealMenuScreen /> 
        <br />
        <AdminScreen />
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