import { useEffect, useState } from "react";
import Graph from "./components/Graph";


function App() {

// initializes a state value for each of the 3 data sets as an empty array 
// and a rainfallData state value as an empty array. 
// the data from the three provided data sets will be processed according to 'user input' and converted into a single data set according to the users input
// this single dataset (rainfallData) will then be passed down to the graph component in a shape that can be processed by recharts
const [rainfallData, setRainfallData] = useState([])
const [LakePowellStorageVolume, setLakePowellStorageVolume] = useState()
const [LakePowellReleaseVolume, setLakePowellReleaseVolume] = useState()
const [LakeMeadStorageVolume, setLakeMeadStorageVolume] = useState([])


// get the data by making fetch requests to each of the provided links
// I'm having cors issues with the provided URLs so no data is actually being returned, but this useEffect hook is intended to fetch the data from the URLs
// and assign the corresponding state value to that dataSet
useEffect(()=>{

    //Lake Powell Storage Volume
     fetch('http://localhost:1234/api/lake-powell-storage')
     .then((response)=> response.json())
     .then((data)=> {
      console.log(data)
      setLakePowellStorageVolume(data)
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
    //  .then((data)=> {
    //   setLakeMeadStorageVolume(data)
    //  })


}, [])
// parse through the data and produce a new array which will be compatible with recharts
// because I was having issues fetching the JSON data from the provided datasets, I provided some simple mock data to demonstrate the concept
const mockLakePowellStorage = [
  {year: 2000, water: 34},
  {year: 2001, water: 24},
  {year: 2002, water: 58},
  {year: 2003, water: 88},
  {year: 2004, water: 33}
]
const mockLakePowellRealease = [
  {year: 2000, water: 46},
  {year: 2001, water: 23},
  {year: 2002, water: 58},
  {year: 2003, water: 18},
  {year: 2004, water: 68}
]
const mockLakeMeadStorage = [
  {year: 2000, water: 45},
  {year: 2001, water: 34},
  {year: 2002, water: 46},
  {year: 2003, water: 50},
  {year: 2004, water: 60}
]

const combinedData = []

// as an example, here we iterate through the length of the data and push a new object with the data formatted according to our needs onto the 
// combined data array -> this is because recharts, the data viz tool I'm using, expects the data to be in this format. This step in the process could vary
// and we could populate these objects based on the users input so that the graph displays the data in the desired format. Here we have a simple example, but the 
// idea is more or less scalable -> we fetch the data and then we translate the data into a single array of objects to be displayed in the Graph component. 
for (let i = 0; i < mockLakePowellStorage.length; i++){
  combinedData.push(
    {year: mockLakePowellStorage[i].year, 
     LakePowellStorageWater: mockLakePowellStorage[i].water,
     LakePowellReleaseWater: mockLakePowellRealease[i].water,
     LakeMeadStorageWater: mockLakeMeadStorage[i].water
    }
  )
}

  return (
    <div className="App" >
      <h1>Water Data Visualization</h1>
      <Graph  combinedData={combinedData}/>
    </div>
  );
}

export default App;
