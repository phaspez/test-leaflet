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

import { useState } from "react";

export interface LocationsUpdater {
  updateLocations(locs: any): void;
}

function LocationTypeSelector({ updateLocations }: LocationsUpdater) {
  let locations = [
    ANNOTATION,
    //BTB_RG,
    //BVNL,
    //CAM_KT,
    CAM_POINT,
    //CAM_REGION,
    //RAN,
    TEN,
    VE_POINT,
    //VE_REGION,
    //VN_HC,
  ];

  /* let selected: Array<boolean> = [
    false,
    //false,
    //false,
    //false,
    false,
    //false,
    //false,
    false,
    false,
    //false,
    //false,
  ]; */

  const [selected, setSelected] = useState<Array<boolean>>([
    false,
    false,
    false,
    false,
  ]);

  let name_location: Array<string> = [
    "Annotation.json",
    //"BTB_RG_2023.5.18.json",
    //"BVNL_2023.5.18.json",
    //"Cam KT_2023.5.18.json",
    "cam_point_25072022_point.json",
    //"cam_region_25072022_region.json",
    //"Ran_2023.json",
    "ten_.json",
    "ve_point_25072022.json",
    //"ve_region_25072022.json",
    //"VN_HCtinh.json",
  ];

  let count: Array<number> = [0, 1, 2, 3];

  const toggleSelected = (th: number) => {
    let newSelected = [...selected];
    newSelected[th] = !newSelected[th];
    setSelected(newSelected);
    console.log(selected);

    let newLocations = locations.filter((loc, index) => selected[index]);
    updateLocations(newLocations);
  };

  return (
    <>
      <h2>Select location type: </h2>
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        {count.map((value) => (
          <div className="py-1" key={name_location[value]}>
            <label htmlFor={name_location[value]}>{name_location[value]}</label>
            <input
              type="checkbox"
              id={name_location[value]}
              className="checkbox"
              onClick={() => toggleSelected(value)}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default LocationTypeSelector;
