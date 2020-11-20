import React, { useState } from "react";

import { Bar } from "react-chartjs-2";

const TableChart = ({ detail }) => {
  const [dropDownlabel, setDropDownlabel] = useState(Object.keys(detail.data));
  const [labelsData, setLabelsData] = useState([]);

  console.log(dropDownlabel);
  // Object.keys(detail.data)

  const handleChange = (event) => {
    setDropDownlabel(event.target.value);
  };

  const data = {
    labels: labelsData,
    datasets: [
      {
        label: "Pre",
        data: [3, 4, 5, 1, 9],
      },
      {
        label: "Post",
        data: [1, 8, 4, 5, 7],
      },
    ],
  };

  return (
    <div>
      <Bar data={data} />
      <div className="labelTags"></div>
    </div>
  );
};

export default TableChart;
