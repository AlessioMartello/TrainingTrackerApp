import PastWorkouts from "./PastWorkouts";
import AddWorkout from "./AddWorkout";
import Home from "./Home";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Log your workouts" }}
        />
        <Stack.Screen name="PastWorkouts" component={PastWorkouts} />
        <Stack.Screen name="AddWorkout" component={AddWorkout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}