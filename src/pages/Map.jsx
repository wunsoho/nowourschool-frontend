import React, { useEffect, useRef, useState } from "react";
import "../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MapContent, MapHeader, MapMenu, MapTitle, GoogleMap } from "./Map.styled";

function Map() {
    const [map, setMap] = useState(null);
    const ref = useRef();
    const myStyles = [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
      ];
  
    useEffect(()=>{
        const newMap = new window.google.maps.Map(ref.current, {
            center: { lat: 35.5437, lng: 129.2562 },
            zoom: 17,
            options: {disableDefaultUI: true, styles: myStyles}
        });
        setMap(newMap);
    },[])

    

  return (
    <MapContent>
        <MapHeader>
            <MapMenu>
                <FontAwesomeIcon
                    icon="bars"
                    style={{ fontSize: '1.8em' }} />
            </MapMenu>
            <MapTitle>지도</MapTitle>
            <div></div>
        </MapHeader>
        <GoogleMap
            ref={ref}
            id="map"
            style={{ width: "100%", height: "90vh"}}
        ></GoogleMap>
    </MapContent>
  );
}

export default Map;