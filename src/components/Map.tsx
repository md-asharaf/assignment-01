"use client";
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

type Tuple = [number, number];
type MarkerType = {
    position: Tuple;
    label: string;
};

L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png",
    iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

const markers: MarkerType[] = [
    { position: [28.6139, 77.209], label: "New Delhi" },
    { position: [19.076, 72.8777], label: "Mumbai" },
    { position: [13.0827, 80.2707], label: "Chennai" },
    { position: [22.5726, 88.3639], label: "Kolkata" },
    { position: [12.9716, 77.5946], label: "Bangalore" },
];

const MapCenter = ({ center }: { center: Tuple }) => {
    const map = useMap();

    useEffect(() => {
        map.setView(center, 5);
    }, [center, map]);

    return null;
};

const MapComponent = () => {
    const [center, setCenter] = useState<Tuple>([22.5726, 88.3639]);
    const handleMarkerclick = (position: Tuple) => {
        setCenter(position);
    };
    return (
        <MapContainer style={{ height: "100vh", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {markers.map((marker) => (
                <Marker
                    key={marker.label}
                    position={marker.position}
                    eventHandlers={{
                        click: () => handleMarkerclick(marker.position),
                    }}
                >
                    <Popup>{marker.label}</Popup>
                </Marker>
            ))}
            <MapCenter center={center} />
        </MapContainer>
    );
};

export default MapComponent;
