import HC from "highcharts";
import Chart from "../Chart/Chart";
import topology from "./topology.json";
import mapMarkers from "./markers.csv";

import "./MapClusters.css";

const markers = (mapMarkers as []).slice(500)


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
  mapView: {
    padding: 5,
  },
  plotOptions: {
    mappoint: {
      cluster: {
        enabled: true,
        allowOverlap: false,
        animation: {
          duration: 450,
        },
        layoutAlgorithm: {
          type: "grid",
          gridSize: 70,
        },
        zones: [
          {
            from: 1,
            to: 4,
            marker: {
              radius: 13,
            },
          },
          {
            from: 5,
            to: 9,
            marker: {
              radius: 15,
            },
          },
          {
            from: 10,
            to: 15,
            marker: {
              radius: 17,
            },
          },
          {
            from: 16,
            to: 20,
            marker: {
              radius: 19,
            },
          },
          {
            from: 21,
            to: 100,
            marker: {
              radius: 21,
            },
          },
        ],
      },
    },
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
    {
      type: "mappoint",
      enableMouseTracking: true,
      accessibility: {
        point: {
          descriptionFormat:
            "{#if isCluster}" +
            "Grouping of {clusterPointsAmount} points." +
            "{else}" +
            "{city}, country code: {country}." +
            "{/if}",
        },
      },
      colorKey: "clusterPointsAmount",
      name: "Cities",
      data: markers,
      color: 'red',
      marker: {
        lineWidth: 1,
        lineColor: "#fff",
        symbol: "mapmarker",
        radius: 8,
      },
      dataLabels: {
        verticalAlign: "top",
      },
    },
  ],
};

function MapClusters() {
  return (
    <div className="map">
      <Chart type="map" options={options} />
    </div>
  );
}

export default MapClusters;
