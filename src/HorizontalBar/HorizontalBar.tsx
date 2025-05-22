import HC from "highcharts";
import Chart from "../Chart/Chart";
import "./HorizontalBar.css";

const options: HC.Options = {
  title: {
    text: `<div style="font-weight: normal; font-size: 24px;">Funder entries & exits over time</div>`,
    useHTML: true,
    align: "left",
  },
  chart: {
    type: "bar",
  },
  yAxis: {
    title: {
      text: "",
    },
    gridLineWidth: 0,
    labels: {
      enabled: false,
    },
    max: 100,
  },
  xAxis: {
    categories: [
      "Age groups",
      "Ethnic and racial groups",
      "Family relationships",
      "Gender and sexual identity",
      "Health",
      "Religious groups",
      "Social and economic status",
      "Work status and occupations",
    ],
    title: {
      text: null,
    },

    gridLineWidth: 0,
    lineWidth: 0,
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
      dataLabels: {
        enabled: true,
        format: "{point.y:.1f}%",
      },
      name: "John",
      data: [50, 30, 40, 70, 20, 60, 40, 10],
      color: "#2EAA94",
    } as any,
  ],
};

function HorizontalBar() {
  return (
    <div className="h-bar">
      <Chart type="h-bar" options={options} />
    </div>
  );
}

export default HorizontalBar;
