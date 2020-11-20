import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "./components/DataTable";

function App() {
  const [details, setDetails] = useState([]);

  const fetchDetails = async () => {
    const { data } = await axios.get(
      "http://devserver.blkbox.ai/api/box/analysisPerformanceImpact?auth_test=true"
    );
    console.log(data);
    const fetchedData = data.data;
    setDetails(fetchedData);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div>
      <DataTable details={details} />
    </div>
  );
}

export default App;
