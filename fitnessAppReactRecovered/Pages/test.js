const data = [{"Date": "2023-06-28T23:00:00.000Z", "Name": "Bench press", "Reps": 8, "Sets": 1, "Weight (Kg)": 50}, {"Date": "2023-06-28T23:00:00.000Z", "Name": "Bent over row", "Reps": 77, "Sets": 5, "Weight (Kg)": 8}]

const tableData = data.map(item => [item.Date, item.Name, item.Reps]);

console.log(tableData)