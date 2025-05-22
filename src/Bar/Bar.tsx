import HC from "highcharts";
import Chart from "../Chart/Chart";
import "./Bar.css";

const options: HC.Options = {
  title: {
    text: `<div style="font-weight: normal; font-size: 24px;">Funder entries & exits over time</div>`,
    useHTML: true,
    align: "left",
  },
  chart: {
    type: "column",
  },
  yAxis: {
    title: {
      text: "",
    },
    gridLineWidth: 0,
  },
  xAxis: {
    categories: ["`17", "`18", "`19", "`20", "`21"],
    title: {
      text: "",
    },
    lineWidth: 0,
    tickWidth: 0,
  },
  credits: {
    enabled: false,
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    column: {
      stacking: "normal",
      borderRadius: 0,
    },
  },
  series: [
    {
      name: "John",
      data: [5000, 3000, 4000, 7000, 2000],
      color: "#2EAA94",
    } as any,
    {
      name: "Jane",
      data: [-2000, -1000, -3000, 0, -5000],
      color: "#D32934",
    } as any,
  ],
};

function Bar() {
  return (
    <div className="bar">
      <Chart type="bar" options={options} />
    </div>
  );
}

export default Bar;
