import SelectDropdown from "react-native-select-dropdown";
const movements = ["Bench press", "Bent over row", "Deadlift", "Squat"];
import { TextInput, View, Button } from "react-native";
import { useState } from "react";

export default function AddWorkout({ navigation, route }) {
  const [set, setSet] = useState(""); //Used for the input text
  const [rep, setRep] = useState(""); //Used for the input text
  const [weight, setWeight] = useState(""); //Used for the input text
  const [selectedExercise, setSelectedExercise] = useState(null); //Used for the input text

  // Define the Post request
  let requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: selectedExercise,
      reps: rep,
      sets: set,
      weight: weight,
    }),
  };

  function checkNumeric(values) {
    return values.every((val) => !isNaN(val) && val !== "");
  }


  const postSet = async () => {
    if (checkNumeric([rep, set, weight]) && selectedExercise != null) {
      
      fetch("http://192.168.0.85:3000/add-entry", requestOptions).catch(
        (error) => console.error(error)
      );
      setSet("");
      setWeight("");
      setRep("");
      this.setsInput.clear();
      this.repsInput.clear();
      this.weightInput.clear();
    } else {
      console.log("invalid entry");
    }
  };
  return (
    <View>
      <SelectDropdown
        data={movements}
        onSelect={(selectedItem, index) => {
          setSelectedExercise(selectedItem);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
      />

      <TextInput
        ref={(input) => {
          this.setsInput = input;
        }}
        style={{ height: 40 }}
        placeholder="Enter the number of Sets"
        onChangeText={(newText) => setSet(newText)}
      />

      <TextInput
        ref={(input) => {
          this.repsInput = input;
        }}
        style={{ height: 40 }}
        placeholder="Enter the number of Reps"
        onChangeText={(newText) => setRep(newText)}
      />

      <TextInput
        ref={(input) => {
          this.weightInput = input;
        }}
        style={{ height: 40 }}
        placeholder="Enter the weight (in Kgs)"
        onChangeText={(newText) => setWeight(newText)}
      />

      <Button title="Enter" onPress={postSet}>
        Enter
      </Button>
    </View>
  );
}
