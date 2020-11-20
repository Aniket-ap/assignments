import React from "react";
import { Bar } from "react-chartjs-2";

const TableChart = ({ detail }) => {
  const chart = detail.length ? (
    <Bar
      data={{
        labels: detail.map((id) => id.adaccount_id),
        datasets: [
          {
            data: detail.map((preData) => preData.pre),
            label: "Pre",
            borderColor: "yellow",
            backgroundColor: "#5abdd3",
          },
          {
            data: detail.map((postData) => postData.post),
            label: "Post",
            backgroundColor: "#0d1264",
          },
        ],
      }}
      width={800}
      height={450}
      options={{
        legend: { display: true, position: "bottom" },
        scales: {
          xAxes: [
            {
              ticks: {
                autoSkip: false,
                maxRotation: 90,
                minRotation: 90,
              },
            },
          ],
        },
      }}
    />
  ) : null;
  return <div>{chart}</div>;
};

export default TableChart;
