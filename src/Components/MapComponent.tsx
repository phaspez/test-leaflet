import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import useLocationManager from "./LocationContext";
import { useEffect, useState } from "react";

function MapComponent() {
  const { selectedLocations, locations } = useLocationManager();
  const [, setSelected] = useState(selectedLocations);

  useEffect(() => {
    setSelected(selectedLocations);
  }, [selectedLocations]);

  let styleOpt = [
    { color: "red", fillColor: "red" },
    { color: "blue", fillColor: "blue" },
    { color: "green", fillColor: "green" },
    { color: "black", fillColor: "black" },
  ];

  return (
    <>
      <MapContainer
        center={[11.83, 108.9]}
        zoom={7}
        scrollWheelZoom={true}
        className="limit-width"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {selectedLocations
          ? selectedLocations.map((cond: boolean, idx: number) =>
              cond ? (
                <GeoJSON
                  key={idx + "mapjson"}
                  data={locations[idx]}
                  pathOptions={styleOpt[idx % styleOpt.length]}
                />
              ) : undefined
            )
          : undefined}
      </MapContainer>
    </>
  );
}

export default MapComponent;
