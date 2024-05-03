import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  return (
    <>
      <StatusBar style="auto"></StatusBar>
      <CategoriesScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
