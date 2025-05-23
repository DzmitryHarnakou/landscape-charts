import Bar from "./Bar/Bar";
import HorizontalBar from "./HorizontalBar/HorizontalBar";
import Map from "./Map/Map";
import MapClusters from "./MapClusters/MapClusters";
import Pie from "./Pie/Pie";
import PieCustomTooltip from "./PieCustomTooltip/PieCustomTooltip";

function App() {
  return (
    <>
      <MapClusters />
      <Pie />
      <PieCustomTooltip />
      <Map />
      <Bar />
      <HorizontalBar />
    </>
  );
}

export default App;
