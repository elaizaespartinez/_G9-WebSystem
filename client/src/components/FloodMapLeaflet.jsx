import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { floodMapConfig, getHazardStyle } from "../config/mapConfig";

function FloodMapLeaflet() {
    const mapElement = useRef(null);
    const [tileError, setTileError] = useState(false);

    useEffect(() => {
        if (!mapElement.current) return undefined;

        const map = L.map(mapElement.current, {
            center: floodMapConfig.center,
            zoom: floodMapConfig.zoom,
            minZoom: floodMapConfig.minZoom,
            maxZoom: floodMapConfig.maxZoom,
            maxBounds: floodMapConfig.maxBounds,
            maxBoundsViscosity: 0.75,
            zoomControl: true,
        });

        const tiles = L.tileLayer(floodMapConfig.tileUrl, {
            attribution: floodMapConfig.tileAttribution,
            minZoom: floodMapConfig.minZoom,
            maxZoom: floodMapConfig.maxZoom,
        }).addTo(map);

        const hazardLayer = L.geoJSON(null, {
            style: getHazardStyle,
            onEachFeature: (feature, layer) => {
                const level = feature.properties?.hazard_level || "Unknown";
                layer.bindPopup(`<strong>Flood hazard: ${level}</strong><br /><small>SAMPLE DATA - NOT REAL HAZARD DATA</small>`);
            },
        }).addTo(map);

        L.control.layers(
            { "OpenStreetMap": tiles },
            { "Flood hazard overlay": hazardLayer },
            { collapsed: false },
        ).addTo(map);
        L.control.scale({ imperial: false }).addTo(map);

        const handleTileError = () => setTileError(true);
        tiles.on("tileerror", handleTileError);

        fetch(floodMapConfig.hazardDataPath)
            .then((response) => {
                if (!response.ok) return null;
                return response.json();
            })
            .then((geoJson) => {
                if (geoJson) hazardLayer.addData(geoJson);
            })
            .catch(() => {
                // A missing hazard file must not prevent the base map from working.
            });

        requestAnimationFrame(() => map.invalidateSize());

        return () => {
            tiles.off("tileerror", handleTileError);
            map.remove();
        };
    }, []);

    return (
        <div className="relative h-full min-h-[24rem] overflow-hidden rounded-xl bg-slate-200 shadow-card">
            <div ref={mapElement} className="h-full min-h-[24rem] w-full" />
            <div className="pointer-events-none absolute bottom-3 left-3 z-[400] rounded-lg bg-white/95 px-3 py-2 text-xs shadow-card">
                <p className="mb-1 font-semibold text-text">Flood hazard</p>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                    <span><i className="mr-1 inline-block h-2.5 w-2.5 rounded-full bg-[#9bdd72]" />Low</span>
                    <span><i className="mr-1 inline-block h-2.5 w-2.5 rounded-full bg-[#ffcc00]" />Medium</span>
                    <span><i className="mr-1 inline-block h-2.5 w-2.5 rounded-full bg-[#ff5b5b]" />High</span>
                </div>
            </div>
            {tileError && (
                <p className="absolute right-3 top-3 z-[400] max-w-[15rem] rounded-lg bg-white/95 px-3 py-2 text-xs text-text shadow-card">
                    Map tiles are unavailable. The map and hazard controls are still available.
                </p>
            )}
        </div>
    );
}

export default FloodMapLeaflet;