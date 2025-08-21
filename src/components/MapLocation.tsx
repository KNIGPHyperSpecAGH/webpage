import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Ikona markera w kolorze z @theme --color-primary
const markerIcon = new L.DivIcon({
  className: "",
  html: `
	<svg width="32" height="48" viewBox="0 0 32 48" fill="none" xmlns="http://www.w3.org/2000/svg">
	  <g filter="drop-shadow(0 2px 4px rgba(0,0,0,0.3))">
		<path d="M16 0C7.163 0 0 7.163 0 16c0 10.667 16 32 16 32s16-21.333 16-32C32 7.163 24.837 0 16 0z" fill="var(--color-element)" stroke="#fff" stroke-width="2"/>
		<circle cx="16" cy="16" r="6" fill="#fff"/>
	  </g>
	</svg>
  `,
  iconSize: [32, 48],
  iconAnchor: [16, 48],
  popupAnchor: [0, -48],
});

const center: LatLngExpression = [50.065682781590695, 19.920127987861633]; // C-4 location

export const MapLocation = () => (
  <div
    className="w-full max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-lg border-2 border-accent bg-element relative"
    style={{ zIndex: 0 }}
  >
    <MapContainer
      center={center}
      zoom={16}
      scrollWheelZoom={true}
      className="w-full h-80"
      style={{
        minHeight: "20rem",
        background: "var(--color-secondary)",
        zIndex: 0,
      }}
      dragging={true}
      zoomControl={true}
      attributionControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center} icon={markerIcon}>
        <Popup>
          <strong>KNIGP HyperSpec AGH</strong>
          <br /> Wydział Geodezji Górniczej i Inżynierii Środowiska
          <br /> pawilon C-4, al. Mickiewicza 30, Kraków
        </Popup>
      </Marker>
    </MapContainer>
  </div>
);
