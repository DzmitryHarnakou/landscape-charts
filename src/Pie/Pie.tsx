import HC from "highcharts";
import Chart from "../Chart/Chart";
import "./Pie.css";

const data = [
  ["Independent", 27.16, true, true],
  ["Public Charity", 23.72, false],
  ["Family", 11.92, false],
  ["Operating", 6.86, false],
  ["Corporate", 6.12, false],
  ["Community", 5.48, false],
  ["DAFs", 3.89, false],
  ["Federal funders", 3.49, false],
  ["Other", 2.38, false],
];

function getSubtitle() {
  const totalNumber = data[0][1];
  return `<div style="font-size: 24px;">Total funders</div>
        <div style="align: center;font-size: 18px;line-height:28px;">
            ${Number(totalNumber).toFixed(3).replace(".", ",")}
        </div>`;
}

const options: HC.Options = {
  title: {
    text: `<div style="font-weight: normal; font-size: 24px;">Organization by type</div>`,
    useHTML: true,
    align: "left",
  },
  chart: {
    style: { fontFamily: 'inherit', color: 'black' },
  },
  subtitle: {
    text: getSubtitle(),
    align: "center",
    floating: true,
    useHTML: true,
    verticalAlign: "middle",
    style: { color: 'black' },
  },
  tooltip: {
    pointFormat: "Amount: <b>{point.percentage:.1f}%</b>",
  },
  legend: {
    symbolRadius: 0,
    align: "center",
    layout: "horizontal",
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: false,
      },
      showInLegend: true,
      borderRadius: 0,
      borderWidth: 0,
      size: "100%",
      innerSize: "80%",
    },
  },
  series: [
    {
      type: "pie",
      data: data,
    },
  ],
};

function Pie() {
  return (
    <div className="pie-chart">
      <Chart type='pie' options={options} />
    </div>
  );
}

export default Pie;
