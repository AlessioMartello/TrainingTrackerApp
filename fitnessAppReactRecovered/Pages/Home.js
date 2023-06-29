import { StatusBar } from "expo-status-bar";
import { Pressable, View, Text } from "react-native";
import { buttonStyle, container, Buttonfonts } from "../styles/stylesheet";

export default function Home({ navigation }) {
  return (
    <View style={container}>
      <Pressable
        style={buttonStyle}
        onPress={() => navigation.navigate("PastWorkouts")}
      >
        <Text style={Buttonfonts}>Past workouts</Text>
      </Pressable>
      <Pressable
        style={buttonStyle}
        onPress={() => navigation.navigate("AddWorkout")}
      >
        <Text style={Buttonfonts}>Add a workout</Text>
      </Pressable>

    <StatusBar 
    backgroundColor='rgba(10, 0, 255, 0.3)'
    />

    </View>
  );
}
