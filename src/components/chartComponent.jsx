import React from 'react'
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(...registerables);
function ChartComponent() {
const data = {
  labels: ["Available Slots", "Booked Slots", "Vac Slots", "% Occ"],
  datasets: [
    {
      label: "GGNE",
      data: [111, 56, 55, 51],
      fill: false,
      backgroundColor: "rgba(255, 99, 132, 0.5",
      borderColor: "rgb(255, 99, 132)",
      borderWidth:2,
    },
    {
      label: "GGNW",
      data: [69, 31, 38, 45],
      fill: false,
      borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderWidth: 2,
    },
    {
      label: "DDR",
      data: [75, 33, 42, 44],
      fill: false,
      borderColor: "rgb(51, 168, 84)",
      backgroundColor: "rgba(51, 168, 84, 0.5)",
      borderWidth: 2, 
    },
    {
      label: "BHP",
      data: [88, 12,76, 14],
      fill: false,
      borderColor: "rgb(251, 188, 4)",
      backgroundColor: "rgba(251, 188, 4, 0.5)",
      borderWidth:2,

    },
    {
      label: "Khar",
      data: [69, 7,62, 10],
      fill: false,
      borderColor: "rgb(247, 111, 168)",
      backgroundColor:"rgba(247, 111, 168,0.5)",
      borderWidth:2,
    },{
      label: "Enable",
      data: [0, 12,0, 0],
      fill: false,
      borderColor: "rgb(2, 38, 115)",
      backgroundColor:"rgba(2, 38, 115,0.5)",
      borderWidth:2,

    },
    // {
    //     id:1,
    //     label:"Total",
    //     data:[412,151,261,37],
    //     fill:false,
    //     borderColor:"#f8f",
    //     backgroundColor:"",
    //     borderWidth:2,
    // }
  ]
};


  return (
    <div className="App" 
    style={{ height: "20rem", width: "35rem" }}>
      <Line data={data} />
    </div>
  );
}
export default ChartComponent;