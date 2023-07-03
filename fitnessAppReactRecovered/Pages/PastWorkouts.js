import { StyleSheet } from "react-native";
import {
  Table,
  Row,
  Rows,
} from "react-native-table-component";
import {useState, useEffect } from "react";

const TestVar = () => {
  const [historicWorkoutDataset, setName] = useState([]);
  const getExercises = async () => {

    try {
      let response = await fetch("http://192.168.0.85:3000/exercises");
      const data = await response.json();
      setName(data);
      console.log(historicWorkoutDataset)
      return historicWorkoutDataset

    } catch (error) {
      console.error(error);
    }
};

  useEffect(()=>{
    getExercises()
  }
    ,[]
  )

  const tableData = historicWorkoutDataset.map(item => [item.Date, item.Name, item.Reps, item.Sets]);



  return (
    <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>    
    <Row
      data={["Date", "Movement", "Reps", "Sets"]}
      style={styles.head}
      textStyle={styles.text}
    />
    <Rows data={tableData} textStyle={styles.text} />
  </Table>

          
          )
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  cellText: {
    fontSize: 14,
    fontWeight: 'bold'
  }
});

export default TestVar;
