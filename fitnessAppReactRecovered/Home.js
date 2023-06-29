import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Past workouts"
        onPress={() => navigation.navigate("PastWorkouts")}
      />
      <Button
        title="Add a workout"
        onPress={() => navigation.navigate("AddWorkout")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
