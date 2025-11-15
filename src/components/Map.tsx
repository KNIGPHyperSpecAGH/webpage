import { MapContainer, TileLayer, GeoJSON, useMapEvents } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import agh from "../assets/poligin.json";
import points from "../assets/point_2.json"


const center: LatLngExpression = [50.065682781590695, 19.920127987861633];

// Component that tracks zoom level
const ZoomWatcher = ({ setZoom }: { setZoom: (zoom: number) => void }) => {
  useMapEvents({
    zoomend: (e) => setZoom(e.target.getZoom()),
  });
  return null;
};

export const Map = () => {
  const [zoom, setZoom] = useState(17); // initial zoom

  return (
    <div
      className="mx-auto min-h-90% overflow-hidden shadow-lg border-2 border-accent bg-element"
      style={{ zIndex: 0 }}
    >
      <MapContainer
        center={center}
        zoom={17}
        scrollWheelZoom={true}
        className="w-full h-full"
        style={{
          minHeight: "100vh",
          background: "var(--color-secondary)",
          zIndex: 0,
        }}
        dragging={true}
        zoomControl={true}
        attributionControl={false}
      >
        <ZoomWatcher setZoom={setZoom} />

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Polygon visible only when zoom >= 16 */}
        {zoom >= 16 && (
          <GeoJSON
            data={agh as any}
            style={{
              color: "#ff0000",
              weight: 2,
              fillColor: "#ff6666",
              fillOpacity: 0.4,
            }}
          />
        )}

        {zoom < 16 && (
          <GeoJSON
            data={points as any}
            style={{
              color: "#ff0000",
              weight: 2,
              fillColor: "#ff6666",
              fillOpacity: 0.4,
            }}
          />
        )}
      </MapContainer>
    </div>
  );
};
