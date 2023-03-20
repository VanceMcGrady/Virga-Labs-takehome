
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

function Graph  ({combinedData})  {

  // combinedData is an array of objects -> each line is generated based on the corresponding dataKey value and displayed on the graph accordingly 
    return(
      <div id="graph-container">
        <LineChart width={800} height={400} data={combinedData} >
          <Line type="monotone" dataKey="LakePowellReleaseWater" stroke="red" />
          <Line type="monotone" dataKey="LakePowellStorageWater" stroke="green" />
          <Line type="monotone" dataKey="LakeMeadStorageWater" stroke="blue"  />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
          <XAxis dataKey="year" />
          <YAxis type="number" />
          <Tooltip />
        </LineChart>
      </div>
    )
}

export default Graph