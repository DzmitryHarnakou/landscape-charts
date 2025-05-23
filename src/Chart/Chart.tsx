import HC from "highcharts";
import * as HM from "highcharts/highmaps";
import "highcharts/modules/marker-clusters";


import HighchartsReact from "highcharts-react-official";

const getModule = (type: 'pie' | 'map' | 'bar' | 'h-bar') => {
  if (type === 'map') return HM
  return HC
}

const getConstructorType = (type: 'pie' | 'map' | 'bar' | 'h-bar') => {
  if (type === 'map') return "mapChart"
  return
}

export default function Chart({ type, options }: { type: 'pie' | 'map' | 'bar' | 'h-bar', options: HM.Options }) {
  return (
    <HighchartsReact
      constructorType={getConstructorType(type)}
      highcharts={getModule(type)}
      options={options}
    />
  );
}
