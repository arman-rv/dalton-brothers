import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarker from "../../../../assets/Images/mapMarker.png"
import { IconMapPinFilled } from '@tabler/icons-react';

const Map = () => {
  const position = [36.59790618322929, 53.064692847374985]; // Set initial latitude and longitude

  const customIcon = new L.Icon({
    iconUrl: mapMarker,
    iconSize: [32, 32], // Set the size of the icon
    iconAnchor: [16, 32], // Set the anchor point for the icon (where it's positioned in relation to the marker's location)
  });



  return (
    <MapContainer center={position} zoom={15} style={{ height: '550px' , borderRadius : '20px' }}>
      <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={customIcon}  position={position}>
        <Popup>
         آکادمی برنامه نویسی بحر العلوم
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export  {Map};