import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { divIcon } from "leaflet";
import { renderToString } from "react-dom/server";
import LocationIcon from "../LocationIcon/LocationIcon";

const LeafletMap = ({ position = { lat: 35.784705, lng: 51.444192 } }:any) => {
  const customIcon = divIcon({
    className: "custom-marker-icon",
    html: renderToString(<LocationIcon />),
  });

  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='<a href="https://www.sajjad.com">sajjad</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          <a href={`geo:${position.lat},${position.lng}`}>Direction</a>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
