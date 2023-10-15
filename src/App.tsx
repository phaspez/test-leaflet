import "./App.css";

import { useState } from "react";
import MapComponent from "./Components/MapComponent";
import LocationTypeSelector from "./Components/LocationTypeSelector";

function App() {
  const [data, setData] = useState([]);

  const updateLocations = (locs: any) => {
    console.log(locs);
    setData(locs);
  };

  return (
    <>
      <div className="container-fluid text-center">
        <h1>Map of something</h1>
        <LocationTypeSelector updateLocations={updateLocations} />
        <MapComponent locationData={data} />
      </div>
    </>
  );
}

export default App;
