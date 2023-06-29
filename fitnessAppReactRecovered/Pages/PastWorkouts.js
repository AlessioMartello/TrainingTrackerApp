import React, { Component } from "react";
import { useEffect, useState } from "react";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";

const getExercises = async () => {
  const [historicWorkoutDataset, setName] = useState([]);
  try {
    let response = await fetch("http://192.168.0.85:3000/exercises");
    const data = await response.json();
    setName(data);
    console.log(historicWorkoutDataset);
  } catch (error) {
    console.error(error);
  }
  useEffect(() => {
    getExercises();
  }, []);
};

export default class ExampleOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["Head", "Head2", "Head3"],
      tableData: [
        ["2023-06-28T23:00:00.000Z", "Bench press", "8"],
        ["2023-06-28T23:00:00.000Z", "Bent over row", "77"],
      ],
    };
  console.log(historicWorkoutDataset)
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  cellText: {
    fontSize: 14,
    fontWeight: 'bold'}
});
