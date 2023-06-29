import React from "react";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function PastWorkouts({ navigation, route }) {
  const [name, setName] = useState([]);

  const getExercises = async () => {
    try {
      let response = await fetch("http://192.168.0.85:3000/exercises");
      const data = await response.json();
      setName(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getExercises();
  }, []);

  return (
    <View>
      {name.map((item, index) => (
        <Text key={index}>
          {item.Name} {item.Reps} {item.Sets}
        </Text>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}
