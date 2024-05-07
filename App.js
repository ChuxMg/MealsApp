import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import Colors from "./constants/colors";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
// import FavoritesContextProvider from "./components/store/context/favorites-context";
import { Provider } from "react-redux";
import { store } from "./components/store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary900 },
        headerTintColor: Colors.primary500,
        sceneContainerStyle: { backgroundColor: Colors.primaryBg },
        drawerContentStyle: { backgroundColor: Colors.primary900 },
        drawerInactiveTintColor: Colors.primary500,
        drawerActiveTintColor: Colors.primary900,
        drawerActiveBackgroundColor: Colors.primary600,
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Cagetories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: Colors.primary900 },
              headerTintColor: Colors.primary500,
              contentStyle: { backgroundColor: Colors.primaryBg },
            }}
          >
            <Stack.Screen
              name="All Categories"
              component={DrawerNavigation}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetail"
              component={MealDetailsScreen}
              options={{ title: "About the Meal" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}
