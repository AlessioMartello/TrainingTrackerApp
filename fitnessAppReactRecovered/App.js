import PastWorkouts from "./Pages/PastWorkouts";
import AddWorkout from "./Pages/AddWorkout";
import Home from "./Pages/Home";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { titles } from "./styles/stylesheet";

const Stack = createStackNavigator();

export default function App() {
  titlesFontSize = titles.fontSize;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          style={titles}
          name="Home"
          component={Home}
          options={{
            title: "Strength tracker",
            headerTitleStyle: { fontSize: titlesFontSize },
          }}
        />
        <Stack.Screen name="PastWorkouts" component={PastWorkouts} />
        <Stack.Screen name="AddWorkout" component={AddWorkout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
