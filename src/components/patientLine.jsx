import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useState } from "react";
import Chart from "chart.js/auto";
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function PatientLineChart({ cdata, selected }) {

  const [chartData, setChartData] = useState({
    labels: Object.values(cdata).map(item => item.date),

    datasets: [
      {
        label: "No of children",
        data: Object.values(cdata).map((item) => item.no_of_children),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderWidth: 2,
      },
      {
        label: "No of children (Apr - Mar`18)",
        data: Object.values(cdata).map((item) => item.no_of_child_uk),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderWidth: 2,
      },
      {
        label: "Potential",
        data: Object.values(cdata).map((item) => item.potential),
        borderColor: "rgb(51, 168, 84)",
        backgroundColor: "rgba(51, 168, 84, 0.5)",
        borderWidth: 2,
      },
      {
        label: "Drop Out",
        data: Object.values(cdata).map((item) => item.dropout),
        borderColor: "rgb(251, 188, 4)",
        backgroundColor: "rgba(251, 188, 4, 0.5)",
        borderWidth: 2,
      },
    ],
  });

  useEffect(()=>{
    setChartData({
      labels: Object.values(cdata).map(item => item.date),

      datasets: [
        {
          label: "No of children",
          data: Object.values(cdata).map((item) => item.no_of_children),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          borderWidth: 2,
        },
        {
          label: "No of children (Apr - Mar`18)",
          data: Object.values(cdata).map((item) => item.no_of_child_uk),
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
          borderWidth: 2,
        },
        {
          label: "Potential",
          data: Object.values(cdata).map((item) => item.potential),
          borderColor: "rgb(51, 168, 84)",
          backgroundColor: "rgba(51, 168, 84, 0.5)",
          borderWidth: 2,
        },
        {
          label: "Drop Out",
          data: Object.values(cdata).map((item) => item.dropout),
          borderColor: "rgb(251, 188, 4)",
          backgroundColor: "rgba(251, 188, 4, 0.5)",
          borderWidth: 2,
        },
      ],
    });

  }, [cdata])

  return (
    <>
      <div className="grid gap-4 grid-cols-2 items-center justify-center">
        <div
          className="chart-container"
          style={{ height: "20rem", width: "68rem" }}
        >
          <Line
            data={chartData}
            options={{
              maintainAspectRatio: false,

              scales: {
                y: {
                  max: 200,
                  min: 0,
                  ticks: {
                    stepSize: 5,
                  },
                },
              },
              plugins: {
                title: {
                  display: true,
                  text: (selected != 'all' ? `${selected} Location Wise Report`: `All Location Wise Report`),
                  font: {
                    size: 24,
                    family: 'Helvetica Neue'
                  }
                },
                legend: {
                  display: true,
                },
              },
            }}
          />
        </div>
      </div>
    </>
  );
}
export default PatientLineChart;
