import { useEffect, useState } from "react";
import Graph from "./components/Graph";
import React from "react";

function App() {

// initializes a state value for each of the 3 data sets as an empty array 
// and a rainfallData state value as an empty array. 
// the data from the three provided data sets will be processed according to 'user input' and converted into a single data set according to the users input
// this single dataset (rainfallData) will then be passed down to the graph component in a shape that can be processed by recharts
const [rainfallData, setRainfallData] = useState(
  {
    lakePowellStorage: null,
    lakePowellRealease: null, 
    lakeMeadStorage: null
  })
const [LakePowellStorageVolume, setLakePowellStorageVolume] = useState([])
const [LakePowellReleaseVolume, setLakePowellReleaseVolume] = useState()
const [LakeMeadStorageVolume, setLakeMeadStorageVolume] = useState([])


// get the data by making fetch requests to each of the provided links
// then we set the corresponding state value to that returned data
useEffect(()=>{
    //Lake Powell Storage Volume
     fetch('http://localhost:1234/api/lake-powell-storage')
     .then((response)=> response.json())
     .then((data)=> {
      console.log('in useEffect: ', data.data)
      setLakePowellStorageVolume(data.data)

     })

     // Lake Powell Realease Volume
    //  fetch('https://www.usbr.gov/uc/water/hydrodata/reservoir_data/919/json/17.json')
    //  .then((response)=> response.json())
    //  .then((data)=> {
    //   setLakePowellReleaseVolume(data)
    //  })

     // Lake Mead Storage Volume
    //  fetch('https://www.usbr.gov/uc/water/hydrodata/reservoir_data/919/json/17.json')
    //  .then((response)=> response.json())
    //  .then((data)=> {  `
    //   setLakeMeadStorageVolume(data)
    //  })

}, [])


const combinedData = []
// this is just an async issue -> fix issue
for (let i = 0; i < 10; i++){
  
  let date = LakePowellStorageVolume[i][0]
  let rainfall = LakePowellStorageVolume[i][1]
  combinedData.push({date: date, rainfall: rainfall})
  //combinedData.push(LakePowellStorageVolume)
}
  console.log('combined data: ', combinedData)
  return (
    <div className="App" >
      <h1>Water Data Visualization</h1>
      <p>{LakePowellStorageVolume[0]}</p>
      <Graph  combinedData={combinedData}/>
    </div>
  );
}

export default App;
