// @ts-ignore
import "./App.css";

import { useState } from "react";
import MapComponent from "./Components/MapComponent";
import LocationTypeSelector from "./Components/LocationTypeSelector";
import { LocationContextProvider } from "./LocationContext";

function App() {
  const [data, setData] = useState();

  const updateLocations = (locs: any) => {
    setData(locs);
  };

  return (
    <>
      <div className="container-fluid text-center">
        <h1>Map of something</h1>
        <LocationContextProvider>
          <LocationTypeSelector updateLocations={updateLocations} />
          <MapComponent locationData={data} />
        </LocationContextProvider>
      </div>
    </>
  );
}

export default App;
