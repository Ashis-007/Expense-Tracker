import React, { useContext } from "react";
import Chart from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Context from "../context/Context";

const DoughnutChart = () => {
  const [data] = useContext(Context);

  let chartData = data.filter((transaction) => transaction.amount < 0);
  let myData = [];
  let myLabel = [];
  chartData.forEach((data) => {
    myData.push(Math.abs(data.amount));
    myLabel.push(data.text);
  });

  const state = {
    labels: myLabel,
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
          "#E44236",
          "#25CCF7",
          "#2ecc72",
          "#FAC42F",
          "#99AAAB",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
          "#B83227",
          "#0A79DF",
          "#26ae60",
          "#F3B63A",
          "#7B8788",
        ],
        data: myData,
      },
    ],
  };

  return (
    <div className="Chart">
      <Doughnut
        data={state}
        options={{
          title: {
            display: true,
            text: "",
            fontSize: 25,
          },
          legend: {
            display: true,
            position: "right",
            fontFamily: "sans-serif",
            fontSize: 20,
          },
          responsive: true,
        }}
      />{" "}
    </div>
  );
};

export default DoughnutChart;
