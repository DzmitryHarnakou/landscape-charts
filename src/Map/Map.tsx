import HC from "highcharts";
import Chart from "../Chart/Chart";
import topology from "./topology.json";
import "./Map.css";

const data = topology.objects.default.geometries.map((_, i) => i % 5);

const options: HC.Options = {
  title: {
    text: `<div style="font-weight: normal; font-size: 24px;">Organization by type</div>`,
    useHTML: true,
    align: "left",
  },
  chart: {
    map: topology,
    type: "map",
  },
  mapNavigation: {
    enabled: true,
  },
  colorAxis: {
    tickPixelInterval: 100,
    minColor: "#ffdc7e",
    maxColor: "#4f3a01",
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      data,
      joinBy: null,
      name: "Random data",
    } as any,
  ],
};

function Map() {
  return (
    <div className="map">
      <Chart type="map" options={options} />
    </div>
  );
}

export default Map;