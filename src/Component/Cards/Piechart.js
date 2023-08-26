import React from "react";
import './chart.css';
import Chart from 'react-apexcharts';

function PieChart() {
  const data2={
    options: {
      colors:['#618DEC', '#213E7C', '#0647D1']
    },
    series: [15,30,55],
    labels: ["Social","Referral","Direct"]
  };
return (
  <div>
    
<div className="PiechartArea">
<Chart options={data2.options} series={data2.series} type="donut"  />
</div></div>
);
}

export default PieChart;
