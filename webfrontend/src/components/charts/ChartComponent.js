import React from "react";
import Chart from "react-apexcharts";
const ChartComponent = () => {
  return (
    <Chart
      options={options}
      series={series}
      type="bar"
      width="1000px"
      height="200px"
    />
  );
};

export default ChartComponent;
