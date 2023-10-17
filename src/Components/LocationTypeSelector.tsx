import { useState, useEffect } from "react";
import useLocationManager from "./LocationContext";
import "../App.css";

function LocationTypeSelector() {
  const { setLocations, nameLocations, styleOpt } = useLocationManager();
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
        {nameLocations.map((value, idx) => (
          <div className="grid py-1 pt-10" key={value.toString()}>
            <span style={{ color: styleOpt[idx].color }}> ■ </span>
            <label htmlFor={value.toString()}>{value}</label>
            <input
              type="checkbox"
              id={value.toString()}
              className="checkbox"
              onChange={() => toggleSelected(idx)}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default LocationTypeSelector;
