import "./App.css";

import MapComponent from "./Components/MapComponent";
import LocationTypeSelector from "./Components/LocationTypeSelector";
import { LocationContextProvider } from "./Components/LocationContext";
import "./index.css";
function App() {
  return (
    <>
      <div className="container-fluid text-center">
        <h1>Map of something</h1>
        <LocationContextProvider>
          <LocationTypeSelector />
          <MapComponent />
        </LocationContextProvider>
      </div>
    </>
  );
}

export default App;
