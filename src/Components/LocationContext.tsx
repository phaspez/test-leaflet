import ANNOTATION from "../assets/geojson/geojson/ANNOTATION.json";
import BTB_RG from "../assets/geojson/geojson/BTB_RG_2023.5.18.json";
import BVNL from "../assets/geojson/geojson/BVNL_2023.5.18.json";
import CAM_KT from "../assets/geojson/geojson/Cam KT_2023.5.18.json";
import CAM_POINT from "../assets/geojson/geojson/cam_point_25072022_point.json";
import CAM_REGION from "../assets/geojson/geojson/cam_region_25072022_region.json";
import RAN from "../assets/geojson/geojson/Ran_2023.5.18.json";
import TEN from "../assets/geojson/geojson/ten_.json";
import VE_POINT from "../assets/geojson/geojson/ve_point_25072022.json";
import VE_REGION from "../assets/geojson/geojson/ve_region_05062023_region.json";
import VN_HC from "../assets/geojson/geojson/VN_HCtinh.json";

import { createContext, useContext, useState } from "react";

export interface LocationManager {
  setLocations(locs: Array<any>): void;
  locations: Array<any>;
  nameLocations: Array<any>;
  selectedLocations: Array<boolean>;
  styleOpt: Array<any>;
}

export interface LocationDetails {
  name: string;
  data: any;
}

const LocationContext = createContext<LocationManager | undefined>(undefined);

export const LocationContextProvider = (props: any) => {
  const [selectedLocations, setSelectedLocations] = useState<Array<boolean>>(
    []
  );

  const locations = [
    ANNOTATION,
    BTB_RG,
    BVNL,
    CAM_KT,
    CAM_POINT,
    CAM_REGION,
    RAN,
    TEN,
    VE_POINT,
    VE_REGION,
    VN_HC,
  ];

  let styleOpt = [
    { color: "red", fillColor: "red" },
    { color: "blue", fillColor: "blue" },
    { color: "violet", fillColor: "violet" },
    { color: "green", fillColor: "green" },
    { color: "black", fillColor: "black" },
    { color: "cyan", fillColor: "cyan" },
    { color: "orange", fillColor: "orange" },
    { color: "purple", fillColor: "purple" },
    { color: "brown", fillColor: "brown" },
    { color: "navy", fillColor: "navy" },
    { color: "magenta", fillColor: "magenta" },
  ];

  const nameLocations: Array<string> = [
    "Annotation.geojson",
    "BTB_RG_2023.5.18.geojson",
    "BVNL_2023.5.18.geojson",
    "Cam KT_2023.5.18.geojson",
    "cam_point_25072022_point.geojson",
    "cam_region_25072022_region.geojson",
    "Ran_2023.geojson",
    "ten_.geojson",
    "ve_point_25072022.geojson",
    "ve_region_25072022.geojson",
    "VN_HCtinh.geojson",
  ];

  const setLocations = (loc: any) => {
    setSelectedLocations(loc);
  };

  const contextValue = {
    setLocations,
    locations,
    selectedLocations,
    nameLocations,
    styleOpt,
  } as LocationManager;

  return (
    <LocationContext.Provider value={contextValue}>
      {props.children}
    </LocationContext.Provider>
  );
};

function useLocationManager() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error(
      "useLocationManager must be used within a LocationContextProvider"
    );
  }
  return context;
}

export default useLocationManager;
