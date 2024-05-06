import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { useContext } from "react";
import { FavoritesContext } from "../components/store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import Colors from "../constants/colors";

function FavoritesScreen() {
  const favoriteMealCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>
          You currently have not selected any meals as your favorite.
        </Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.primary500,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
