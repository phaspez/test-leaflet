import { useState, useEffect } from "react";
import useLocationManager from "./LocationContext";
import "../App.css";

export interface LocationsUpdater {
  setLocations(locs: any): void;
}

function LocationTypeSelector() {
  const { setLocations, count_locations, name_locations } =
    useLocationManager();
  const [selected, setSelected] = useState<Array<boolean>>([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const toggleSelected = (th: number) => {
    let newSelected = [...selected];
    newSelected[th] = !newSelected[th];
    setSelected(newSelected);
  };

  useEffect(() => {
    setLocations(selected);
  }, [selected]);

  return (
    <>
      <h2>Select location type: </h2>
      <div className="grid grid-rows-4 gap-4">
        {count_locations.map((value) => (
          <div className="grid py-1 pt-10" key={value.toString()}>
            <label htmlFor={value.toString()}>{name_locations[value]}</label>
            <input
              type="checkbox"
              id={value.toString()}
              className="checkbox"
              onChange={() => toggleSelected(value)}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default LocationTypeSelector;
